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
            email : [""],
            telefones: [{numero: ''}]
        },
        endereco: {
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: ''
        },
        formacoes: [{
            instituicao: '',
            descricao: '',
            dataIngresso: '',
            dataConclusao: ''
        }]
        ,
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
        },
        addFormacao: function () {
            this.formacoes.push({instituicao: '', descricao: '', dataIngresso: '', dataConclusao: ''});
        },
        removeFormacao: function(index) {
            this.formacoes.splice(index,1);
        }
    }
});
