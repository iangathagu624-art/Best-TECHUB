// events.js – Live Event Countdowns

const events = [ { name: "Presbytery Convention", date: "2025-08-20T09:00:00" }, { name: "Youth Rally", date: "2025-09-14T10:00:00" } ];

function getCountdown(eventDate) { const now = new Date().getTime(); const target = new Date(eventDate).getTime(); const diff = target - now;

if (diff <= 0) return "Event ongoing or completed";

const days = Math.floor(diff / (1000 * 60 * 60 * 24)); const hours = Math.floor((diff / (1000 * 60 * 60)) % 24); const minutes = Math.floor((diff / (1000 * 60)) % 60);

return ${days} Days : ${hours} Hours : ${minutes} Minutes; }

function renderEvents() { const container = document.getElementById('page-content'); container.innerHTML = '<h3 class="title">Upcoming Events</h3>';

events.forEach(event => { const card = document.createElement('div'); card.className = 'card';

const countdown = document.createElement('p');
countdown.id = event.name;

card.innerHTML = `<strong>${event.name}</strong><br/>`;
card.appendChild(countdown);

container.appendChild(card);

setInterval(() => {
  countdown.textContent = getCountdown(event.date);
}, 60000);

countdown.textContent = getCountdown(event.date);

}); }
