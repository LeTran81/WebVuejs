<template>
  <div id="app">
    <header-home/>
    <footer-home/>
  </div>
</template>

<script>
import FooterHome from './components/FooterHome.vue'
import HeaderHome from './components/HeaderHome.vue'

export default {
  name: 'App',
  components: {
    FooterHome,
    HeaderHome,
  },
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 14px;
}
</style>
