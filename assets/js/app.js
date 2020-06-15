// Get element selectors 
    const playerName = document.getElementById('playerName');
    const ctaButton = document.getElementById('nameForward');
    const mainContent = document.getElementById('mainContent');
    const welcomeText = document.querySelector('.lead');

//Event listeners
    ctaButton.addEventListener('click', savePlayerName);

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
    welcomeText.remove();
    const rules = document.createElement('div')
    rules.setAttribute('class', 'rules')
    mainContent.appendChild(rules)
    rules.innerHTML = `
    <div class="row">
        <div class="col-12 col-lg-6 text-center tom-nook">
            <img src="/assets/images/Tom_Nook.png" alt="" class='img-fluid'>
        </div>
        <div class="col-12 col-lg-4 text-center rules-display">
        <div class="rules-section">
            <p id="rulesText">Hello ${localStorage.getItem('playerName')}...</p>
        </div>
        <i class="fas fa-chevron-circle-right" id="nextRule"></i>
        </div>
    </div>
    `
}