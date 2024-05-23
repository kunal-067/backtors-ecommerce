const nodemailer = require('nodemailer');

// Create a transporter using your email service credentials
const emailId = process.env.EMAIL_ID ;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailId ,
        pass: process.env.EMAIL_PASSWORD
    }
});

async function sendMail(mail, subject, message) {
    if(!mail || message){
        throw new Error('missing parameter')
    }
    // Email content
    const mailOptions = {
        from: emailId ,
        to: mail ,
        subject: subject ,
        text: message
    };

    // Send the email
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error('Error in sending email', error);
            throw new Error('error in sending mail at Mail util', error)
        } else {
            console.log('Email sent successfully');
        }
    });

}

module.exports = sendMail