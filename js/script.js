
// Query selectors to display changes in DOM
const p1Name = document.querySelector("#player1Div");
const p2Name = document.querySelector("#player2Div");
const answer = document.querySelector('#textBox');
let p1Count = 0;
let p2Count = 0;
let counter = 0;
let winQcount = 12;
let counterMax = 11;
let index= -1;
let gridSelect='';
const quiz = [
	{
		question: "Name the eagle that feeds on monkey and sloth",
		correctAns: 'harpy',
        image: 'https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Harpy-Eagle-photo.jpg'
	},
	{
		question: "Animal with 4 stomach, has red nose",
		correctAns: 'reindeer',
        image: 'https://www.greenpeace.org/static/planet4-canada-stateless/2018/06/140074_252367.jpg'	
	},
    {
		question: "Animal with unique finger print as human",
		correctAns: 'koala',
        image:'https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg'
	},
    {
		question: "Sealife with heart in head",
		correctAns: 'shrimp',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs5322MVDreww0an28ZGRV_lLMnmGO7r5Lml26whln5BzzjSQKRrFO0DwjFmfs3OR6dY&usqp=CAU' 		
	},
    {
		question: "Sealife with no heart,brain and bone",
		correctAns: 'jellyfish',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEU4ja1V7ulgWCTySoWoI0l8T8J6xs2g-A4_39VUranMb_FlhmnTcPBlfuwmsp3KfyQk&usqp=CAU'		
	},
    {
		question: " Has horn on top of nose and horn is made of hair...",
		correctAns: 'rhino',
        image: 'https://files.worldwildlife.org/wwfcmsprod/images/White_Rhino/story_full_width/15g9slqvru_white_rhino_42993643.jpg'
    },
    {
		question: "Lives in desert, can drink 25 gallons of water at a time",
		correctAns: 'camel',
        image: 'https://www.thoughtco.com/thmb/FS0_P5QLMgc-xWU4kH7lWALWLUE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/camel1-5c8fc2b1c9e77c0001eb1c6f.jpg'
    },
    {
		question: "Know to have lot of spines,as many as 30,000",
		correctAns: 'porcupine',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PorcupineCabelasSpringfield0511.jpg/220px-PorcupineCabelasSpringfield0511.jpg' 
    },
    {
		question: "Digs netwrok of chambers and tunnels called sett",
		correctAns: 'badger',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Badger_laying_on_ground._-_DPLA_-_0335977b4d1504edc799834081ca4fd5.jpg/800px-Badger_laying_on_ground._-_DPLA_-_0335977b4d1504edc799834081ca4fd5.jpg'
    },
    {
		question: "I'm slow in moving...can sleep for 3 years continuously",
		correctAns: 'snail',
        image: 'https://cf.ltkcdn.net/kids/images/std/239664-800x493r1-snail.webp'
    },
    {
        question :'An average African elephant weighs about 12,000 pounds. Type in true or false',
        correctAns:'true' ,
        image: 'https://images.news18.com/ibnlive/uploads/2021/08/jumbo.jpg'
    },
    {
        question : 'Male animal that gives birth to offsprings',                
        correctAns :'seahorse',
        image : 'https://animalfactguide.com/wp-content/uploads/2021/01/sea_horse_is_horsey-e1609821832721.jpg'
    },
    {
        question : 'Rodent builds not just dam but lodge too with orange teeth',                
        correctAns :'beaver',
        image : 'https://static.dw.com/image/18461438_6.jpg'
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
    // document.querySelector('#masterqDiv').backgroundColor= 'blue';
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

    if (getinput === quiz[counter].correctAns) {
        
        if (counter%2 === 0){
            p1Count++;    
        } else {    
            p2Count++;
        }      
        document.querySelector(gridSelect).innerText='';
        let crtimage = document.createElement('img');
        crtimage.setAttribute("style", "width: 12vw; height: 16vh; -webkit-border-radius: 15px;");
        crtimage.src = quiz[counter].image;
        document.querySelector(gridSelect).appendChild(crtimage);
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
        if( input === 'y'){
            p2Count=0;
            p1Count=0;
            counter=0;
            p1Name.innerText= "";
            index=-1;
            p2Name.innerText= "";
            document.querySelector('#masterqDiv').innerText="";
            answer.value = "";
            answer.style.backgroundColor = 'white';
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