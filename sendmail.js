const nodemailer = require('nodemailer');
function send(output) {
  let transporter = nodemailer.createTransport({
    host: "",
    port: 465,
    // secure: false,
    auth : {
      user: '',
      pass: ''
      }
  });

  let mailOptions = {
    from: ' "Pro Web Desing Contact Form" <//email//>',
    to: '//email//',
    subject: 'New Contact Form Submitted',
    text: 'Hello World',
    html: output
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s' , info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
}

module.exports = { send : send};
