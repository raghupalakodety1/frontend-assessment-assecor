<template>
  <div class="home">
    <article class="starwars">
    <div class="animation">
        <section class="intro">
          A long time ago, in a galaxy far,<br> far away....
        </section>

        <section class="titles">
          <div contenteditable="true" spellcheck="false">
            <p>
              {{ opening.opening_crawl }}
            </p>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'Home',

    data () {
      return {
        opening: {}
      }
    },
    methods: {
      loadOpening() {
        axios.get('https://swapi.dev/api/films/1/?format=json')
          .then((response) => {
            this.opening = response.data;
          });
      }
    },
    mounted() {      
      this.loadOpening();
    },
  }
</script>
