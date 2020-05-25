<template>
  <div id="app" class="container">
    <Add/>
    <FilterItems/>
    <Todos/>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import Add from './components/Add.vue'
import FilterItems from './components/FilterItems.vue'

export default {
  name: 'App',
  components: {
    Todos, Add, FilterItems
  }
}
</script>

<style>
body{
  font-family:"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #f7f7f7
}

.container{
  max-width:90vw;
  margin: auto;
  overflow:auto;
  padding: 0 2rem;
}
</style>
