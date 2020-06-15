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

// rulesPage function generates all elements for the rules page 
function rulesPage() {
    welcomeText.remove();
    const rules = document.createElement('div')
    rules.setAttribute('class', 'rules')
    mainContent.appendChild(rules)
    rules.innerHTML = ``
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