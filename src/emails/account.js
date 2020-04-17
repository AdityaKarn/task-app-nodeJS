const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)


// const sendWelcomeEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'adityakarn26@gmail.com',
//         subject: 'Thanks for joining in!',
//         text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
//     })
// }

sgMail.send({
    to: 'harmeetsinghh2001@gmail.com',
    from: 'DONOTREPLYNSUT@nsut.ac.in',
    subject: '[NSUT] Notice regarding Love Interest',
    text: 'Dear student, It has been come to notice that Harmeet Singh(2019UCO1515) loves Tabishi(2019UCO1506). It is advised to harmeet to work on the same. Best of luck homie'
})

// const sendCancellationEmail = (email, name) =>{
//     sgMail.send({
//         to: email,
//         from: 'adityakarn26@gmail.com',
//         subject: 'Sorry to see you go',
//         text: `Goodbye, ${name}. Hope you come back soon`
//     })
// }

// module.exports = {
//     sendWelcomeEmail,
//     sendCancellationEmail
// }