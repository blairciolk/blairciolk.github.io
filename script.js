function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    document.getElementById('clock').textContent = timeString;
}

function updateDate() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const monthName = months[month];    
    const timeString = `${monthName} ${day}, ${year}`;
    
    document.getElementById('date').textContent = timeString;
}


// Initial call to display the clock immediately
updateClock();
updateDate();

// Update the clock every second
setInterval(updateClock, 1000);