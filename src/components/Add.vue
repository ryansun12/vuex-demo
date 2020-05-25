<template>
  <div>
      <h3>Add Todo</h3>
      <div class="add">
          <form @submit="onSubmit">
              <input type="text" v-model="title" placeholder="Add Todo">
              <input type="submit" value="submit">
          </form>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'Add',
    data () {
        return {
            title : '',
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit (e) {
            e.preventDefault()
            this.addTodo(this.title)
        }
    }
}
</script>

<style>
form{
    display:flex;
}
input[type="text"]{
    flex: 10;
    padding: 15px;
    border : 1px solid rgb(25,235,3);
    outline: 0;
}
input[type="submit"]{
    flex:2;
    background: linear-gradient(90deg,red,yellow);
    color:black;
    cursor: pointer;
    border: 1px solid rgb(25,235,3)
}

</style>