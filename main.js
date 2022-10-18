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

/**
 * 
 * @param {Element} GenerateGame Pulsante per generare il capo da gico
 * @param {Element} gameField campo da gioco
 */

function createGame(GenerateGame,gameField) {
    GenerateGame.addEventListener("click",function(){
        console.log("ho cliccato il bottone");
        gameField.classList.remove("d_none")
    })
    return GenerateGame
}

createGame(btn,container)




//creare un ciclo per creare le caselle con dentro 1 numero da 1 a 100
//creo elemento nella dom e lo appendo al contenitore

let cellQuantity = 100

quantityBomb = 16

let bombs = []


let contatore = false

let score = 0

let stampScore = document.querySelector(".final_score")


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
            
            if (!bombs.includes(i)) {
                casella.classList.toggle("lightblue") 
                score++
            }else if(bombs.includes(i)){
                casella.style.background = ("red")
                console.log("hai perso");
                contatore = true
            }
            if(contatore){
                stampScore.innerHTML = score
                console.log(score);
            }
            
        })
    }
}

cellGeneretor(cellQuantity)



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


/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione:
**nella stessa cella può essere posizionata al massimo una bomba,
perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti
(ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */