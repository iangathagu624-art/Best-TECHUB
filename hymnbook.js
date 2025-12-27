// hymnbook.js – Hymnbook with Smart Search (search by any line)

const hymns = [ { title: "Amazing Grace", lyrics: Amazing grace how sweet the sound That saved a wretch like me I once was lost but now am found Was blind but now I see }, { title: "Blessed Assurance", lyrics: Blessed assurance Jesus is mine Oh what a foretaste of glory divine Heir of salvation purchase of God Born of His Spirit washed in His blood }, { title: "How Great Thou Art", lyrics: O Lord my God when I in awesome wonder Consider all the worlds Thy hands have made I see the stars I hear the rolling thunder } ];

function renderHymnbook() { const container = document.getElementById('page-content');

container.innerHTML = <div class="card"> <h3 class="title">Hymnbook</h3> <input type="text" id="hymnSearch" placeholder="Search hymn by any line..." style="width:100%;padding:10px;border-radius:8px;border:none;margin-bottom:10px;" /> <div id="hymnResults"></div> </div>;

const searchInput = document.getElementById('hymnSearch'); const results = document.getElementById('hymnResults');

function displayHymns(list) { results.innerHTML = ''; if (list.length === 0) { results.innerHTML = '<p>No hymn found.</p>'; return; }

list.forEach(hymn => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<strong>${hymn.title}</strong><pre>${hymn.lyrics}</pre>`;
  results.appendChild(card);
});

}

displayHymns(hymns);

searchInput.addEventListener('input', () => { const query = searchInput.value.toLowerCase(); const filtered = hymns.filter(hymn => hymn.title.toLowerCase().includes(query) || hymn.lyrics.toLowerCase().includes(query) ); displayHymns(filtered); }); } `
