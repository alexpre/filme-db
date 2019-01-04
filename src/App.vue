//App.vue

<template>
<div>
  <br>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-movie">
          <router-link :to="{ name: 'Movie' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-movie">
          <router-link :to="{ name: 'Add' }" class="nav-link">Add Movie</router-link>
        </li>
        <li class="nav-movie">
          <router-link :to="{ name: 'List' }" class="nav-link">Movie List</router-link>
        </li>
      </ul>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<style lang="css">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>

<style>
  .gap {
    margin-top: 50px;
  }
</style>

<script>

export default {
  name: 'app'
}
</script>
