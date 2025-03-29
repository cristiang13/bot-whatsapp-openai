const { getDb } = require('../database/db'); // Obtiene la conexión a la BD
const ChatModel = require('../models/chatModel');

const ChatService = {
    async createChat(chatData) {
        const db = await getDb();
        const chatCollection = db.collection('chat');
        const newChat = { ...ChatModel, ...chatData, timestamp: new Date() };
        const result = await chatCollection.insertOne(newChat);
        return result.insertedId;
    },

    async getChatHistory(userId) {
        const db = await getDb();
        const chatCollection = db.collection('chat');
        return await chatCollection.find({ userId }).toArray();
    },

    async deleteChatById(chatId) {
        const db = await getDb();
        const chatCollection = db.collection('chat');
        return await chatCollection.deleteOne({ _id: new ObjectId(chatId) });
    }
};

module.exports = ChatService;
