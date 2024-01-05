const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
    client.getChats().then((chats) => {
        console.log('chats: ' + JSON.stringify(chats[3]));
    }).catch((error) => {
        console.error('error: ' + error)
    })
});

client.initialize();
