// main.js – App Navigation Logic

// Sections content templates const content = { home: <div class="card"> <h3 class="title">Fun Fact</h3> <p>Did you know? Some hymns were passed orally for generations before being written.</p> </div>,

events: <div class="card"> <h3 class="title">Upcoming Events</h3> <p>Presbytery Convention – Countdown loading...</p> <p>Youth Rally – Countdown loading...</p> </div>,

announcements: <div class="card"> <h3 class="title">Presbytery Convention</h3> <p>A gathering for fellowship, worship, and strategic youth alignment across the presbytery.</p> </div> <div class="card"> <h3 class="title">Youth Rally</h3> <p>An energetic event aimed at spiritual revival, unity, and youth empowerment.</p> </div>,

calendar: <div class="card"> <h3 class="title">Event Calendar</h3> <p>Highlighted dates show confirmed events.</p> </div>,

leaders: <div class="card"> <h3 class="title">Youth Leadership</h3> <p>Chairperson – Oversees youth vision and direction</p> <p><a href="https://wa.me/254700000000">Chat on WhatsApp</a></p> </div>,

hymnbook: <div class="card"> <h3 class="title">Hymnbook</h3> <p>Search hymns by title or any line.</p> </div> };

// Load content function loadPage(page) { document.getElementById('page-content').innerHTML = content[page]; }

// Attach events const buttons = document.querySelectorAll('.nav-btn'); const pages = ['home','events','announcements','calendar','leaders','hymnbook'];

buttons.forEach((btn, index) => { btn.addEventListener('click', () => loadPage(pages[index])); });

// Default page loadPage('home');
