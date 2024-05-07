
const express = require('express');
const router = new express.Router();
const whatsappClient = require("../services/WhatsappClient")
const multer  = require('multer')

const upload = multer()

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post("/message",  (req, res) => {
  whatsappClient.sendMessage(req.body.phoneNumber,req.body.message)
  res.send()
})




module.exports = router
