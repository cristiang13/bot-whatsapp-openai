const { createBot, createFlow, createProvider } = require('@bot-whatsapp/bot');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const QRPortalWeb = require('@bot-whatsapp/portal');
const adapterDB = require('../config/db');
const flowPrincipal = require('../flows/principal.flow');

const startBot = async () => {
    // const adapterFlow = createFlow([flowPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);

    await createBot({
        flow: flowPrincipal,
        provider: adapterProvider,
        database: adapterDB,
    });

    QRPortalWeb();
    console.log('✅ Boqqt de WhatsApp iniciado correctamente');
};

module.exports = startBot;
