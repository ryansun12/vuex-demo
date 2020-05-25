<template>
  <div>
    <h3>Todo List</h3>
    <div class="legend">
      <span>Click to toggle completion</span>
      <span>
        <span>
          <span class="incomplete"></span> Incomplete
        </span>
        <span>
          <span class="complete"></span> Complete
        </span>
      </span>
    </div>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" 
      @click="update(todo)" class="todo"
      v-bind:class="{'is-complete': todo.completed}"
      >
        {{todo.title}}
        <i class="fa fa-fw fa-trash" style="color: black" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "upTodo"]),
    update(todo){
      const f = {id: todo.id, title: todo.title, completed: !todo.completed};
      this.upTodo(f);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.legend{
  display:flex;
  justify-content: space-around;
  margin-bottom:1rem;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}

.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #518fed;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.complete{
  display:inline-block;
  width:10px;
  height:10px;
  background: rgb(233, 35, 255)
}

.is-complete{
  background: rgb(233, 35, 255)
}
.incomplete{
  display:inline-block;
  width:10px;
  height:10px;
  background: #518fed;
}

@media screen and (max-width: 550px){
  .todos{
    grid-template-columns: 1fr;
  }
}
</style>