const sgMail = require('@sendgrid/mail')

const {
    GMAIL_PASSWORD,
    SENDER_EMAIL_ADDRESS,
    API_KEY
} = process.env

sgMail.setApiKey(API_KEY);
// send mail
const sendEmail = (to, url, txt) => {

    const mailOptions = {
        from: SENDER_EMAIL_ADDRESS,
        to: to,
        subject: "SendGrid testing in NodeJs",
        html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to KHALIL Dev.</h2>
            <p>Congratulations! You're almost set to start using DEVAT✮SHOP.
                Just click the button below to validate your email address.
            </p>
            
            <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
        
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
            <div>${url}</div>
            </div>
        `
    }
    return new Promise((resolve, reject) => {

        sgMail.send(mailOptions, (err, info) => {
            if (err)
                reject(err);
            resolve(info);
        })
    })
}

module.exports = sendEmail