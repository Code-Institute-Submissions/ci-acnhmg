// Get element selectors 
const playerName = document.getElementById('playerName');
const nameButton = document.getElementById('nameForward');
const mainContent = document.getElementById('mainContent');
const welcomeText = document.querySelector('.welcome-text');

//Event listeners
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
        <div class="col-12 col-lg-6 text-center tom-nook">
            <img src="/assets/images/Tom_Nook.png" alt="" class='img-fluid'>
        </div>
        <div class="col-12 col-lg-4 text-center rules-display">
        <div class="rules-section">
            <p id="rulesText">Hello ${localStorage.getItem('playerName')}...</p>
        </div>
        <i class="fas fa-chevron-circle-right next-rule-glow" id="nextRule"></i>
        <p class="small-print">Click/tap on button to proceed</p>
        </div>
    </div>
    `
    // Assing nextRuleButton to the chevron icon
    const nextRuleButton = document.getElementById('nextRule');
    // Rules sequence functions
    nextRuleButton.addEventListener('click', function () {
        rulesText.innerText = "I shall now explain the rules of the game to you, yes yes...";
        nextRuleButton.classList.toggle('next-rule-glow');
        nextRuleButton.addEventListener('click', function () {
            rulesText.innerText = "It is very simple, find all card pairs before the timer runs out, yes yes...";
            nextRuleButton.classList.toggle('next-rule-glow');
            nextRuleButton.addEventListener('click', function () {
                rulesText.innerText = "If you succeed, you'll be brought to the next level";
                nextRuleButton.classList.toggle('next-rule-glow');
                nextRuleButton.addEventListener('click', function () {
                    rulesText.innerText = "And if you're not, you'll have to start from the start";
                    nextRuleButton.classList.toggle('next-rule-glow');
                })
            })
        })
    });
}