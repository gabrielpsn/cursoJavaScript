const controles = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "braco": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguete": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }

}

controles.forEach(element => {
    element.addEventListener('click', event => {
        manipulaDados(event.target.dataset.controle, event.target.parentNode)
        atualizaEstatistica(event.target.dataset.peca)
    })
})

function manipulaDados (operacao, controle) {
    const peca = controle.querySelector('[data-contador]')
    if (operacao === '-') {
        peca.value--
    } else {
        peca.value++
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach(element => {
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica]
    })
}