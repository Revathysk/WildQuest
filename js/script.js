
// Query selectors to display changes in DOM
const p1Name = document.querySelector("#player1Div");
const p2Name = document.querySelector("#player2Div");
const answer = document.querySelector('#textBox');
let p1Count = 0;
let p2Count = 0;
let counter = 0;
let winQcount = 11;
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
    },
    {
        question :'An average African elephant weighs about 12,000 pounds. Type in true or false',
        correctAns:'true'
    },
    {
        question : 'Male animal that gives birth to offsprings',                
        correctAns :'seahorse'
    },
    {
        question : 'I built not just dam but lodge too with orange teeth',                
        correctAns :'beavers'
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

function winningQuest(player) {
    document.querySelector('#masterqDiv').backgroundColor= 'blue';
    document.querySelector('#masterqDiv').innerText = quiz[winQcount].question; 
    setTimeout(() => {
       checkMasterQ(player);    
    }, 20000);      
}
     
function checkMasterQ(player) {
    
    let getinput = answer.value.toLowerCase();

    if (getinput === quiz[winQcount].correctAns) {
        answer.style.backgroundColor = 'green';
        document.querySelector('#masterqDiv').innerText=`Congrats! ${player},you won. Press Start, to try again`;
        
        //confetti code
        //inlcude confetti.js code in script.js
        //document.writeln("<script type='text/javascript' src='js/confetti.js'></script>");

        setTimeout(function() {
            confetti.start()
        }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)

        //  for stopping the confetti 
         setTimeout(function() {
            confetti.stop()
        }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    }
    else {
        answer.style.backgroundColor = 'yellow';
        document.querySelector('#masterqDiv').innerText= `${player}! Good job making it to Winning Quest`;        
    }
    winQcount++;       
}

function checkAnswer()
{
    let getinput = answer.value.toLowerCase();
    // let imageSelect = '#image'+ counter;
    console.log (getinput);

    if (getinput === quiz[counter].correctAns && counter%2 === 0) {
        p1Count++;
        console.log('player 1 gets a point');        
        document.querySelector(gridSelect).innerText=p1Name.innerText;
        // document.querySelector('#image1').classList.toggle('hide');       
    }
    else if (getinput === quiz[counter].correctAns && counter%2 === 1) {
        p2Count++;
        document.querySelector(gridSelect).innerText=p2Name.innerText;
        console.log('player 2 gets a point');
        // document.querySelector(`#image2`).classList.toggle('hide');
    }
    else {
        answer.style.backgroundColor = 'red';
        console.log(' Hope you get it right next time');
        document.querySelector(gridSelect).innerText= '';
    }
    counter++;
    // to unlock the master winning quest  
    if ( p1Count >= 5 )  {
        winningQuest(p1Name.innerText);
    }   
    else if( p2Count >= 5 ) {
        winningQuest(p2Name.innerText);
    }
    
}

function displayHint(grid){

    // Reset answer textbox 
    answer.style.backgroundColor = 'white';
    answer.value="";
    // reset counter for question to zero on reaching maximum of 9
    if ( counter === counterMax ) {
        counter = 0;
        index=-1;
        }
        
    // display question in the selected grid only. Index will increment only on clicking check button
    if ( index < counter) {
        gridSelect= '.'+grid;
        document.querySelector(gridSelect).innerText=quiz[counter].question;
        index++;                
    }
    else {
        setTimeout(()=>{
        alert (" Type in your guess, before proceeding ")
        },500);
    }
}

function playerName()
{
     // Reset counter for players
     if(p1Count>0 || p2Count>0){
         let input=prompt("Do you want to reset game? Type 'y' or 'n'");
         if( input === 'y')
         {
                p1Count=0;
                p2Count=0;
                counter=0;
                index=-1;
                p1Name.innerText= "";
                p2Name.innerText= "";
                document.querySelector('#masterqDiv').innerText="";
                answer.value = "";
                for (let i=1;i<=9;i++){
                    console.log(`.grid${i}`);
                    document.querySelector(`.grid${i}`).innerText= '';
                }
         
        }
     }

    let input= prompt("Enter First player's name:")
    p1Name.innerText=input;
    input= prompt("Enter Second player's name:")
    p2Name.innerText=input;
        
}