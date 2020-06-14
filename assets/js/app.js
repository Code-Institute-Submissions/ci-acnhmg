// Get element selectors 
    const playerName = document.getElementById('playerName');
    const ctaButton = document.getElementById('nameForward');
    const mainContent = document.getElementById('mainContent');

//Event listeners
    ctaButton.addEventListener('click', savePlayerName);

// Clear main content div function
    function clearMainContent() {
        mainContent.innerHTML = '';
    }

function addRules() {
    const rules = document.createElement('div')
    rules.setAttribute('class', 'rules')
    rules.innerHTML = ''
    mainContent.appendChild(rules)
}

// Save player name to local storage function
    function savePlayerName() {
        localStorage.setItem("playerName", playerName.value);
        clearMainContent();
        addRules();
    }




