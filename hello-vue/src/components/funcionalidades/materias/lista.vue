<template>
  <div>
    <h1>Lista de Matérias</h1>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Professor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" key="index">
          <td>{{item.name}}</td>
          <td>{{item.teacher}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'ListaMaterias',
  data: () => {
    return {
      list: []
    }
  },
  mounted() {
    URL = 'http://localhost:3000/'
    this.$http.get(URL + 'matters').then(response => {
      this.$set(this.list = response.body)
    })
  }
}
</script>

