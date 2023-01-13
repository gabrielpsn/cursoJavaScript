// CODIGO CM BOAS PRATICAS

function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio)
    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0

// USANDO FOREACH

listaDeTeclas.forEach((tecla) => {
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
});


// USANDO O FOR
// for(let contador =0; contador < listaDeTeclas.length; contador++) {
//     const tecla = listaDeTeclas[contador]
//     const instrumento = tecla.classList[1]
//     const idAudio = `#som_${instrumento}`
//     tecla.onclick = function () {
//         tocaSom(idAudio)
//     }
// }

// USANDO WHILE
// while (contador < listaDeTeclas.length) {
//     const tecla = listaDeTeclas[contador]
//     const instrumento = tecla.classList[1]
//     const idAudio = `#som_${instrumento}`
//     tecla.onclick = function () {
//         tocaSom(idAudio)
//     }
//     contador = contador + 1
// }

// CODIGO SEM CLEAN CODE E SEM BOAS PRATICAS
/*
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play()
}

document.querySelector('.tecla_pom').onclick = tocaSomPom

document.querySelector('.tecla_clap')
document.querySelector('.tecla_tim')

document.querySelector('.tecla_puff')
document.querySelector('.tecla_splash')
document.querySelector('.tecla_toim')

document.querySelector('.tecla_psh')
document.querySelector('.tecla_tic')
document.querySelector('.tecla_tom')

document.querySelector('#som_tecla_clap')
document.querySelector('#som_tecla_tim')

document.querySelector('#som_tecla_puff')
document.querySelector('#som_tecla_splash')
document.querySelector('#som_tecla_toim')

document.querySelector('#som_tecla_psh')
document.querySelector('#som_tecla_tic')
document.querySelector('#som_tecla_tom')

*/

