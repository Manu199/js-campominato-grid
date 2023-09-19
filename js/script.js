/*
  1. creare un bottone per accedere al gioco
  2. generare una griglia di quadrati 10x10 
  3. ogni quadrato ha un numero casuale da 1 a 100 (ogni quadrato ha un numero diverso)
  4. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
  5. 

*/

const main = document.querySelector('.container');
const numbersBlacklist = [];
const playBtn = document.querySelector( '#play')
const levelSelect = document.querySelector('#griglia')



let cellNumbers;
const levels = [100, 81, 49]

 playBtn.addEventListener('click', play);

  function play() {
    console.log('PLAY');
    cellNumbers = levels[levelSelect.value];
    reset();
    generatePlayGround();
  }


  function generatePlayGround(){

    const grid = document.createElement('div');
    grid.classList = 'grid';

    for(let i = 0; i < cellNumbers; i++){
      const cell = createCell(i);
      grid.appendChild(cell);
    }

  main.append(grid)
  }

    function createCell(index){
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.classList.add('square' + cellNumbers);
      cell._cellID = index;
      cell.addEventListener('click',  hendleClickCell)

      return cell;
    }

    function hendleClickCell(){
      this.classList.add('clicked')
      console.log(this._cellID);
    }

    // function init() {
    //   for (let i = 1; i <= 100; i++) {
    //     // const randomNumber = getUniqueRandomNumber(1, 100);
    //     // const square = createSquare(randomNumber);
    //     const square = createSquare(i);


    //     square.addEventListener('click', function () {
    //       console.log(this._squareID);
    //       this.classList.toggle('clicked');
    //       // this.classList.toggle(oddEven(this._squareID));

    //     });

    //     container.append(square);
    //   }
    // }


    // function createSquare(index) {

    // /*
    //   1. crea l'elemento 
    //   2. gli aggiungoi la classe square
    //   3. restituisco l'elemento creato

    // */

    //   // const newSquare = document.createElement('div');
    //   // newSquare.className = 'square';
    //   // newSquare._squareID = index;
    //   // // newSquare.innerHTML = `<span>${index}</span>`;
    //   // return newSquare;
    // }

    function reset() {
      main.innerHTML = '';
      // const btnStart = generateBtnStart();
      // main.append(btnStart);
    }

    // function generateBtnStart() {
    //   const btn = document.createElement('button');
    //   btn.innerHTML = 'START';
    //   btn.addEventListener('click', function () {
    //     main.innerHTML = '';
    //     numbersBlacklist.length = 0; 
    //     generatePlayGround();
    //   });
    //   return btn;
    // }

  