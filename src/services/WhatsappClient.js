const { Client, LocalAuth } = require("whatsapp-web.js")
const qrcode = require("qrcode-terminal")



const whatsappClient=new Client({
    authStrategy:new LocalAuth,
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
        }
})

whatsappClient.on("qr",(qr)=>{qrcode.generate(qr,{small:true})})
whatsappClient.on("ready",()=>(console.log("client is ready")))

whatsappClient.on("message",async(msg)=>{
    try {
        if(msg.from!="status@broadcast"){
            const contact=await msg.getContact()
            console.log(contact,msg.body)
        }
    } catch (error) {
        console.log(error)
    }
})

whatsappClient.initialize()


module.exports = whatsappClient