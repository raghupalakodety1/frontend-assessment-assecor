> Frontend-Assessment

## Build Setup

``` bash
# install dependencies
npm install

# Run
npm run dev

# Laden Sie Komponenten, bei denen Komponenten Fahrzeug, Menschen, Planeten, Filme sind 
    loadComponent() {
      axios.get('https://swapi.dev/api/{component}/?format=json')
        .then((response) => {
          this.dataCollector = response.data.results;
        });
    
```
