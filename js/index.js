(function meuEscopo () {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function criarPessoa (nome, sobrenome, peso, altura) {
        return {nome, sobrenome, peso, altura}
    };

    function recebeEventoForm (evt) {
        evt.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        const pessoa = criarPessoa(nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.push(pessoa);

        console.log(pessoas)

        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura} <br></p>`

    }

    form.addEventListener('submit', recebeEventoForm);

})();

    // form.onsubmit = function (evento) {
    //     evento.preventDefault()
    //     alert(1)
    // };
