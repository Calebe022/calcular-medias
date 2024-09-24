let notas = [];

function adicionarNota() {
    let nota = document.getElementById('nota').value;
    if (nota) {
        notas.push(parseFloat(nota));
        atualizarListaNotas();
    }
    document.getElementById('nota').value = '';
}

function atualizarListaNotas() {
    let lista = document.getElementById('notas');
    lista.innerHTML = '';
    for (let i = 0; i < notas.length; i++) {
        let li = document.createElement('li');
        li.textContent = `Nota ${i + 1}: ${notas[i]}`;
        lista.appendChild(li);
    }
}

function calcularMedia() {
    let somatorioNotas = 0;
    let media = 0;

    for (let index = 0; index < notas.length; index += 1) {
        somatorioNotas = somatorioNotas + notas[index];
    }

    media = somatorioNotas / notas.length;

    if (media > 6) {
        const elementoResultado = document.getElementById('resultado');

        elementoResultado.textContent = `Média: ${media.toFixed(2)} - Estudante APROVADO(A)`;
        elementoResultado.className = 'aprovada';
    } else {
        document.getElementById('resultado').textContent = `Média: ${media.toFixed(2)} - Estudante REPROVADO(A)`;
        document.getElementById('resultado').className = 'reprovada';
    }
}

window.onload = () => {
    const btnAdicionarNota = document.querySelector('#adicionarNota');
    const btnCalcularMedia = document.querySelector('#calcularMedia');

    btnAdicionarNota.addEventListener('click', adicionarNota);
    btnCalcularMedia.addEventListener('click', calcularMedia);
}