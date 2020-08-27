<template>
  <div class="container-fluid clearfix">
    <div class="row">
      <div class="col-sm-4" v-for="planet in planets">
        <div class="card bg-light">
          <div class="card-body">
            <h3 class="card-title">{{planet.name}}</h3>
            <p class="card-text">Climate : {{planet.climate}}</p>
            <p class="card-text">Created : {{planet.created}}</p>
            <p class="card-text">Gravity : {{planet.gravity}}</p>
            <p class="card-text">Population : {{planet.population}} person(s)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'Planet',

    data () {
      return {
        planets: {}
      }
    },
    methods: {
      loadPlanet() {
        axios.get('https://swapi.dev/api/planets/?format=json')
          .then((response) => {
            this.planets = response.data.results;
          });
      }
    },
    mounted() {      
      this.loadPlanet();
    },
  }
</script>
