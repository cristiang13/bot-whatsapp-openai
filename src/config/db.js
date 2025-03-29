const MongoAdapter = require('@bot-whatsapp/database/mongo');
require('dotenv').config();

const MONGO_DB_URI = 'mongodb://127.0.0.1:27017' // Usar 127.0.0.1 en lugar de 0.0.0.0
const MONGO_DB_NAME = 'history_chat'

const adapterDB = new MongoAdapter({
    dbUri: MONGO_DB_URI,
    dbName: MONGO_DB_NAME,
})

module.exports = { adapterDB }