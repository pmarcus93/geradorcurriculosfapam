Vue.component('telefone', {
    template: "<input v-model='numero'>",
    data: {
      ddd: '',
      numero: ''
    }
});

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
    printPage: function(){
      window.print();
    }
  }
});

