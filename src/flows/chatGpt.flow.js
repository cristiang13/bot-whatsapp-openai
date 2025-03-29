    const { addKeyword } = require('@bot-whatsapp/bot');
    const chatGPTService = require('../services/chatGPT.service');

    const flowChatGPT = addKeyword(['']) // Captura cualquier mensaje
    .addAction(async (ctx, { flowDynamic }) => { // ✅ PASA flowDynamic
        try {
            const response = await chatGPTService.getResponse(ctx.body);
            console.log('[ChatGPT Response]:', response); // Debugging en consola
            
            await flowDynamic(response); // ✅ Ahora sí se envía la respuesta
        } catch (error) {
            await flowDynamic('❌ Error al procesar tu mensaje'); // ✅ Envía error si falla
        }
    });

module.exports = flowChatGPT;