<template>
  <div class="container">
    <h1>Cadastro de Matérias</h1>
    <div>
      <form>
        <md-input-container>
          <label>Nome</label>
          <md-input v-model="materia.nome"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Professor</label>
          <md-input v-model="materia.professor"></md-input>
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
        materia: {
          nome: '',
          professor: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(materiaService)
      materiaService.salvar(this.materia)
    }
  }
}
</script>

