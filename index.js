var app = new Vue({
  el: '#app',
  data: {
    nome: '',
    idade: '',
    estadoCivil: '',
    ruaEndereco: '',
    numeroEndereco: '',
    telefone: []
  },
  methods: {
    printPage: function() {
      window.print();
    }
  }
});
