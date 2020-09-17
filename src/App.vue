<template>
  <div id="app" class="container-fluid bg-dark">
    <navbar />
    <home />
    <my-footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyFooter from "./components/MyFooter";
export default {
  components: {
    Navbar,
    Home,
    MyFooter,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#home {
  flex-grow: 1;
}
</style>
