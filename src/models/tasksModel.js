const connection = require('./connection')

//funções que vão interagir com o banco de dados
const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {    //função responsável por criar uma nova task no DB
    
    const { title } = task;
    const dateUTC = new Date(Date.now()).toUTCString();     //data UTC de criação da task

    const query = "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)";

    const [createdTask] = await connection.execute(query, [title, "pendente", dateUTC]);
    return {insertedId: createdTask.insertId};

};

const deleteTask = async (id) => {
    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
};

const updateTask = async (id, task) => {
    const { title, status } =  task;
    
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

    const [updatedTask] = await connection.execute(query, [title, status, id]);
    return updatedTask;
};

module.exports = { // exportando as funções para poder usar em outros arquivos
    getAll,
    createTask,
    deleteTask,
    updateTask,
    };
