<template>
    <div class="task-container">
        <h1>Lista de Tareas</h1>
        <button @click="fetchTasks" class="load-button">Cargar Tareas</button>
        
        <div v-if="loading" class="loading">Cargando tareas...</div>
        
        <div v-else-if="error" class="error">{{ error }}</div>
        
        <div v-else-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <div class="task-content">
                    <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
                        {{ task.todo }}
                    </h5>
                    <span :class="['status', task.completed ? 'completed' : 'pending']">
                        {{ task.completed ? 'Completada' : 'Pendiente' }}
                    </span>
                    <div class="button-group">
                        <button 
                            @click="toggleTaskCompletion(task)"
                            :class="['toggle-button', task.completed ? 'completed' : 'pending']"
                        >
                            {{ task.completed ? 'Desmarcar' : 'Completar' }}
                        </button>
                        <button @click="deleteTask(task)" class="delete-button">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: "TaskList",
    data() {
        return {
            tasks: [],
            loading: false,
            error: null
        };
    },
    methods: {
        async fetchTasks() {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch('https://dummyjson.com/todos');
                if (!response.ok) {
                    throw new Error('Error al cargar las tareas');
                }
                const data = await response.json();
                this.tasks = data.todos;
            } catch (error) {
                this.error = 'Error al cargar las tareas. Por favor, intente nuevamente.';
                console.error('Error:', error);
            } finally {
                this.loading = false;
            }
        },

        toggleTaskCompletion(task) {
            task.completed = !task.completed;
            // Opcional: Actualizar en el backend
            // await fetch(`https://dummyjson.com/todos/${task.id}`, {
            //     method: 'PUT',
            //     body: JSON.stringify({ completed: task.completed })
            // });
        },

        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
            // Opcional: Eliminar en el backend
            // await fetch(`https://dummyjson.com/todos/${task.id}`, {
            //     method: 'DELETE'
            // });
        },
    },
    // Cargar tareas automÃ¡ticamente al montar el componente
    mounted() {
        //this.fetchTasks();
    }
};
</script>

<style scoped>
.task-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
}

.load-button {
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

.load-button:hover {
      background: linear-gradient(45deg, #c7678e, #db8bb7); 
  transform: scale(1.05); 
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}

.task-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.task-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    transition: transform 0.2s, box-shadow 0.2s;
}

.task-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.task-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

h5 {
    margin: 0;
    font-size: 1.1em;
    color: #2c3e50;
}

.status {
    font-size: 0.9em;
    padding: 4px 8px;
    border-radius: 4px;
    display: inline-block;
}

.status.completed {
    background-color: #e8f5e9;
    color: #2e7d32;
}

.status.pending {
    background-color: #fff3e0;
    color: #f57c00;
}

.button-group {
    display: flex;
    gap: 10px;
}

.toggle-button, .delete-button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s;
}

.toggle-button.completed {
    background-color: #ffeb3b;
    color: #333;
}

.toggle-button.pending {
    background-color: #4CAF50;
    color: white;
}

.delete-button {
    background-color: #f44336;
    color: white;
}

.toggle-button:hover {
    opacity: 0.9;
}

.delete-button:hover {
    background-color: #d32f2f;
}

.loading {
    text-align: center;
    color: #666;
    padding: 20px;
}

.error {
    color: #f44336;
    text-align: center;
    padding: 20px;
    background-color: #ffebee;
    border-radius: 4px;
}

.no-tasks {
    text-align: center;
    color: #666;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 4px;
}
</style>
