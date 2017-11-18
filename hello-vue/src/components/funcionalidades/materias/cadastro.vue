<template>
  <div class="container">
    <h1>Cadastro de Matérias</h1>
    <div>
      <form>
        <md-input-container>
          <label>Nome</label>
          <md-input v-model="matter.name"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Professor</label>
          <md-input v-model="matter.teacher"></md-input>
        </md-input-container>
        <md-button class="md-primary" v-on:click="submit()">Salvar</md-button>
      </form>
    </div>
  </div>

</template>

<script>
// import router from './router'
import MateriaService from '../../../services/materia-service'

var materiaService = new MateriaService();

export default {
  name: 'CadastroMaterias',
  data: () => {
      return {
        matter: {
          name: '',
          teacher: ''
      }
    }
  },
  methods: {
    submit() {
      URL = 'http://localhost:3000/'
      this.$http.post(URL + '/matters', this.matter).then(data => {
        console.log(data)
      })
    }
  }
}
</script>

