const express = require("express")
const messageRouter = require('./routers/messageRouter')
const whatsappclient = require('./services/WhatsappClient')
const mongoose  = require("mongoose");
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express()
app.use(express.json())
app.use(messageRouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}).then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

const PORT=3000

app.listen(PORT, () => console.log(`Server is ready in on port ${PORT}`))
