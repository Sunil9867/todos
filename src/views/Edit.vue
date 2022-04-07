<template>
  <div class="container">
    <h1 class="">Todo :</h1>
    <br>
    <form @submit.prevent="update">
      <input type="hidden" name="" v-model="data.userId" />
      <!-- <img :src="data.avatar" alt="" class="img" v-show="data.id !== undefined" />
      <div class="form-group">
        <label for="email">First Name :</label>
        <input type="text" class="form-control" name="" v-model="data.first_name" id="" required/>
      </div>
      <div class="form-group">
        <label for="email">Last Name :</label>
        <input type="text" class="form-control" name="" v-model="data.last_name" id="" required/>
      </div>
      <div class="form-group">
        <label for="email">Email :</label>
        <input type="text" class="form-control" name="" v-model="data.email" id="" required/>
      </div> -->
      <div class="form-group">
        Is completed : <input type="checkbox" class="form-check-input" style="padding: 5px;" name="" v-model="data.completed" id="" />
        <!-- <label for="email" class="form-check-label">Is completed ?</label> -->
      </div>
      <div class="form-group">
        <label for="email">Description :</label>
        <textarea type="text" class="form-control" name="" v-model="data.todo" id="" required/>
      </div>
      <!-- <textarea required name="" placeholder="Write Something...." id="" v-model="data.title" class="form-control" cols="30" rows="10"></textarea> -->
      <input type="submit" value="Submit" class="btn btn-primary" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    if (this.id !== undefined) {
       NProgress.start()
      axios.get("https://dummyjson.com/todos/" + this.id).then((response) => {
        this.data = response.data;
        // this.description = response.data.support.text;
        console.log(this.data);
       NProgress.done()
      });
    } else {
      this.id = "";
      this.data.userId = 5;
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      description : '',
      data: [],
    };
  },
  methods: {
    update(e) {
      e.preventDefault();
      // debugger;

      if (this.id === '') {
        this.id = 'add'
      }

      axios.post("https://dummyjson.com/todos/" + this.id, this.data).then((response) => {
        console.log(response.data);
        alert("Todo created.");
        // this.$router.push({ name: "todo" });
      });
    },
  },
};
</script>

<style scoped>
input[type="submit"] {
  margin: auto;
  display: block;
  margin-top: 10px;
}
.img {
  border-radius: 50%;
  margin: auto;
  display: block;
}
label{
  padding: 5px;
  font-weight: lighter;
}
</style>
