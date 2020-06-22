// Get element selectors 
const playerName = document.getElementById('playerName');
const nameButton = document.getElementById('nameForward');
const mainContent = document.getElementById('mainContent');
const welcomeText = document.querySelector('.welcome-text');

// Array collection of all villagers (level 1 cards)
const villagersArray = [{
        name: 'coach',
        img: '/assets/images/villagers/coach.svg'
    },
    {
        name: 'eugene',
        img: '/assets/images/villagers/eugene.svg'
    },
    {
        name: 'marina',
        img: '/assets/images/villagers/marina.svg'
    },
    {
        name: 'norma',
        img: '/assets/images/villagers/norma.svg'
    },
    {
        name: 'piper',
        img: '/assets/images/villagers/piper.svg'
    },
    {
        name: 'renee',
        img: '/assets/images/villagers/renee.svg'
    }
];
// Array collection of all fish (level 2 cards)
    const fishCards = [{
        name: 'betta',
        img: '/assets/images/fish/betta.jpg'
    },
    {
        name: 'catfish',
        img: '/assets/images/fish/catfish.jpg'
    },
    {
        name: 'clownfish',
        img: '/assets/images/fish/clownfish.jpg'
    },
    {
        name: 'oarfish',
        img: '/assets/images/fish/oarfish.jpg'
    },
    {
        name: 'seabass',
        img: '/assets/images/fish/seabass.jpg'
    },
    {
        name: 'seahorse',
        img: '/assets/images/fish/seahorse.jpg'
    }
];

// Array collection of all insects (level 3 cards)

    const insectsCards = [{
        name: 'agrias',
        img: '/assets/images/insects/agrias.jpg'
    },
    {
        name: 'emperor-butterfly',
        img: '/assets/images/insects/emperor-butterfly.jpg'
    },
    {
        name: 'great-purple-emperor',
        img: '/assets/images/insects/great-purple-emperor.svg'
    },
    {
        name: 'madagascar-sunset-moth',
        img: '/assets/images/insects/madagascar-sunset-moth.svg'
    },
    {
        name: 'orchid-mantis',
        img: '/assets/images/insects/orchid-mantis.jpg'
    },
    {
        name: 'queen-alexandra-birdwing',
        img: '/assets/images/insects/queen-alexandra-birdwing.jpg'
    }
];

//Event listener for save player name
nameButton.addEventListener('click', savePlayerName);

// Clear main content div function
function clearMainContent() {
    mainContent.innerHTML = '';
}

// Save player name to local storage function
function savePlayerName() {
    if (playerName.value == '') {
        alert("Please enter an username to continue")
    } else {
        localStorage.setItem("playerName", playerName.value);
        clearMainContent();
        rulesPage();
    }
}

// rulesPage function generates all elements for the rules page 
function rulesPage() {
    // Remove welcome screen text 
    welcomeText.remove();
    // Create new div element
    const rules = document.createElement('div')
    // Set class="rules" 
    rules.setAttribute('class', 'rules')
    // Append rules div to the mainContent div
    mainContent.appendChild(rules)
    // Set the first rule page inner HTML
    rules.innerHTML = `
    <div class="row">
        <div class="col-12 text-center tom-nook">
            <img src="/assets/images/Tom_Nook.png" alt="" class='img-fluid'>
        </div>
    </div>
    <div class="row">
        <div class="col-12 text-center rules-display">
            <div class="rules-section">
                <p id="rulesText">Hello <span class="playerName">${localStorage.getItem('playerName')}</span>...</p>
            </div>
            <i class="fas fa-chevron-circle-right next-rule-glow" id="nextRule"></i>
            <p class="small-print">Click/tap on button to proceed</p>
        </div>
    </div>
    `
    // Assing nextRuleButton to the chevron icon
    nextRuleButton = document.getElementById('nextRule');
    nextRuleButton.addEventListener('click', function () {
        rulesText.innerText = "I shall now explain the rules of the game to you, yes, yes...";
        nextRuleButton.addEventListener('click', function () {
            rulesText.innerText = "It is very simple, find all card pairs before the timer runs out, yes, yes...";
            nextRuleButton.addEventListener('click', function () {
                rulesText.innerText = "If you succeed, you'll be brought to the next level";
                nextRuleButton.addEventListener('click', function () {
                    rulesText.innerText = "And if you're not, you'll have to start from the start, that's right, yes, yes...";
                    nextRuleButton.addEventListener('click', function () {
                        rulesText.innerText = "Okay now, best of luck and go make your island proud!";
                        nextRuleButton.addEventListener('click', gamePage());
                    })
                })
            })
        })
    });
}

// gamePage function generates all elements for the rules page 
function gamePage() {
    clearMainContent();
    // Create the top information container to display the timer and the click count
    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('class', 'row text-center');
    infoContainer.innerHTML = `
    <div class="col-6" id="timer">
        Time: 01:00 
    </div>
    <div class="col-6 moves">
        Moves: 001
    </div>
    `
    mainContent.appendChild(infoContainer);

    // Game timer 
    // Initial settings & element selectors
    let sec = 90;
    let timer = document.getElementById('timer');
    let interval;
    let warningSound = new Audio('/assets/beep.mp3');
    let endSound = new Audio('/assets/dundundun.mp3')

    function timerStart(){
        interval = setInterval(function() {
            timer.innerText = `${sec} seconds remaining`;
            sec--
            // If 10 or less seconds remaining (but not 0) then play warning sound
            if (sec < 10 && sec != 0) {
                warningSound.play();
            }
            // If 0 seconds remaining show 0 in the timer, show warning that user has lost the game and play the dundundun sound
            if (sec == 0) {
                endSound.play()
                timer.innerText = `0 seconds remaining`;
                mainContent.innerHTML = `
                <div class="row">
                    <div class="col-12 text-center tom-nook">
                        <img src="/assets/images/Tom_Nook.png" alt="" class='img-fluid'>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center rules-display">
                        <div class="rules-section">
                            <p id="rulesText">Oh no, <span class="playerName">${localStorage.getItem('playerName')}</span>...
                            <br>
                            Looks like you've lost... Why not try again?
                            </p>
                        </div>
                    </div>
                </div>
                `
                clearInterval(interval);
            }
        },1000)
    }
    timerStart();

    // Create the game container
    const gameContainer = document.createElement('div');
    gameContainer.setAttribute('class', 'game-container')
    mainContent.appendChild(gameContainer);
    gameContainer.innerHTML = `
    <div class="row d-flex flex-wrap" id="cardsRow"> 
    
    </div>
    `
    // Generate the game board
        // Duplicate cards so that we have 2 sets of 6 cards
        let villagersCards = villagersArray.concat(villagersArray);
        // Randomise the cards everytime script is run
        villagersCards.sort(() => 0.5 - Math.random())
        for (let i = 0; i < villagersCards.length; i++) {
            let cardsRow = document.getElementById('cardsRow');
            let card = document.createElement('div');
            card.classList.add('col-sm-4', 'col-lg-3','card');
            let cardFront = document.createElement('div'); 
            cardFront.classList.add('card-front')
            let cardBack = document.createElement('div');
            cardBack.classList.add('card-back')
            let defaultImage = document.createElement('img');
            defaultImage.classList.add('img-fluid')
            defaultImage.setAttribute('src', '/assets/images/back-face.svg');
            let cardsImage = document.createElement('img');
            cardsImage.classList.add('img-fluid')
            cardsImage.setAttribute('src', villagersCards[i].img);
            cardsImage.dataset.name = villagersCards[i].name;
            cardFront.appendChild(cardsImage);
            cardBack.append(defaultImage);
            card.appendChild(cardBack);
            card.appendChild(cardFront);
            cardsRow.appendChild(card);
        }
    
    // Counter for preventing more than 2 cards flipped
    let count = 0;
    // Empty variables for storing first & second guess dataset name
    let guess1 = '';
    let guess2 = '';
    let timeout = 1000;

    // Event listener for adding selected effect to cards
    gameContainer.addEventListener('click', function(e) {
        let clickedElement = e.target;
        if (count <= 2 && e.target.nodeName === 'IMG') {
            count++;
            // If count is 1 then add the selected card class and store the data value into guesss1
            if (count === 1) {
            guess1 = clickedElement.parentNode.nextSibling.lastChild.dataset.name
            clickedElement.classList.add('selected-card');
            console.log(clickedElement.parentNode.nextSibling.lastChild.dataset.name)
            } else {
                // Now count is 2 so add the selected card class and store the data value into guesss2
                guess2 = clickedElement.parentNode.nextSibling.lastChild.dataset.name
                clickedElement.classList.add('selected-card');
                console.log(clickedElement.parentNode.nextSibling.lastChild.dataset.name)
            } 
            // Check that the variables are not empty
            if (guess1 !== '' && guess2 !== '') {
                // Check that the data values match
                if (guess1 === guess2) {
                    // Call the match cards function
                    setTimeout(matchCards, timeout)
                    setTimeout(resetCards, timeout)
                } else {
                    setTimeout(resetCards, timeout)
                }
            }
        }
    })

    function matchCards() {
        // Get all selected cards 
        let selectedCards = document.querySelectorAll(".selected-card");
        // Loop over the array and add the match class to all cards
        for(let i = 0; i < 2; i++) {
            let card = document.querySelectorAll(".selected-card")[i];
            // Get the selected cards and apply match class to them
            card.classList.add('match');
            // Select all matched cards and store them into matchedCards collection
            let matchedCards = document.querySelectorAll('.match')
            // Check if the length is 12 & if the timer is > 0
            if (matchedCards.length == 12 && timerStart[sec] != 0) {
                // Stop the timer
                clearInterval(interval);
                // Show success
                alert('success')
            }
        }
    }

    function resetCards() {
        guess1 = '';
        guess2 = '';
        count = 0;

        // Get all selected cards 
        let selectedCards = document.querySelectorAll(".selected-card");
        // Remove selected-card class from the not maching cards
        selectedCards[0].classList.remove('selected-card');
        selectedCards[1].classList.remove('selected-card');
    }

}