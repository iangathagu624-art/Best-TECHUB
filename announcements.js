// announcements.js – Detailed Event Announcements

function renderAnnouncements() { const container = document.getElementById('page-content');

container.innerHTML = ` <div class="card"> <h3 class="title">Presbytery Convention</h3> <p><strong>Theme:</strong> United in Faith, Growing in Purpose</p> <p><strong>Description:</strong><br/> The Presbytery Convention brings together youths from different congregations for worship, teaching, leadership alignment, and fellowship. It is a time of spiritual renewal, sharing ideas, and strengthening unity within the presbytery. </p> <p><strong>Who Should Attend:</strong> All youth members, leaders, and invited guests.</p> <p><strong>Expected Impact:</strong> Spiritual growth, leadership empowerment, and unity.</p> </div>

<div class="card">
  <h3 class="title">Youth Rally</h3>
  <p><strong>Theme:</strong> Ignite the Fire</p>
  <p><strong>Description:</strong><br/>
  The Youth Rally is an energetic and inspirational gathering designed to ignite
  passion for Christ among the youth. It features praise and worship, spoken word,
  sermons, team activities, and testimonies aimed at reviving faith and purpose.
  </p>
  <p><strong>Activities:</strong> Worship sessions, group discussions, guest speakers.</p>
  <p><strong>Outcome:</strong> Renewed faith, motivation, and stronger youth bonds.</p>
</div>

`; }
