var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dioptrie7@gmail.com',
        pass: process.env.GMAIL_PASSWORD
    }
});


var send = function(email, url, text) {
    var mailOptions = {
        from: `"Ibrahima Diop" <${process.env.SENDER_EMAIL_ADDRESS}>`,
        to: email,
        subject: 'Envoie de mail en utilisant Node.js',
        html: `
        <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the DevAT channel.</h2>
        <p>Congratulations! You're almost set to start using DEVAT✮SHOP.
            Just click the button below to validate your email address.
        </p>
        
        <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${text}</a>
    
        <p>If the button doesn't work for any reason, you can also click on the link below:</p>
    
        <div>${url}</div>
        </div>
    `
    };
    return new Promise((resolve, reject)=> {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error);
            } else {
                resolve(info)
            }
        });
    })
}

module.exports = send;