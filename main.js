function fact(x) {
    x = parseInt(x)
    if (typeof x !== 'number' || isNaN(x) || !isFinite(x) || x < 0) return 'Impossible de calculer la factorielle de ' + x
    if (x === 0) return 1
    return fact(x-1)*x
}
function arran(x, y) {
    if (x > y) return 'Le 2e nombre doit être supérieur ou égal au premier.'
    if (isNaN(x = fact(y-x)) || isNaN(y = fact(y))) return 'Impossible de calculer l\'arrangement car l\'une des entrées n\'est pas un entier positif et différent de l\'Infini.'
    return arr = y / x
}
function combi(x, y) {
    let arr = arran(x, y)
    if (isNaN(arr)) return arr
    return arr / fact(x);
}
function calcul(nombre){
    switch(nombre){
        case 1:
            let nb1 = document.querySelector("#fact").value
            document.querySelector("#result-fact").innerHTML = fact(nb1)
        break
        case 2:
            let nb2 = document.querySelector("#arran-a").value
            let nb3 = document.querySelector("#arran-b").value
            document.querySelector("#result-arran").innerHTML = arran(nb2, nb3)
        break
        case 3:
            let nb4 = document.querySelector("#combi-a").value
            let nb5 = document.querySelector("#combi-b").value
            document.querySelector("#result-combi").innerHTML = combi(nb4, nb5)
        break
    }
}
function EnableButton(name){
    document.querySelector(`#result-${name}`).innerHTML = ''
    let self = document.querySelector(`#${name}-a`)
    let input = document.querySelector(`#${name}-b`)
    let button = document.querySelector(`#${name}`)
    if (self.value.length > 0){
        if (input.value.length > 0) button.disabled = false
        input.addEventListener("input", function(){
            document.querySelector(`#result-${name}`).innerHTML = ''
            if (input.value.length > 0) button.disabled = false
            else button.disabled = true
        })
    }else{
        button.disabled = true
        input.replaceWith(input = input.cloneNode(false))
    }
}

document.querySelector("#fact").addEventListener("input", function(){
    document.querySelector("#result-fact").innerHTML = ''
    if (this.value.length > 0) document.querySelector("#facto").disabled = false
    else document.querySelector("#facto").disabled = true
})
document.querySelector("#arran-a").addEventListener("input", ()=> EnableButton("arran"))
document.querySelector("#combi-a").addEventListener("input", ()=> EnableButton("combi"))
document.querySelector("#facto").addEventListener("click", (e)=>{
    e.preventDefault()
    calcul(1)
})
document.querySelector("#arran").addEventListener("click", (e)=>{
    e.preventDefault()
    calcul(2)
})
document.querySelector("#combi").addEventListener("click", (e)=>{
    e.preventDefault()
    calcul(3)
})