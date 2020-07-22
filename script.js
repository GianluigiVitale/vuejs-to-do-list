new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: [
            {
                text: 'Fare la spesa',
                completato: true
            },
            {
                text: 'Fare i compiti',
                completato: false
            },
            {
                text: 'Fare lezione',
                completato: false
            },
            {
                text: 'Cucinare',
                completato: false
            }
        ]
    },
    methods: {
        addTodo() {
            this.todos.push({
                text: this.newTodo,
                completato: false
            });

            this.newTodo = "";
        },
        removeTodo(index, todo) {
            this.todos.splice(index, 1);
        },
        toggleCompletato(index) {
            this.todos[index].completato = !this.todos[index].completato;
        }
    }
});
