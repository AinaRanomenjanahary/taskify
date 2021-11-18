const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'imtic3@gmail.com',
        subject: 'Welcome to Task by imtic',
        text: `Welcome to Task by imtic, ${name}. We hope you enjoy using our app!`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'imtic3@gmail.com',
        subject: 'Sorry to see you go :(',
        text: `Sorry to see you go, ${name}. Please let us know what we could've done better!`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}   