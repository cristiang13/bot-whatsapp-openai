const { getDb } = require('../database/db'); // Obtiene la conexión a la BD
const TaskModel = require('../models/taskModel');

const TaskService = {
    async createTask(taskData) {
        const db = await getDb();
        const taskCollection = db.collection('task');
        const newTask = { ...TaskModel, ...taskData, timestamp: new Date() };
        const result = await taskCollection.insertOne(newTask);
        return result.insertedId;
    },

    async getTasks(userId) {
        const db = await getDb();
        const taskCollection = db.collection('task');
        return await taskCollection.find({ userId }).toArray();
    },

    async updateTaskStatus(taskId, status) {
        const db = await getDb();
        const taskCollection = db.collection('task');
        return await taskCollection.updateOne(
            { _id: new ObjectId(taskId) },
            { $set: { status } }
        );
    },

    async deleteTaskById(taskId) {
        const db = await getDb();
        const taskCollection = db.collection('task');
        return await taskCollection.deleteOne({ _id: new ObjectId(taskId) });
    }
};

module.exports = TaskService;
