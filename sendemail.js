const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mailto:ajjha5244@gmail.com',
    pass: 'nxjjngcibmsjeatw',
  },
})

const sendEmail = (data) => {
  const { emailType } = data
  const message = {
    to: 'ajjha5244@gmail.com',
    subject: `new ${emailType}  alert`,
    text: `person info : 
     ${JSON.stringify(data, null, '\t')}`,
  }

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
}

module.exports = sendEmail
