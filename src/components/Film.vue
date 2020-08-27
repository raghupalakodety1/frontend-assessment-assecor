<template>
  <div class="film">
    <div class="container-fluid clearfix">
      <div class="row">
        <div class="col-sm-4" v-for="film in films">
          <div class="card bg-light">
            <div class="card-body">
              <h3 class="card-title">{{film.title}}</h3>
              <p class="card-text">Director : {{film.director}}</p>
              <p class="card-text">Created : {{film.created}}</p>
              <p class="card-text">Edited : {{film.edited}}</p>
              <p class="card-text">{{film.opening_crawl}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'Film',

    data () {
      return {
        films: {}
      }
    },
    methods: {
      loadFilm() {
        axios.get('https://swapi.dev/api/films/?format=json')
          .then((response) => {
            this.films = response.data.results;
          });
      }
    },
    mounted() {      
      this.loadFilm();
    },
  }
</script>
