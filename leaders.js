// leaders.js – Youth Leadership & WhatsApp Links

function formatWhatsApp(number) { // Normalize Kenyan numbers to international format for wa.me let n = number.replace(/\s+/g, ''); if (n.startsWith('0')) n = '254' + n.slice(1); if (n.startsWith('+')) n = n.slice(1); return https://wa.me/${n}; }

function renderLeaders() { const container = document.getElementById('page-content');

container.innerHTML = ` <div class="card"> <h3 class="title">Youth Leadership</h3> <p>Meet the leaders serving and guiding PCEA Center Youth.</p> </div>

<div class="card">
  <strong>Zachary Gikonyo</strong><br/>
  Chairperson<br/>
  <a href="${formatWhatsApp('+254 742 892647')}" target="_blank">Chat on WhatsApp</a>
</div>

<div class="card">
  <strong>Dalson Maina</strong><br/>
  Vice Chairperson<br/>
  <a href="${formatWhatsApp('0102 695422')}" target="_blank">Chat on WhatsApp</a>
</div>

<div class="card">
  <strong>Ian Gathagu</strong><br/>
  Secretary<br/>
  <a href="${formatWhatsApp('0718 357417')}" target="_blank">Chat on WhatsApp</a>
</div>

<div class="card">
  <strong>Lydia Wamuyu</strong><br/>
  Vice Secretary<br/>
  <a href="${formatWhatsApp('+254 110 867929')}" target="_blank">Chat on WhatsApp</a>
</div>

<div class="card">
  <strong>Winnie Maundu</strong><br/>
  Treasurer<br/>
  <a href="${formatWhatsApp('+254 713 285534')}" target="_blank">Chat on WhatsApp</a>
</div>

<div class="card">
  <h3 class="title">Official Channel</h3>
  <p>PCEA Center Youth Fellowship Channel</p>
  <a href="https://whatsapp.com/channel/0029VbAreot60eBWPwDZTl1p" target="_blank">Join WhatsApp Channel</a>
</div>

`; }
