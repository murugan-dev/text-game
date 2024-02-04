const main = document.querySelector(".main");
const typeArea = document.querySelector(".typing-area");
const btn = document.querySelector(".btn");

const words = [
    "C programming invented by Dennis Ritchie",
    "C programming language is mother language",
    "What is the application of HTML?",
    "What is the application of CSS",
    "The quick brown fox jumps over the lazy dog",
    "Engineering And Technology",
    "javaScript is a front-end language",
    "node JS is allow the multithreats function",
    "This project created at 08-04-23",
    "Employability skills",
    "Experss Js is a framework of NODE",
    "A programmer life is hard",
    "Time is Gold",
    "which programming language you like most",
    "Chrome browser used V8 search Enegine",
    "Safri browser used javaScript core search Enegine",
    "Hard Work nerver fails",
    "I Want to be a fullstack developer"
];

const game ={
    start: 0,
    end: 0,
    user: '',
    arrText: '',
};

btn.addEventListener("click",() => {
      if(btn.textContent === "Start"){
        Play()
        typeArea.value = " "
        typeArea.disabled = false
      }
      else if(btn.textContent === "Done"){
       // typeArea.disabled = ture;
        main.style.borderColor = "white";
        end();
      }
});

function Play(){
    let randText = Math.floor(Math.random() * words.length);
    main.textContent = words[randText];
    game.arrText = words[randText];
    main.style.borderColor = "#c8c8c8";
    btn.textContent = "Done";
    let duration = new Date();
    game.start = duration.getTime();
  }

function end(){
    let duration = new Date();
    game.end = duration.getTime();
    const totalTime = (game.end - game.start ) / 1000;
    game.user = typeArea.value;
    const correct = results();
    main.style.borderColor = "white";
    main.innerHTML =`Time : ${totalTime}  Score : ${correct.score} out of ${correct.total}`;
    btn.textContent = "Start"

}


function results() {
    let valueOne = game.arrText.split(" ");
    let valueTwo = game.user.split(" ");
    let score = 0;
    valueOne.forEach((word, idx) =>{
        if(word === valueTwo[idx]){
            score++;
        }
    })
    return {score, total : valueOne.length}
}

