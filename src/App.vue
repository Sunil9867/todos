<script>
import { RouterLink, RouterView } from "vue-router";
// import Header from './views/Header.vue';

export default {
  name : 'App',
  component : {
    // Header
  },
  data(){
    return {

    }
  }
}

</script>

<template>
  <div id="master">
  <!-- <RouterLink to="/add" id="add-btn">Add</RouterLink>  -->
  <RouterView id="innerDiv" class="col-sm-8 col-md-8 col-lg-6 col-xl-4 mx-auto">
  
  </RouterView>
  
  </div>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
</template>

<style scoped>
#master{
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  height: 100vh;
  padding: 5%;
  width: 100vw;
}
#innerDiv{
  background-color: white;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 80vh;
}
</style>
