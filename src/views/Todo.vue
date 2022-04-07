<template lang="">
<div>
  <Header /> 
  <View v-for="todo in todoList"
        v-bind:key="todo.id" :todo="todo"  /> 
    <RouterLink  :to="{ name : 'edit'}">
      <button class="fa fa-plus" id="addBtn"></button>
    </RouterLink>
         <!-- @remove="remove" @update="update" -->
</div>
</template>

<script>
import View from "./View.vue";
import axios from 'axios';
import Header from './Header.vue'
export default {
  name: "Todo",
  components: {
    View,
    Header
  },
  created() {
    NProgress.start()
      axios.get('https://dummyjson.com/todos?limit=10&skip=10')
      .then(response => {
        this.todoList = response.data.todos;
        console.log(this.todoList);
       NProgress.done()
      })
  },
  data() {
    return {
      todoList : [],
      message: "",
    };
  },
  methods: {
    add(value) {
      //   debugger;
      if (value !== "") {
        this.todo_list.push(value);
        this.msg = "";
        console.log(this.msg);
      } else {
        alert("Write something ....");
      }
    },
    remove(value) {
      console.log(value);
      this.todo_list = this.todo_list.filter(function (todo) {
        return todo !== value;
      });
    },
    update(value) {
      console.log(value);
      this.msg = value;
      this.remove(value);
    },
  },
};
</script>


<style scoped>
#addBtn {
  width: 50px;
  height: 50px;
  font-size: 20px;
  border-radius: 50%;
  background-color: orange;
  color: white;
  display: block;
  margin: auto;
  /* position: relative; */
  /* top: 150px; */
}
</style>

