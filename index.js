var app = new Vue({
  el: '#app',
  data: {
      dadosBasicos: {
          nome: '',
          idade: '',
          genero: '',
          estadoCivil: ''
      },
      contato: {
          email : '',
          telefone: ''
      },
      endereco: {
          rua: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: ''
      },
      formacao: {
          instituicao: '',
          descricao: '',
          dataIngresso: '',
          dataConclusao: ''
      },
      experienciaProfissional: {
          empresa: '',
          cargo: '',
          descricaoCargo: '',
          dataEntrada: '',
          dataSaida: ''
      }
  },
  methods: {
    printPage: function() {
      window.print();
    }
  }
});
