
// Query selectors to display changes in DOM
const p1Name = document.querySelector("#player1Div");
const p2Name = document.querySelector("#player2Div");
const answer = document.querySelector('#textBox');
let fiveCount = 5;
let p1Count = 0;
let p2Count = 0;
let counter = 0;
let winQcount = 18;
let counterMax = 17;
let index = 0;
let gridSelect = '';
let gridCount = 0;
let numOfGrids = 9;
const quiz = [
    {
        question: "Name the eagle that feeds on monkey and sloth",
        correctAns: 'harpy',
        image: 'https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Harpy-Eagle-photo.jpg'
    },
    {
        question: "Animal with 4 stomach, depicted with red nose during Christmas. ",
        correctAns: 'reindeer',
        image: 'https://www.greenpeace.org/static/planet4-canada-stateless/2018/06/140074_252367.jpg'
    },
    {
        question: "Animal with unique and similar finger print as humans",
        correctAns: 'koala',
        image: 'https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg'
    },
    {
        question: "Sealife with it's heart in head. Has no fins and swims with body",
        correctAns: 'shrimp',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs5322MVDreww0an28ZGRV_lLMnmGO7r5Lml26whln5BzzjSQKRrFO0DwjFmfs3OR6dY&usqp=CAU'
    },
    {
        question: "Sealife with no heart,no brain and no bone. one of its species is almost immortal",
        correctAns: 'jellyfish',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEU4ja1V7ulgWCTySoWoI0l8T8J6xs2g-A4_39VUranMb_FlhmnTcPBlfuwmsp3KfyQk&usqp=CAU'
    },
    {
        question: "Lives in desert, can drink 25 gallons of water at a time",
        correctAns: 'camel',
        image: 'https://www.thoughtco.com/thmb/FS0_P5QLMgc-xWU4kH7lWALWLUE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/camel1-5c8fc2b1c9e77c0001eb1c6f.jpg'
    },
    {
        question: "Animal known to have lot of spines,as many as 30,000",
        correctAns: 'porcupine',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PorcupineCabelasSpringfield0511.jpg/220px-PorcupineCabelasSpringfield0511.jpg'
    },
    {
        question: "Animal that digs network of chambers and tunnels called sett. Qualified to get badge for digging",
        correctAns: 'badger',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Badger_laying_on_ground._-_DPLA_-_0335977b4d1504edc799834081ca4fd5.jpg/800px-Badger_laying_on_ground._-_DPLA_-_0335977b4d1504edc799834081ca4fd5.jpg'
    },
    {
        question: 'An average African elephant weighs about 12,000 pounds. Type in true or false',
        correctAns: 'true',
        image: 'https://images.news18.com/ibnlive/uploads/2021/08/jumbo.jpg'
    },
    {
        question: 'Rodent builds not just dam but lodge too with orange teeth',
        correctAns: 'beaver',
        image: 'https://static.dw.com/image/18461438_6.jpg'
    },
    {
        question: 'This third largest mammal on land,spends most of day in water body but cannot swim or float',
        correctAns: 'hippo',
        image: 'https://www.treehugger.com/thmb/KInALZmg4SfT-CZ7iXUPjs3Qvl0=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-142091148-dd5173956a7d4002a0aa1adeb1659afb.jpg'
    },
    {
        question: "Deep in South America's rainforests,tops the land mammal tooth count, 74",
        correctAns: 'armadillo',
        image: 'https://www.worldatlas.com/r/w960-q80/upload/0a/99/a0/shutterstock-83394460.jpg'
    },
    {
        question: 'Male sea animal that gives birth to offsprings',
        correctAns: 'seahorse' || 'seadragon',
        image: 'https://animalfactguide.com/wp-content/uploads/2021/01/sea_horse_is_horsey-e1609821832721.jpg'
    },
    {
        question: 'Sea animal with eight legs and blue blood ',
        correctAns: 'squid' || 'octopus',
        image: 'https://qph.fs.quoracdn.net/main-qimg-dc5f869683c4cd8b103447b7e22d9c4b-lq'
    },
    {
        question: "Animal's stripes are as individual as fingerprints are for humans. Most have over 100 stripes",
        correctAns: 'tiger',
        image: 'https://i.pinimg.com/originals/6f/81/b2/6f81b2e740b7f49a4a59778bb8fd69c1.jpg'
    },
    {
        question: "The tallest animal having the shortest sleep time of just 30 minutes per day mostly standing, Hey I lay down too!",
        correctAns: 'giraffee',
        image: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/05/sleeping-giraffes-7__880.jpg'
    },
    {
        question: " Has horn on top of nose and horn is made of hair...",
        correctAns: 'rhino',
        image: 'https://files.worldwildlife.org/wwfcmsprod/images/White_Rhino/story_full_width/15g9slqvru_white_rhino_42993643.jpg'
    },
    {
        question: "I'm slow in moving...can sleep for 3 years continuously",
        correctAns: 'snail',
        image: 'https://cf.ltkcdn.net/kids/images/std/239664-800x493r1-snail.webp'
    },
    {
        question: "Unlike my bear peers, i dont hibernate in winter and have extra bone just to eat",
        correctAns: 'panda',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-a-giant-panda-eating-bamboo-royalty-free-image-1583635024.jpg'
    },    
    {
        question: "I live in pride and know for courage ",
        correctAns: 'Lion',
        image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-lion-lkb-art-and-photography.jpg'
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

function gameDisplay() {
    if (p1Name.value === '' || p2Name.value === '') {
        prompt("Enter players name to continue");
    }
    else {
        // console.log("gamedisplay");
        // continueButton.classList.toggle('hide');
        masterqDiv.classList.toggle('hide');
        player2Div.classList.toggle('hide');
        player1Div.classList.toggle('hide');
        instructDiv.classList.toggle('hide');
        thirdDiv.classList.toggle('hide');
        //resetDiv.classList.toggle('hide');
        answerDiv.classList.toggle('hide');
        submitDiv.classList.toggle('hide');
        continueDiv.classList.toggle('hide');        

        // Get players Name 
        p1Name.innerText = document.querySelector("#textBoxP1").value;
        p2Name.innerText = document.querySelector("#textBoxP2").value;
    }
}

 function winningQuest(player) {
    document.querySelector('#masterqDiv').style.backgroundColor = 'blue';
    document.querySelector('#masterqDiv').innerText = quiz[winQcount].question;
    document.querySelector("#submitButton").classList.toggle('hide');
    setTimeout(() => {
       checkMasterQ(player);
    }, 20000);
}

function checkMasterQ(player) {

    let getinput = answer.value.toLowerCase();

    if (getinput === quiz[winQcount].correctAns) {
        answer.style.backgroundColor = 'green';
        document.querySelector('#masterqDiv').innerText = `Congrats! ${player},you won.Press reset, to start from first`;
//        document.querySelector('#masterqDiv').innerText = `Congrats! you won. Press Start, to try again`;

        setTimeout(function () {
            confetti.start()
            answer.value = "";
            answer.style.backgroundColor = 'white';
        }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)

        //  for stopping the confetti 
        setTimeout(function () {
            confetti.stop()
        }, 4000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    }
    else {
        answer.value = "";
        answer.style.backgroundColor = 'white';
        document.querySelector('#masterqDiv').style.backgroundColor = 'gray';
        document.querySelector('#masterqDiv').innerText = `${player},better luck next time`;
    }
    winQcount++;
    resetDiv.classList.toggle('hide');
}

function checkAnswer() {
    let getinput = answer.value.toLowerCase();
    console.log(getinput);
    if (index < counter) {
        if (getinput === quiz[index].correctAns) {

            if (index % 2 === 0) {
                document.querySelector(`.fpscore${fiveCount - p1Count}`).style.backgroundColor = 'purple';
                p1Count++;

            } else {
                document.querySelector(`.spscore${fiveCount - p2Count}`).style.backgroundColor = 'blue';
                p2Count++;
            }
            document.querySelector(gridSelect).innerText = '';
            let crtimage = document.createElement('img');
            crtimage.setAttribute("style", "width: 12vw; height: 17vh; -webkit-border-radius: 15px;");
            crtimage.src = quiz[index].image;
            document.querySelector(gridSelect).appendChild(crtimage);
        }
        else {
            answer.style.backgroundColor = 'red';
            console.log('Nice try');
            document.querySelector(gridSelect).innerText = '';
        }

        // to unlock the master winning quest  
        if (p1Count >= fiveCount) {
            setTimeout(() => {
            winningQuest(p1Name.innerText)
        }, 1000);         
        }
        else if (p2Count >= fiveCount) {    
            setTimeout(() => {
                winningQuest(p2Name.innerText)
             }, 1000);         
        }
        index++; // increment of clicking check button
    }
    else {
        setTimeout(() => {
            alert(" Click on, one of the blue box for next question!")
        }, 500);
    }
}

function displayHint(grid) {

    // Reset answer textbox     
    answer.style.backgroundColor = 'white';
    answer.value = "";
    console.log(counter, "index", index)
    
    // reset counter for question to zero on reaching maximum of 9
    if (counter === counterMax) {
        counter = 0;
        index = 0;
    }
    // display question in the selected grid only. Index will increment only on clicking check button
    if (index === counter) {
        gridSelect = '.' + grid;
        document.querySelector(gridSelect).innerText = quiz[counter].question;
        counter++;
    }
    else {
        setTimeout(() => {
            alert(" Type in your guess and press check, before proceeding ")
        }, 500);
    }
}

function gameReset() {
    // Reset counter for players
    if (p1Count > 0 || p2Count > 0) {
        let input = prompt("Do you want to reset game? Type 'y' or 'n'");
        if (input === 'y') {
            p2Count = 0;
            p1Count = 0;
            counter = 0;
            gridSelect = '';
            index = 0;
            document.querySelector('#masterqDiv').innerText = "";
            document.querySelector('#masterqDiv').style.backgroundColor = 'gray';
            document.querySelector("#submitButton").classList.toggle('hide');
            document.querySelector("#resetButton").classList.toggle('hide');
            // masterqDiv.classList.toggle('hide');
            answer.value = "";
            answer.style.backgroundColor = 'white';
            for (let i = 1; i <= fiveCount; i++) {
                document.querySelector(`.fpscore${i}`).style.backgroundColor = 'gray';
                document.querySelector(`.spscore${i}`).style.backgroundColor = 'gray';
            }
            for (let i = 1; i <= numOfGrids; i++) {
                console.log(`.grid${i}`);
                document.querySelector(`.grid${i}`).innerText = '';
            }
        }
    }
}