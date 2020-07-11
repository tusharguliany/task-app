const sgMail = require('@sendgrid/mail')

const fromEmail = 'bguliany@gmail.com'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: fromEmail,
        subject: 'Welcome to Task App',
        text: `Hello ${name},\nWelcome to the Task-App. 
        We offer variety of Services which You can contact us for like Full Stack Web Development, Mobile App Development for Android and IOS. Please give us a Chance to serve you in the future as Well.\nWelcome to the Community!\n\nThanks & Regards,\nTask-App Team`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: fromEmail,
        subject: 'Account Removal Status',
        text: `Hello ${name},\nYour Task-App Account has been successfully deleted. We would like to thank you for your Time and the opportunity to serve You.\n We would appreciate you taking your time to reply to this Email to let us know how we could have served you better and convinced you to Stay. It would help in the Company's Future.\n\nThanks & Regards,\nTask-App Team`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}