class Contato {
    // Construtor
    constructor() {
        const nome = null
        const email = null
        const fone = null
        const mensagem = null
        const idade = null
        const data_cadastro = new Date();
        const tipo_contato = null
    }

    // Métodos
    Enviar() {
        this.nome = window.document.getElementById('nome').value
        this.email = window.document.getElementById('email').value
        this.fone = window.document.getElementById('fone').value
        this.mensagem = window.document.getElementById('mensagem').value
        this.idade = window.document.getElementById('idade').value
        this.data_cadastro = window.document.getElementById('data').value
        this.tipo_contato = window.document.getElementsByName('contato').value

        alert(`O novo registro é: 
            \n${this.nome}, 
            \n${this.email}, 
            \n${this.fone}, ${this.mensagem}, 
            \n${this.idade}, 
            \n${this.data_cadastro}, 
            \n${this.tipo_contato}`)
    }
}

contato = new Contato