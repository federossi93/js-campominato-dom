/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
ed emetto un messaggio in console con il numero della cella cliccata.*/ 



let btnGioca = document.querySelector(".gioca")

let btnReset = document.querySelector(".reset")

let container = document.querySelector(".containers")
console.log(container);

//creo una evento click al pulsante per far comparire la griglia

/**
 * 
 * @param {Element} GenerateGame Pulsante per generare il capo da gico
 * @param {Element} gameField campo da gioco
 */

function createGame(GenerateGame,gameField) {
    GenerateGame.addEventListener("click",function(){
        console.log("ho cliccato il bottone");
    })
    return GenerateGame
}

createGame(btnGioca,container)

//reset campo di gioco

function reset() {
    btnReset.addEventListener("click",function(){
        location.reload();
    })
}

reset(btnReset,container)


//creare un ciclo per creare le caselle con dentro 1 numero da 1 a 100
//creo elemento nella dom e lo appendo al contenitore

let cellQuantity = 100

let contatore = false

let score = 0

let stampScore = document.querySelector(".final_score")

let numeriUsciti = []

/**
 * 
 * @param {number} cell numero di caselle generate
 */


function cellGeneretor(cell) {
    for (let i = 1; i <= cell; i++) {
        let casella = document.createElement("div")
        casella.classList.add("casella")
        casella.append(i)
        container.append(casella)

        casella.addEventListener("click",function() {
            console.log(i);
            
            if (!bombs.includes(i) && !numeriUsciti.includes(i)) {
                casella.classList.toggle("lightblue")
                numeriUsciti.push(i) 
                score++
            }else if(bombs.includes(i)){
                casella.style.background = ("red")
                contatore = true
            }
            if(contatore){
                stampScore.innerHTML = "Hai totalizzato " + score + " punti"
                console.log(score);
                numeriUsciti = 0
                bombs = 0
            }
            
        })
    }
}

cellGeneretor(cellQuantity)


let quantityBomb = 16

let bombs = []

//Genera bombe

/**
 * 
 * @param {number} numberBombs lista bombe generate in un array
 */

function bombsGeneration(numberBombs,bombe) {
    for (let i = 0; i < numberBombs; i++) {
        let random = Math.floor(Math.random()* 101)
        bombe.push(random)
        
    }
}

bombsGeneration(quantityBomb,bombs)

console.log(bombs);


