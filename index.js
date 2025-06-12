require("dotenv").config();
const { sendEmails } = require("./email.js");
const { addressMapping } = require("./const.js");
const { content } = require("./content.js");
const cors = require("cors"); 
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3050;

app.use(cors()); 
app.use(express.json());

app.post("/contact-form", async (req, res) => {
  const { name, email, number, subject, message, address } = req.body;

  // Validate the incoming data
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    console.log(address)
    const emailAddress = addressMapping[address];
    console.log(emailAddress)
    if (!emailAddress) {
      return res.status(400).json({ error: "Invalid address." });
    }

    const mailData = content(subject, name, email, message, number);

    sendEmails(mailData, emailAddress);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
