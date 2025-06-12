const nodemailer = require('nodemailer');

async function sendEmails(messageObj, emailAddress) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVICE,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // const ccRecipients = [...recipients.cc, emailAddress].join(',');
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: emailAddress,
    subject: messageObj.subject,
    text: messageObj.text,
    html: messageObj.html
  };

  await transporter.sendMail(mailOptions);
//   await transporter.sendMail(mailOptions2);
}

module.exports = { sendEmails };