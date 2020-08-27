<template>
  <div class="container-fluid clearfix">
    <div class="row">
      <div class="col-sm-4" v-for="vehicle in vehicles">
        <div class="card bg-light">
          <div class="card-body">
            <h3 class="card-title">{{vehicle.name}}</h3>
            <p class="card-text">Length : {{vehicle.length}} m</p>
            <p class="card-text">Passenger(s) : {{vehicle.passengers}} passenger(s)</p>
            <p class="card-text">Model : {{vehicle.model}}</p>
            <p class="card-text">Vehicle class : {{vehicle.vehicle_class}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'Vehicle',

    data () {
      return {
        vehicles: {}
      }
    },
    methods: {
      loadVehicle() {
        axios.get('https://swapi.dev/api/vehicles/?format=json')
          .then((response) => {
            this.vehicles = response.data.results;
          });
      }
    },
    mounted() {
      this.loadVehicle();
    },
  }
</script>
