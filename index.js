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
            telefones: [""]
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
        addTelefone: function() {
            this.contato.telefones.push('');
        },
        removeTelefone: function(index){
            this.contato.telefones.splice(index,1);
            if(!this.contato.telefones.length) {
                this.addTelefone();
            }
        },
        addFormacao: function () {
            this.formacoes.push({instituicao: '', descricao: '', dataIngresso: '', dataConclusao: ''});
        },
        removeFormacao: function(index) {
            this.formacoes.splice(index,1);
            if(!this.formacoes.length) {
                this.addFormacao();
            }
        }
    }
});
