import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListaMaterias from '@/components/funcionalidades/materias/lista'
import CadastroMaterias from '@/components/funcionalidades/materias/cadastro'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/lista-materias',
      name: 'Lista de Matérias',
      component: ListaMaterias
    },
    {
      path: '/materias/lista',
      name: 'Lista de Matérias',
      component: ListaMaterias
    },
    {
      path: '/materias/cadastro',
      name: 'Cadastro de Matérias',
      component: CadastroMaterias
    }
  ]
})
