/*
  1. creare un bottone per accedere al gioco
  2. generare una griglia di quadrati 10x10 
  3. ogni quadrato ha un numero casuale da 1 a 100 (ogni quadrato ha un numero diverso)
  4. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
  5. 

*/

const container = document.querySelector('.container');

reset();

// init();

function init() {
for (let i = 1; i <= 100; i++) {

  // const RandomNumber = getUniqueRandomNumber();
  // const square = createsqaure(randomNumber);

  const square = creareSquare(i);

  square.addEventListener('click',function(i) {

    console.log(this);

    console.log(this._squareID);

    this.classList.add('clicked');
    this.classList.add(oddEven(this._squareID));

  })  
  container.append(square);
}
}

function oddEven(id) {
  if(id % 2) return 'odd';
  else return 'even';
}




function creareSquare(index){
  /*
    1. crea l'elemento 
    2. gli aggiungoi la classe square
    3. restituisco l'elemento creato

  */

  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  // newSquare._sqauareID = index;
  newSquare.innerHTML = `<span>${index}</span>`;
  return newSquare;
}

function reset (){
  container.innerHTML = '';
  const btnStart = generateBtnStart();
  container.append(btnStart);
}

function generateBtnStart() {
  const btn = document.createElement('button');
  btn.innerHTML = 'START';
  btn.addEventListener('click',function(){
    container.innerHTML = '';
    init();
  });
  return btn;
}
