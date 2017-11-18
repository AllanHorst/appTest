<template>

  <md-list-item>
    <md-icon>school</md-icon>
    <span>Matérias</span>
    <md-list-expand>
      <md-list>
        <md-list-item>
          <router-link to="/materias/lista">Lista</router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/materias/cadastro">Cadastro</router-link>
        </md-list-item>
      </md-list>
    </md-list-expand>
  </md-list-item>
</template>
