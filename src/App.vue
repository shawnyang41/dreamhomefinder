<template>
  <div id="app" class='blue-grey lighten-5'>
    <div class='outer-container'>
      <Navbar/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Home,
    Navbar
  }
}
</script>

<style>
#app {

}

.outer-container{
  text-align: center;
  background-image: url('assets/bg.jpg');
  background-repeat: no-repeat;
  min-height: 100vh;
  background-size: 1800px;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}


</style>
