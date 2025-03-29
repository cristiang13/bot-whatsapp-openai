const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const { adapterDB } = require('./src/config/db')
const flowPrincipal = require('./src/flows/principal.flow')

const main = async () => {
    // const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: flowPrincipal,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
