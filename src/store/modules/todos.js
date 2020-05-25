import axios from 'axios';

const state = {
    todos:[ ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {

    async fetchTodos({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        commit('setTodos', response.data)
        console.log(response)
    },

    async addTodo({commit}, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title:title, completed:false});
        commit('newTodo', response.data);
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {id:id})
        commit('removeTodo', id);
    },
    async filterTodos({commit}, e){
        const l = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        console.log(l)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${l}`);
        commit('setTodos', response.data)
    },
    async upTodo({commit}, update){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${update.id}`, update);
        commit('updateTodo', response.data)
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state,todo) => (state.todos.unshift(todo)),
    removeTodo: (state, id) => (state.todos = state.todos.filter(i => i.id !== id)),
    updateTodo:(state, update) => {
        const i = state.todos.findIndex( i => i.id === update.id)
        if ( i > -1){
            state.todos.splice(i, 1, update)
        }
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}