// Variables for game state
let playerName = "";
let playerGender = "";
let playerCareer = "";
let cash = 0;
let energy = 100;
let week = 1;
let careerProgress = {
    singing: 0,
    acting: 0,
    influencer: 0
};

// Popup Start Logic
const popupStart = document.getElementById('popupStart');
const nextWeekBtn = document.getElementById('nextWeekBtn');
const playerNameInput = document.getElementById('playerName');
const genderSelect = document.getElementById('genderSelect');
const careerBtns = document.querySelectorAll('button[onclick^="selectFirstCareer"]');

// Career-related UI Elements
const careerDetails = document.getElementById('careerDetails');
const companiesTab = document.getElementById('companies');
const characterTab = document.getElementById('character');
const homeTab = document.getElementById('home');

// Stats and Info Elements
const currencyDisplay = document.querySelector('.currency');
const energyDisplay = document.querySelector('.energy');
const weekDisplay = document.querySelector('.week');

// Button and Tab Handling
const tabs = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Start the game and initialize character creation
function startGame() {
    popupStart.classList.add('active');
}

// Handle career selection and display career details
function selectFirstCareer(career) {
    playerCareer = career;
    switch (career) {
        case 'singing':
            careerProgress.singing = 5;
            break;
        case 'acting':
            careerProgress.acting = 5;
            break;
    }
    updateUI();
    closePopup();
}

// Close the character creation popup
function closePopup() {
    popupStart.classList.remove('active');
    showTab('home'); // Switch to the home tab after character creation
}

// Switch between tabs
function openTab(tabName) {
    tabs.forEach(tab => {
        if (tab.getAttribute('onclick').includes(tabName)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    tabContents.forEach(tab => {
        tab.classList.remove('active');
        if (tab.id === tabName) {
            tab.classList.add('active');
        }
    });
}

// Handle weekly progression
function nextWeek() {
    if (energy >= 10) {
        energy -= 10;
        week++;
        updateUI();
    } else {
        alert("You don't have enough energy for this week.");
    }
}

// Update the displayed stats and info
function updateUI() {
    // Update main stats
    currencyDisplay.textContent = `Cash: $${cash}`;
    energyDisplay.textContent = `Energy: ${energy}/100`;
    weekDisplay.textContent = `Week ${week}, 2024`;

    // Update career progress (example: displaying levels of careers)
    careerDetails.innerHTML = `
        <h3>Your Career</h3>
        <p><strong>Career:</strong> ${playerCareer.charAt(0).toUpperCase() + playerCareer.slice(1)}</p>
        <p><strong>Level:</strong> ${careerProgress[playerCareer]}</p>
    `;
}

// Simulate a job find
function findJob() {
    if (energy >= 10) {
        energy -= 10;
        const jobIncome = Math.floor(Math.random() * 1000) + 500; // Random income between $500 and $1500
        cash += jobIncome;
        alert(`You found a job! You earned $${jobIncome}`);
        updateUI();
    } else {
        alert("You don't have enough energy to find a job.");
    }
}

// View properties - placeholder for properties screen
function viewProperties() {
    alert("You don't own any properties yet!");
}

// Security Options - placeholder for security options
function viewSecurity() {
    alert("Security options are not yet available.");
}

// Charts & Media Stats - placeholder for media stats
function viewMediaStats() {
    alert("Media stats are not yet available.");
}

// View Awards & Events - placeholder for awards screen
function viewAwards() {
    alert("You haven't received any awards yet!");
}

// Level up traits (a simple placeholder function for now)
function levelTraits() {
    if (energy >= 15) {
        energy -= 15;
        alert("Your traits have been leveled up!");
        updateUI();
    } else {
        alert("You don't have enough energy to level up your traits.");
    }
}

// Take Lessons (for increasing career stats)
function takeLessons() {
    if (energy >= 20) {
        energy -= 20;
        if (playerCareer === 'singing') {
            careerProgress.singing += 1;
        } else if (playerCareer === 'acting') {
            careerProgress.acting += 1;
        }
        alert("You have taken lessons to improve your career!");
        updateUI();
    } else {
        alert("You don't have enough energy to take lessons.");
    }
}

// Career Actions (such as opening music career details, etc.)
function showMusicCareer() {
    alert("This is where the music career details will go.");
}

function showMovieCareer() {
    alert("This is where the movie career details will go.");
}

function showInfluencerCareer() {
    alert("This is where influencer career details will go.");
}

// Handle company management (start new company)
function startNewCompany() {
    if (cash >= 5000) {
        cash -= 5000;
        alert("You have started a new company!");
        updateUI();
    } else {
        alert("You don't have enough cash to start a company.");
    }
}

// View empire overview
function viewEmpire() {
    alert("You don't have any companies yet!");
}

// Display company details (example)
function companyDetails() {
    alert("Company details are not yet available.");
}

// Show character details (example)
function characterDetails() {
    alert("Character details are not yet available.");
}

// Add event listeners for the "Next Week" button and tab navigation
nextWeekBtn.addEventListener('click', nextWeek);

// Initialize the game on page load
document.addEventListener('DOMContentLoaded', () => {
    startGame();
});
