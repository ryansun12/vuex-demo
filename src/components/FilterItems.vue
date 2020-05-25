<template>
  <div class="cont">
      Filter Number of Todos:
      <select @change="filterTodos($event)">
          <option value="200">200</option>
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="10">10</option>
          <option value="5" selected>5</option>
      </select>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: "FilterItems",
    methods: {
        ...mapActions(["filterTodos"]),
    }
}
</script>

<style scoped>
.cont{
    font-family:Helvetica;
}

select{
    margin-top:20px;
    padding: 6px;
    color: cyan;
}
</style>