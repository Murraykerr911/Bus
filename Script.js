document.addEventListener('DOMContentLoaded', () => {
    // Ensure the game starts properly when the page loads
    startGame(); 
    
    // Setup the tabs and button functionality
    setupTabs(); 
});

// Variables for managing the game state
let playerName = "";
let playerGender = "";
let playerCareer = "";
let week = 1;
let cash = 1000;  // Starting cash
let energy = 100; // Starting energy
let careerDetails = document.getElementById("careerDetails");
let popupStart = document.getElementById("popupStart");
let tabs = document.querySelectorAll('.tab-button');

// Career and company details
let companies = [];
let jobs = [
    { name: "Barista", salary: 300, energyCost: 10 },
    { name: "Waiter", salary: 350, energyCost: 15 },
    { name: "Freelancer", salary: 500, energyCost: 20 }
];

// Function to start the game
function startGame() {
    popupStart.classList.add('active'); // Show character creation popup
}

// Handle tab switching
function setupTabs() {
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabName = e.target.textContent.toLowerCase();
            openTab(tabName);
        });
    });
}

// Open and display the appropriate tab content
function openTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active'); // Hide all tab content
    });
    document.getElementById(tabName).classList.add('active'); // Show selected tab
}

// Handle character creation popup form
function createCharacter() {
    playerName = document.getElementById("playerName").value;
    playerGender = document.getElementById("genderSelect").value;
    selectFirstCareer(playerCareer); // Select career after character creation
    popupStart.classList.remove('active'); // Close the popup
    updateTopBar();
}

// Select the first career and apply its bonus
function selectFirstCareer(career) {
    playerCareer = career;
    if (career === 'singing') {
        cash += 500; // Example bonus for singing career
    } else if (career === 'acting') {
        cash += 600; // Example bonus for acting career
    }
    showCareerDetails();
}

// Display career details based on selected career
function showCareerDetails() {
    careerDetails.innerHTML = `<h3>Your Career: ${playerCareer}</h3><p>Boost: +5% Cash</p>`;
}

// Handle "Next Week" button functionality
document.getElementById("nextWeekBtn").addEventListener('click', () => {
    nextWeek();
});

// Skip to the next week
function nextWeek() {
    week++;
    energy = 100; // Reset energy at the start of each week
    cash += 1000; // Example income per week
    updateTopBar();
}

// Update the top bar with current cash, energy, and week
function updateTopBar() {
    document.querySelector('.top-bar .currency').textContent = `Cash: $${cash}`;
    document.querySelector('.top-bar .energy').textContent = `Energy: ${energy}/100`;
    document.querySelector('.top-bar .week').textContent = `Week ${week}, 2024`;
}

// Show details of music career
function showMusicCareer() {
    careerDetails.innerHTML = "<h3>Music Career</h3><p>Details about your music career.</p>";
}

// Show details of movie career
function showMovieCareer() {
    careerDetails.innerHTML = "<h3>Movie Career</h3><p>Details about your movie career.</p>";
}

// Show details of influencer and other careers
function showInfluencerCareer() {
    careerDetails.innerHTML = "<h3>Influencer & Other Careers</h3><p>Details about your influencer career.</p>";
}

// Start a new company
function startNewCompany() {
    let companyName = prompt("Enter company name:");
    if (companyName) {
        let newCompany = {
            name: companyName,
            revenue: 0,
            employees: 0,
            products: []
        };
        companies.push(newCompany);
        alert(`${companyName} has been started!`);
        viewEmpire();
    }
}

// View empire overview (all companies)
function viewEmpire() {
    let empireDetails = companies.map(company => {
        return `<p>Company: ${company.name}, Revenue: $${company.revenue}, Employees: ${company.employees}</p>`;
    }).join('');
    document.getElementById('companyDetails').innerHTML = empireDetails || "<p>No companies started yet.</p>";
}

// Level up character traits
function levelTraits() {
    alert("Leveling up character traits!");
    // Add code for leveling up traits here (e.g., improve singing, acting, etc.)
}

// Take lessons to improve skills
function takeLessons() {
    if (cash >= 200) {
        cash -= 200;
        alert("Taking lessons to improve skills!");
        // Add code to increase character skills here (e.g., singing, acting)
    } else {
        alert("Not enough cash to take lessons!");
    }
}

// Find a job and earn money
function findJob() {
    let jobChoice = prompt("Choose a job:\n1. Barista\n2. Waiter\n3. Freelancer");
    jobChoice = parseInt(jobChoice);
    if (jobChoice >= 1 && jobChoice <= 3) {
        let job = jobs[jobChoice - 1];
        if (energy >= job.energyCost) {
            energy -= job.energyCost;
            cash += job.salary;
            alert(`You worked as a ${job.name} and earned $${job.salary}!`);
            updateTopBar();
        } else {
            alert("Not enough energy to work!");
        }
    } else {
        alert("Invalid choice!");
    }
}

// View properties the player owns
function viewProperties() {
    alert("Viewing properties...");
    // Add code to list properties here
}

// View security options for character protection
function viewSecurity() {
    alert("Viewing security options...");
    // Add code to view security options here
}

// View media stats like followers, views, etc.
function viewMediaStats() {
    alert("Viewing media stats...");
    // Add code to view media stats here
}

// View awards and events that the character has won
function viewAwards() {
    alert("Viewing awards and events...");
    // Add code to view awards and events here
}
