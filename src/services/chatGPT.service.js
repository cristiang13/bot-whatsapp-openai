require('dotenv').config();
const OpenAI = require('openai');

class ChatGPTService {
    constructor() {
        this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    }

    async getResponse(message) {
        if (!message || message.trim() === '') {
            return '⚠️ Por favor, ingresa un mensaje válido.';
        }

        try {
            const response = await this.openai.chat.completions.create({
                model: 'gpt-4o',
                messages: [{ role: 'user', content: message }],
            });

            return response.choices[0]?.message?.content || 'No entendí tu mensaje. 😕';
        } catch (error) {
            console.error('[ERROR ChatGPT]:', error);
            return '❌ Hubo un error al procesar tu solicitud.';
        }
    }
}

module.exports = new ChatGPTService();
