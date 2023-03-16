const express = require('express')
const sendEmail = require('./sendemail')
var cors = require('cors')
const app = express()
const path = require('path')

const port = process.env.port || 80

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', function (_, res) {
  res.sendFile(
    path.join(__dirname, './client/build/index.html'),
    function (err) {
      res.status(500).send(err)
    }
  )
})
app.post('/sendmail', (req, res) => {
  sendEmail(req.body)
  res.status(200).json({ status: 'succesfull' })
})

const start = () => {
  app.listen(port, () => {
    console.log(`app is lesting at port    ${port} ..........`)
  })
}

start()
