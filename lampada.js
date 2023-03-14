var lamp = window.document.getElementById('caixaLampada')

function estaQuebrada() {
    return lamp.src.indexOf('quebrada') > -1

}

function liga(){
    if (!estaQuebrada()){
   lamp.src = 'ligada.png'}
}

function desliga(){
    if (!estaQuebrada()){
    lamp.src = 'desligada.png'}
}

lamp.addEventListener('click', quebra)
function quebra(){
    lamp.src = 'quebrada.png'
}