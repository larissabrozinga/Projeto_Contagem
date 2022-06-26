function Contar() {
    let inic = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passos = document.getElementById('txtp')
    let res = document.getElementById('resultado')
    if(inic.value.length == 0 || fim.value.length == 0 || passos.value.length == 0 ) {
        alert('[ERRO] Dados incorretos')
    }  else {
        res.innerHTML = 'Contando..'
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if( i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
        } 
         
        }  else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
    
        }
        res.innerHTML += `\u{1F3C1}`

    } 

}
