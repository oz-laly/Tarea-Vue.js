<template>
    <div class="add-task-container">
        <h1>Añadir Tarea</h1>
        <div class="input-group">
            <input 
                v-model="newTask" 
                @keyup.enter="addTask" 
                placeholder="Añadir nueva tarea" 
                class="task-input"
            />
            <button @click="addTask" class="add-button">Añadir</button>
        </div>

        <div v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <span :class="{ completed: task.completed }">{{ task.todo }}</span>
               <div>
    <button @click="toggleTaskCompletion(task)" class="toggle-button">
        {{ task.completed ? 'Desmarcar' : 'Completar' }}
    </button>
    <button @click="deleteTask(task)" class="delete-button">Eliminar</button>
</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    data() {
        return {
            newTask: "", // Campo de entrada para la nueva tarea
            tasks: [],   // Lista de tareas locales
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === "") return;

            const newTask = {
                todo: this.newTask,
                completed: false,
                id: Date.now(), 
            };

            // Añadir la nueva tarea al inicio de la lista
            this.tasks.unshift(newTask);
            this.newTask = ""; // Limpiar el campo de entrada después de agregar
        },

        // Elimina una tarea específica de la lista
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },

        // Cambia el estado de la tarea entre completada y no completada
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },
    },
};
</script>

<style scoped>
.add-task-container {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}

.input-group {
    display: flex;
    margin-bottom: 10px;
}

.task-input {
    flex-grow: 1;
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.add-button {
  display: inline-block;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(45deg, #c386af, #e89ec1); 
  border: none;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}

.add-button:hover {
  background: linear-gradient(45deg, #c7678e, #db8bb7); 
  transform: scale(1.05); 
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}

.task-list {
    margin-top: 20px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.completed {
    text-decoration: line-through;
    color: gray;
}

.toggle-button, .delete-button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s, transform 0.2s;
}

.toggle-button {
    background-color: #4CAF50; /* Verde */
    color: white;
}

.toggle-button:hover {
    background-color: #45a049; /* Verde oscuro */
    transform: scale(1.05); /* Efecto de aumento al pasar el cursor */
}

.delete-button {
    background-color: #f44336; /* Rojo */
    color: white;
    margin-left: 10px; /* Espaciado entre botones */
}

.delete-button:hover {
    background-color: #d32f2f; /* Rojo oscuro */
}
</style>

