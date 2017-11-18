export default class MateriaService {

  KEY = 'MATERIA'

  salvar(materia) {
    str = JSON.stringify(materia)
    localStorage.setItem(key, str)
  }

  carregar() {
    lista = localStorage.getItem(key) || "[]"
    return JSON.parse()
  }

}