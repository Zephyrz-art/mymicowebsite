/* filepath: c:\Users\campb\OneDrive\Pictures\Webpage\jutc-bus-schedule\src\assets\js\admin-scripts.js */
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

function updateStatus() {
    const parish = parishSelect.value;
    const community = communitySelect.value;
    const status = document.getElementById('status').value;
    const alerts = JSON.parse(localStorage.getItem('alerts')) || [];
    const timestamp = new Date().toLocaleString();

    if (parish && community && status) {
        alerts.push(`Bus in ${community}, ${parish} is ${status} (Updated on: ${timestamp})`);
        localStorage.setItem('alerts', JSON.stringify(alerts));
        alert('Status updated successfully!');
        displayAlerts();
    } else {
        alert('Please fill in all fields.');
    }
}

function displayAlerts() {
    const alertsList = document.getElementById('alertsList');
    const alerts = JSON.parse(localStorage.getItem('alerts')) || [];
    alertsList.innerHTML = alerts.map((alert, index) => `
        <li>
            ${alert} <button onclick="deleteAlert(${index})">Delete</button>
        </li>
    `).join('');
}

function deleteAlert(index) {
    const alerts = JSON.parse(localStorage.getItem('alerts')) || [];
    alerts.splice(index, 1);
    localStorage.setItem('alerts', JSON.stringify(alerts));
    displayAlerts();
}

document.addEventListener('DOMContentLoaded', displayAlerts);