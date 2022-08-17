<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/detail">Detail</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import Home from './views/Home.vue';
import TableDetail from './components/TableDetail.vue';

export default {
  name: 'App',
  components: {
    Home,
    TableDetail
  }
}
</script>
