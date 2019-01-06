<template>
<div>
  <br>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-movie">
           <router-link class='nav-link' to='/'>Home</router-link>
        </li>
        <li class="nav-movie">
          <router-link class='nav-link' to='/add'>Add Movie</router-link>
        </li>
        <li class="nav-movie">
         <router-link class='nav-link' to='/list'>Movie List</router-link>
        </li>    
      </ul>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="css">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>

