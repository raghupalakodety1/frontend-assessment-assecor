<template>
  <div class="people">
    <div class="container-fluid clearfix">
      <div class="row">
        <div class="col-sm-4" v-for="people in peoples">
        <div class="card bg-light" style="width:400px">
            <div class="card-body">
            <img class="card-img-top" :src="`../assets/${peoples.name}.jpg`" alt="Card image">
              <h3 class="card-title">{{people.name}}</h3>
              <p class="card-text">Größe : {{people.height}} cm</p>
              <p class="card-text">Haarfarbe : {{people.hair_color}}</p>
              <p class="card-text" v-if="peoples.eye_color == 'brown'">Augenfarbe : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF2SURBVDhPzVI7SwNBEF6fIPjK7J4GtFQrbYyFXcDbjVFEq5Rqoz9BC5uLguDu3RU2gq12wdpK8Q/ERi0ES7ERBAsLwSLOXHYvl0bbfDBc8j1mZ+eOdSaCgHXrZTFvfL6hS2It8sWMlf5GvDg5EEk4CBW8hYo3smUUfwgl32ww1mXt7QhVbtZIeEnMEr5DCVpLsWoUVPD3ZasR3ETFQWFjTUQlUUDx04W15AtWSmGk2HVNsOHzcTnvJUJc8qaQeM+Imngy4FXOcOyj8wLrI45Odz48qK7X+RB2hnoaxqKxyZyEUx62mw34ftZLHmzAr7Mk3dmaDx3XasqrjqPCwwNmil4ex3xNSQUXZA6KrNf4sIXLXUn+V1g/+p4y4VviSGOxPzqHk3w4MZK5nUSwoB1kr0Sv9ETmRqzcBI45jQu8b5mShe1hVbH5o+OxaqdlGLaxdtAXSGNj+A6NPy6E437h8yqS3LfW/1GrsJ54CSZCNT5mqY4EY78a1sJAUF3flgAAAABJRU5ErkJggg=="> ({{ peoples.eye_color }})</p>
              <p class="card-text" v-if="peoples.eye_color == 'blue'">Augenfarbe : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF0SURBVDhPzVK9LwRBFF+fiQINItGionF6BZLbmUXjSjT8CRSaRafQ3t3OrEhct7laRa4Txd6+2XMJiVI0EolCIVGs9+5mvxra+yUvO/v7eG/eZo3ehG1H/VY1XGIi2DKFsrDmtfQ3ti/uR7gIj5lQb1yqKF/QYq7aMaKoT9vz4K5awOCLNn/j+ZzLgHEXSlyoWtyICbi1HH9Cx7rgslVA8TMOm25zWUsJuICDuAmen4uXwWRH2JDNWZzwHos0mXgy4LQy1lnB8YeIo+lJEwn+pvs0itPBT0mqgGlzOcPtEYfeo6yXPETeZEnauWMWcJry3aboPcl68ba2wa7a0yi8JoKAazKv2I1BXG3XdEKT3ktee5hJ1U4bwB1xpBlmNVzE4EcsmjLc7wga9A3yK0FrzfHHtdwFrwRzTEIzNtEHwzqka+PzMQkL5RVrD2M6lgf9gXRt3K2B5p80BF/YqG654aq2/o+S5w3wCsysl9WUpnoShvELImQsL/GIPm4AAAAASUVORK5CYII="> ({{peoples.eye_color}})</p>
              <p class="card-text" v-if="peoples.eye_color == 'yellow'">Augenfarbe : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF0SURBVDhPzVI9LwRBGB6fiQINItGiEBonsjczXKEiEtWVaPgJFBof3f2B+wF0olYRf8A1XCHRndzO7MzsRUQhUYz33Z0dcw3tPclmd5/3eZ73fWeX9CasJf1ttbYsNd0Rim8rxedd6W+0WtGINPREGNaWhtnwEpo9JZrvQnifk3dDpOVFML7mBvoF91qs6JZIeRX4Kx9k6F37ozLhbDlizUvQ4b0wx5quuJKHVPSwCIHrJY75ZFZIkmgWTCoo1pBHAXSuC00vrC0NIYfdf3X0UWs6SvAhMFscOxezuucM2884TY9DLWoInPRtFwk752J2XnA+VLOzUAvNT2GFyrTU7K0gYcxLFFtbGUwM24tTtonvTbswDM2aQcA9clgjMo2WICT1xZQeZAUHPINwJfyknU5p3JVzKLU+ByM1vAgODHY+ysbW7LngYYprY1bHnK0b+Afi2BD0AOZvbzL0E4JupOYbTvo/rK0OGBPNCFGeclRPgpAfHARYlhfzeIwAAAAASUVORK5CYII="> ({{peoples.eye_color}})</p>
              <p class="card-text" v-if="peoples.eye_color == 'red'">Augenfarbe : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFmSURBVDhPzZK9SgNREIWvv2ChNiqCrVoEbVwJSdid2cQ0BsFqS7XRR9DCxmjnC+QBtBNrK8UXiE20ECzFxr9sNhEEwfXM7t3LxkLbHBg2850zcy+XqN5UqFR/03GWAtddbzGvtWx7Xlt/6zuXG/GJ9n3mJwyG6QJr4LuB5X063q0280KL6CEKE31i4Bh9BV8P/alZRnQZME/osVh+sWjB8FPDy9oyajLvJEuQuQ9sezIyEJ5FPRsTJwuXAJbWUEehZQ0Jk9OTHH7XXwqFUYF1A2OjosM1wxxnS1hAtPcrW5MbXKQhei9awHxoeLKUuWqYZIkOVId5GoHHFDyRcMg8CL6JWo36TGYY3l1qwZUw8VSbaBHgLTHxytuRoSVvINdNfNyy8V4uj2s7FgJzMG+SEHp5sF1UFSffGs589prNjumxbsk/UF/7GkNfZoiogzpvuu6Kjv6v0PMGPkqlmXY+P6VRT0qpH4CZBtia62BVAAAAAElFTkSuQmCC"> ({{peoples.eye_color}})</p>
              <p class="card-text" v-if="peoples.eye_color == 'blue-gray'">Augenfarbe : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF2SURBVDhPzVI9SwMxGD4/wUFdVARXddJF/QdOiuDUUQVpL2mhg4MOLlGxTeLHWuhqKXJvWnByqvQP1EUdBEdxEQQHB8Ghvm8vud4tuvaBwOX5ypu783oTQoj+jK4vMWk2uTYb6eL1vJX+xt5lMMKlOcTgG1emnVjSPHAdbHntdp+1J8EL9QWmzAuZmYRvDGhWrK1npUkxBZVuETT8i+qEjYXISlhG8dOFfW1WrBQByzOuBCd8zheCyY6QKwazKL47kU4mngxoLGHhiV8uDxFHp0clyrR29c0oNbeiMAk4NpkpHON3OpyCgxhHk5TQCLdxku5MZnw+dlys9Mhx4QLh5c5gGkd7jczSXJFZiOYglm8jt0b7lIBh3D9FPmXuiCPNy8hgEe/+4UQsTHcEC3oHiSvhJ/UVjFs5BNO1OQzex0oaXAb7NDbe/dHxeDLkRWXMxpKgPzAcG5oY+umWmS/c1/Dzrlrr/0gBDLDTYIaf16cs1ZPwvF+w2x5YsNv69wAAAABJRU5ErkJggg=="> ({{peoples.eye_color}})</p>
              <p class="card-text">Geburtsjahr : {{people.birth_year}}</p>
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
  name: 'People',

  data () {
    return {
      peoples: {}
    }
  },
  methods: {
    loadPeople() {
      axios.get('https://swapi.dev/api/people/?format=json')
        .then((response) => {
          this.peoples = response.data.results;
        });
    }
  },
  mounted() {
    this.loadPeople();
  },
}
</script>
