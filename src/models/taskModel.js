const { ObjectId } = require('mongodb');

const TaskModel = {
    userId: "", // ID del usuario
    description: "", // Descripción de la tarea
    status: "Asignada", // Estado de la tarea
    role: "user", // 'user' o 'assistant'
    dueDate: null, // Fecha límite de la tarea (opcional)
    timestamp: new Date() // Fecha y hora de creación
};

module.exports = TaskModel;
