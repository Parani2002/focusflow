export const getAllTasks = () => {
    // Logic to retrieve all tasks from the database
    return "All tasks retrieved";
}

export const createTask = (task) => {
    // Logic to create a new task in the database
    return `Task created: ${task}`;
}

export const getTask = (id) => {
    // Logic to retrieve a specific task by ID from the database
    return `Task retrieved with ID: ${id}`;
}   

export const updateTask = (id, updatedTask) => {
    // Logic to update a specific task by ID in the database
    return `Task with ID ${id} updated to: ${updatedTask}`;
}   
export const deleteTask = (id) => {
    // Logic to delete a specific task by ID from the database
    return `Task with ID ${id} deleted`;
}

