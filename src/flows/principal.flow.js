const { createFlow } = require('@bot-whatsapp/bot');
const flowChatGPT = require('./chatGpt.flow');


const flowPrincipal = createFlow([
    flowChatGPT, // 🔹 Primero, ChatGPT maneja el mensaje
    

]);

module.exports = flowPrincipal;
