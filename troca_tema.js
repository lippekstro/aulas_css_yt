const btn_tema = document.querySelector('#btn-tema')
const html = document.querySelector('html')

let estaEscuro = false

btn_tema.addEventListener('click', ()=>{
    if(estaEscuro){
        html.setAttribute('tema', 'claro')
        btn_tema.innerHTML = 'Escuro'
        localStorage.setItem('modo', 'claro')
        estaEscuro = false
    } else {
        html.setAttribute('tema', 'escuro')
        btn_tema.innerHTML = 'Claro'
        localStorage.setItem('modo', 'escuro')
        estaEscuro = true
    }
})

let valor_atual = localStorage.getItem('modo')

function trocaTemaAuto(valor_atual){
    if(valor_atual == 'escuro') {
        html.setAttribute('tema', 'escuro')
        estaEscuro = true
    } else {
        html.setAttribute('tema', 'claro')
        estaEscuro = false
    }
}

trocaTemaAuto(valor_atual)