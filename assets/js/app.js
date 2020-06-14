// Save username to local storage
// Select input field value and chevron icon
    const playerNameValue = document.getElementById('playerName');
    const ctaButton = document.getElementById('nameForward');
    ctaButton.addEventListener('click', savePlayerName);

function savePlayerName() {
    localStorage.setItem("playerName", playerNameValue.value);
    removeMainContent();
}

function removeMainContent() {
    document.querySelector('.main-container').remove();
}


