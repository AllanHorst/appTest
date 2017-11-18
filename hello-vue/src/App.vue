<template>
  <div id="app">
    <md-toolbar style="min-height: 56px;">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Controle de Faltas</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Menu</h3>
      </div>
    </md-toolbar>

    <div class="phone-viewport">
      <md-list>
        <menu-materias></menu-materias>
      </md-list>
    </div>
  </md-sidenav>

    <router-view/>
  </div>
</template>

<script>
import MenuMaterias from '@/components/menu/materias'
export default {
  name: 'app',
  components: {
    MenuMaterias
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
