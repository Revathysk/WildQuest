// Query selectors to display changes in DOM
const p1Name = document.querySelector("#player1Div");
const p2Name = document.querySelector("#player2Div");
const answer = document.querySelector('#textBox');
let p1Count = 0;
let p2Count = 0;
let counter = 0;
let winQcount = 0;
let counterMax = 9;
let index= -1;
let gridSelect='';
const quiz = [
	{
		question: "Name the eagle that feeds on monkey and sloth",
		correctAns: 'harpy'        
	},
	{
		question: "Animal with 4 stomach, has red nose",
		correctAns: 'reindeer' 		
	},
    {
		question: "Animal with unique finger print as human",
		correctAns: 'koala' 		
	},
    {
		question: "Sealife with heart in head",
		correctAns: 'shrimp' 		
	},
    {
		question: "Sealife with no heart,brain and bone",
		correctAns: 'jellyfish' 		
	},
    {
		question: " myhorn is made of hair...",
		correctAns: 'rhino' 
    },
    {
		question: "Lives in desert, can drink 25 gallons of water at a time",
		correctAns: 'camel' 
    },
    {
		question: "Know to have spines,as many as 30,000",
		correctAns: 'porcupine' 
    },
    {
		question: "Digs netwrok of chambers and tunnels called sett",
		correctAns: 'badger' 
    },
    {
		question: "I'm slow in moving...can sleep for 3 years continuously",
		correctAns: 'snail' 
    }
];
const winquiz=[
    {
        question : 'An adult Elephant weighs ',
                a:'800 to 900 pounds',
                b:'1000 to 2000 pounds',
                c:'5000 to 14000 pounds',              
        rightAns : 'c'
    },
    {
        question : 'Male animal that gives birth to offsprings',
                a:'Seahorse',
                b:'Whale',
                c:'Shark',
        rightAns : 'a'  
    }
];    

// class Quiz { 
//     constructor(hint,answer,count){
//     this.hint =hint;
//     this.answer=answer;
//     this.count=0||count;
//     }
// }

// function loadDB()
// {   var db;
//     var request = indexedDB.open("QuizDatabase");
//     request.onerror = function(event) {
//     console.log("Why didn't you allow my web app to use IndexedDB?!");

//     };
//       request.onsuccess = function(event) {
//       db = event.target.result;
//       console.log("Database created");
//     };
// }

function gameDisplay(){
    console.log("gamedisplay");
    player1Div.classList.toggle('hide');
    player2Div.classList.toggle('hide');
    masterqDiv.classList.toggle('hide');
    instructDiv.classList.toggle('hide');
    thirdDiv.classList.toggle('hide');
    continueButton.classList.toggle('hide');
    startDiv.classList.toggle('hide');
    answerDiv.classList.toggle('hide');
    submitDiv.classList.toggle('hide');
}

function winningQuest() {
    
    document.querySelector('#radioBox1').classList.toggle('hide');
    document.querySelector('#radioBox2').classList.toggle('hide');
    document.querySelector('#radioBox3').classList.toggle('hide');
    document.querySelector('#masterqDiv').innerText = winquiz[0].question;
    document.querySelector('#radioBox1').innerText = winquiz[0].question;
    document.querySelector('#radioBox2').innerText = winquiz[0].b;
    document.querySelector('#radioBox3').innerText = winquiz[0].c;
    
    for( let i=1; i<=3; i++ ) {
        let playerAns = document.querySelector(`input[name="option"+${i}]:checked`)
        if (playerAns === winquiz[i-1].correctAns){
            console.log("You won");
        }
    }
}

function checkAnswer()
{
    let getinput = answer.value.toLowerCase();
    console.log (getinput);
    if (getinput === quiz[counter].correctAns && counter%2 === 0) {
        p1Count++;
        console.log('player 1 gets a point');        
        document.querySelector(gridSelect).innerText=p1Name.innerText;
    }
    else if (getinput === quiz[counter].correctAns && counter%2 === 1) {
        p2Count++;
        document.querySelector(gridSelect).innerText=p2Name.innerText;
        console.log('player 2 gets a point');
    }
    else {
        answer.style.backgroundColor = 'red';
        console.log(' Hope you get it right next time');
        document.querySelector(gridSelect).innerText='';
    }
    counter++;        
    // to unlock the master winning quest  
    if ( p1Count >=5 || p2Count >=5 )
    {
        winningQuest();
        winQcount++;
        //document.querySelector('#masterqDiv').innerText = winquiz.question[0];
    }
}

function displayHint(grid){

    // Reset answer textbox 
    answer.style.backgroundColor = 'white';
    answer.innerText=' ';
    // reset counter for question to zero on reaching maximum of 20
    if ( counter === counterMax ) {
        counter = 0;
        index=-1;
        }
        
    // display question in the selected grid only. Index will increment only on clicking check button
    if ( index < counter) {
        gridSelect= '.'+grid;
        document.querySelector(gridSelect).innerText=quiz[counter].question;
        index = counter;
    }
    else {
        setTimeout(()=>{
        alert (" Type in your guess, before proceeding ")
        },500);
    }
}

function playerName()
{
    let input= prompt("Enter First player's name:")
    p1Name.innerText=input;
    input= prompt("Enter Second player's name:")
    p2Name.innerText=input;
    
    // Reset counter for players
    p1Count=0;
    p2Count=0;
}
