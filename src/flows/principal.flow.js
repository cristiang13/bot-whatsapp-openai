// const { addKeyword } = require('@bot-whatsapp/bot');
// const flowDocs = require('./docs.flow');
// // const flowGracias = require('./gracias.flow');
// // const flowTuto = require('./tuto.flow');
// // const flowDiscord = require('./discord.flow');

// const   flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
  
//     .addAnswer('🙌 Hola, bienvenido a este *Chatbot*')
//     .addAnswer([
//         'Te comparto los siguientes links de interés sobre el proyecto:',
//         '👉 *doc* para ver la documentación en linea',
//         '👉 *gracias* para ver la lista de videos',
//         '👉 *discord* para unirte al Discord',
//     ], null, null, [flowDocs]);

// module.exports = flowPrincipal;


const { createFlow } = require('@bot-whatsapp/bot');
const flowChatGPT = require('./chatGpt.flow');


const flowPrincipal = createFlow([
    flowChatGPT, // 🔹 Primero, ChatGPT maneja el mensaje
    

]);

module.exports = flowPrincipal;
