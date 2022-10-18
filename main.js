/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
ed emetto un messaggio in console con il numero della cella cliccata.*/ 



let btn = document.querySelector("button")
console.log(btn);

let container = document.querySelector(".container")
console.log(container);

//creo una evento click al pulsante per far comparire la griglia
btn.addEventListener("click",function(){
    console.log("ho cliccato il bottone");
    container.classList.remove("d_none")
})

//creare un ciclo per creare le caselle con dentro 1 numero da 1 a 100
//creo elemento nella dom e lo appendo al contenitore

let numDiff = 100

let numMedio = 81

let numFacile = 49

let scelta = prompt("Scegli Difficoltà (difficile , medio , facile)")

if (scelta == "difficile") {
    for (let i = 1; i <= numDiff; i++) {
        let casella = document.createElement("div")
        casella.classList.add("casella")
        casella.append(i)
        container.append(casella)
        casella.addEventListener("click",function() {
            console.log(this);
        casella.classList.toggle("lightblue")
        })
    }

}else if(scelta == "medio"){
    for (let i = 1; i <= numMedio; i++) {
        let casella = document.createElement("div")
        casella.classList.add("casella_media")
        casella.append(i)
        container.append(casella)
        casella.addEventListener("click",function() {
            console.log(this);
        casella.classList.toggle("lightblue")
        })
    }

}else if(scelta == "facile"){
    for (let i = 1; i <= numFacile; i++) {
        let casella = document.createElement("div")
        casella.classList.add("casella_facile")
        casella.append(i)
        container.append(casella)
        casella.addEventListener("click",function() {
            console.log(i);
        casella.classList.toggle("lightblue")
        })
    }
}