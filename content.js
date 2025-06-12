function content(subject, name, email, message, number) {
  return {
    subject: `${name} sent you a message via your contact form`,
    // subject: subject,
    text: `Hello,\n\nYou have received a new message through your contact form:\n\nName: ${name}\nEmail: ${email}\nPhone: ${number}\n\nMessage:\n${message}\n\nBest regards,\nYour Website`,
    html: `<p><strong>Hello,</strong></p>
           <p>You have received a new message through your contact form:</p>
           <ul>
             <li><strong>Name:</strong> ${name}</li>
             <li><strong>Email:</strong> ${email}</li>
             <li><strong>Phone:</strong> ${number}</li>
           </ul>
           <p><strong>Message:</strong></p>
           <p>${message}</p>
           <p>Best regards,<br>Your Website</p>`
  };
}

module.exports = { content };