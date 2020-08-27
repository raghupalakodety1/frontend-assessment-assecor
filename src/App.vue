<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/film">Filme</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/people">Charaktere</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/vehicle">Fahrzeug</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/planet">Planeten</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="css">
  @import 'assets/css/custom.css';
</style>

<script>
export default {
  name: 'app'
}
</script>
