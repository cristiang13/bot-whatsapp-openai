const { ObjectId } = require('mongodb');

const ChatModel = {
    userId: "", // Número de teléfono del usuario
    message: "", // Mensaje enviado por el usuario
    role: "user", // 'user' o 'assistant'
    timestamp: new Date() // Fecha y hora del mensaje
};

module.exports = ChatModel;
