<template>
  <div class="todo-list">
    <strong> <input type="checkbox" class="form-check-input" :checked="todo.completed" /> </strong>
    {{ todo.todo }} 
    <div style="float: right">
      <RouterLink
        class="fa fa-edit text-primary"
        :to="{ name: 'edit', params: { id: todo.id } }"
      >
      </RouterLink>
      &nbsp;
      <i class="fa fa-remove text-danger" @click="deleteUser(todo.id)" type="button"></i>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import axios from "axios";

export default {
  name: "View",
  props: {
    todo: Object,
  },
  methods: {
    deleteUser(id) {
      if (confirm("Are you sure ?")) {
        axios.delete("https://dummyjson.com/todos/" + id).then((response) => {
          this.$forceUpdate()
          alert("deleted !");
        });
      }
    },
  },
  // emits: ["remove"],
};
</script>

<style scoped>
.todo-list {
  padding: 20px 10px;
  text-transform: capitalize;
  text-align: left;
}
</style>
