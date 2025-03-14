// This file contains JavaScript code for interactive features of the website, including fetching bus schedule data and updating the UI dynamically.

document.addEventListener('DOMContentLoaded', function() {
    const scheduleContainer = document.getElementById('schedule-container');

    function fetchBusSchedule() {
        fetch('https://api.example.com/jutc-schedule') // Replace with the actual API endpoint
            .then(response => response.json())
            .then(data => {
                displaySchedule(data);
            })
            .catch(error => {
                console.error('Error fetching bus schedule:', error);
                scheduleContainer.innerHTML = '<p>Failed to load bus schedule. Please try again later.</p>';
            });
    }

    function displaySchedule(schedule) {
        scheduleContainer.innerHTML = ''; // Clear previous schedule
        schedule.forEach(route => {
            const routeElement = document.createElement('div');
            routeElement.classList.add('route');
            routeElement.innerHTML = `
                <h3>${route.name}</h3>
                <p>Arrival Times: ${route.arrivalTimes.join(', ')}</p>
            `;
            scheduleContainer.appendChild(routeElement);
        });
    }

    fetchBusSchedule();
});

/* filepath: c:\Users\campb\OneDrive\Pictures\Webpage\jutc-bus-schedule\src\assets\js\scripts.js */
const data = {
    "Kingston": {
        "Half-Way Tree": ["6:00 AM", "7:30 AM", "9:00 AM", "12:00 PM", "4:00 PM", "6:30 PM"],
        "Downtown": ["6:15 AM", "8:00 AM", "10:00 AM", "1:00 PM", "5:00 PM", "7:00 PM"]
    },
    "St. Andrew": {
        "Constant Spring": ["5:45 AM", "7:15 AM", "8:45 AM", "11:45 AM", "3:45 PM", "6:15 PM"],
        "Papine": ["6:30 AM", "8:30 AM", "10:30 AM", "1:30 PM", "5:30 PM"]
    },
    "St. Catherine": {
        "Spanish Town": ["5:00 AM", "7:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
        "Portmore": ["6:10 AM", "8:10 AM", "10:10 AM", "1:10 PM", "4:10 PM", "7:10 PM"]
    },
    "Hanover": {
        "Lucea": ["6:00 AM", "7:30 AM", "9:00 AM", "12:00 PM", "4:00 PM", "6:30 PM"],
        "Green Island": ["6:15 AM", "8:00 AM", "10:00 AM", "1:00 PM", "5:00 PM", "7:00 PM"]
    },
    "St. James": {
        "Montego Bay": ["5:45 AM", "7:15 AM", "8:45 AM", "11:45 AM", "3:45 PM", "6:15 PM"],
        "Falmouth": ["6:30 AM", "8:30 AM", "10:30 AM", "1:30 PM", "5:30 PM"]
    },
    "Westmoreland": {
        "Savanna-la-Mar": ["5:00 AM", "7:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
        "Negril": ["6:10 AM", "8:10 AM", "10:10 AM", "1:10 PM", "4:10 PM", "7:10 PM"]
    },
    "St. Ann": {
        "Ocho Rios": ["6:00 AM", "7:30 AM", "9:00 AM", "12:00 PM", "4:00 PM", "6:30 PM"],
        "Runaway Bay": ["6:15 AM", "8:00 AM", "10:00 AM", "1:00 PM", "5:00 PM", "7:00 PM"]
    },
    "St. Mary": {
        "Port Maria": ["5:45 AM", "7:15 AM", "8:45 AM", "11:45 AM", "3:45 PM", "6:15 PM"],
        "Annotto Bay": ["6:30 AM", "8:30 AM", "10:30 AM", "1:30 PM", "5:30 PM"]
    },
    "Portland": {
        "Port Antonio": ["5:00 AM", "7:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
        "Buff Bay": ["6:10 AM", "8:10 AM", "10:10 AM", "1:10 PM", "4:10 PM", "7:10 PM"]
    },
    "St. Thomas": {
        "Morant Bay": ["6:00 AM", "7:30 AM", "9:00 AM", "12:00 PM", "4:00 PM", "6:30 PM"],
        "Yallahs": ["6:15 AM", "8:00 AM", "10:00 AM", "1:00 PM", "5:00 PM", "7:00 PM"]
    },
    "Clarendon": {
        "May Pen": ["5:45 AM", "7:15 AM", "8:45 AM", "11:45 AM", "3:45 PM", "6:15 PM"],
        "Chapelton": ["6:30 AM", "8:30 AM", "10:30 AM", "1:30 PM", "5:30 PM"]
    },
    "Manchester": {
        "Mandeville": ["5:00 AM", "7:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
        "Christiana": ["6:10 AM", "8:10 AM", "10:10 AM", "1:10 PM", "4:10 PM", "7:10 PM"]
    },
    "St. Elizabeth": {
        "Black River": ["6:00 AM", "7:30 AM", "9:00 AM", "12:00 PM", "4:00 PM", "6:30 PM"],
        "Santa Cruz": ["6:15 AM", "8:00 AM", "10:00 AM", "1:00 PM", "5:00 PM", "7:00 PM"]
    },
    "Trelawny": {
        "Falmouth": ["5:45 AM", "7:15 AM", "8:45 AM", "11:45 AM", "3:45 PM", "6:15 PM"],
        "Clark's Town": ["6:30 AM", "8:30 AM", "10:30 AM", "1:30 PM", "5:30 PM"]
    },
};

const parishSelect = document.getElementById('parish');
const communitySelect = document.getElementById('community');

parishSelect.addEventListener('change', function() {
    const selectedParish = this.value;
    communitySelect.innerHTML = '<option value="">--Select Community--</option>';

    if (selectedParish && data[selectedParish]) {
        const communities = Object.keys(data[selectedParish]);
        communities.forEach(community => {
            const option = document.createElement('option');
            option.value = community;
            option.textContent = community;
            communitySelect.appendChild(option);
        });
    }
});

function showSchedule() {
    const parish = parishSelect.value;
    const community = communitySelect.value;
    const display = document.getElementById('scheduleDisplay');

    if (parish && community && data[parish] && data[parish][community]) {
        const times = data[parish][community];
        display.innerHTML = `
            <h3>Bus Schedule for ${community}, ${parish}</h3>
            <ul>
                ${times.map(time => `<li>${time}</li>`).join('')}
            </ul>
        `;
    } else {
        display.innerHTML = `<p>Please select a valid parish and community.</p>`;
    }
}

// Fetch and display alerts
function fetchAlerts() {
    const alertDisplay = document.getElementById('alertDisplay');
    const alerts = JSON.parse(localStorage.getItem('alerts')) || [];
    if (alerts.length > 0) {
        alertDisplay.innerHTML = `
            <h3>Bus Alerts</h3>
            <ul>
                ${alerts.map(alert => `<li>${alert}</li>`).join('')}
            </ul>
        `;
    } else {
        alertDisplay.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', fetchAlerts);