let palo = document.getElementById("palo")
let palo2 = document.getElementById("palo2")
function numeroGen() {
   let a = Math.floor(Math.random() * 13) + 1
   if (a === 1) {
       return "A"
   }
   else if (a === 11) {
       return "J"
   }
   else if (a === 12) {
       return "Q"
   }
   else if (a === 13) {
       return "K"
   }
   else {
       return a 
   }
}
function paloGen() {
    let a = Math.floor(Math.random() * 4) + 1
    if (a === 1) {
        palo.classList.add("pica")
        palo2.classList.add("pica")
        return "&spades;"
    }
    else if (a === 2) {
        palo.classList.add("trebol")
        palo2.classList.add("trebol")
        return "&clubs;"
    }
    else if  (a === 3) {
        palo.classList.add("corazon")
        palo2.classList.add("corazon")
        return "&hearts;"
    }
    else {
        palo.classList.add("diamante")
        palo2.classList.add("diamante")
        return "&diams;"
    }
}
document.getElementById("number").innerHTML = numeroGen()
palo2.innerHTML = palo.innerHTML = paloGen()




