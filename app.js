// ══════════════════════════════════════════════
// POPULATE DROPDOWNS
// ══════════════════════════════════════════════
function populateDropdowns() {
  const suits = ['Major Arcana', 'Wands', 'Cups', 'Swords', 'Pentacles'];
  const grouped = {};
  suits.forEach(s => grouped[s] = []);
  CARDS.forEach(c => {
    const key = c.suit === 'Major' ? 'Major Arcana' : c.suit;
    grouped[key].push(c);
  });

  ['card1','card2','card3'].forEach(id => {
    const sel = document.getElementById(id);
    suits.forEach(suit => {
      const og = document.createElement('optgroup');
      og.label = suit;
      grouped[suit].forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        og.appendChild(opt);
      });
      sel.appendChild(og);
    });
  });
}

// ══════════════════════════════════════════════
// SCREEN NAVIGATION
// ══════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ══════════════════════════════════════════════
// STARS CANVAS
// ══════════════════════════════════════════════
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
let stars = [];
let animFrame;

function initStars() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({length: 50}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6 + 0.4,
    speed: Math.random() * 0.008 + 0.003,
    phase: Math.random() * Math.PI * 2,
  }));
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.phase += s.speed;
    const a = (Math.sin(s.phase) * 0.5 + 0.5) * 0.55;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(226,58,63,${a})`;
    ctx.fill();
  });
  animFrame = requestAnimationFrame(drawStars);
}

// ══════════════════════════════════════════════
// REVEAL FORTUNE
// ══════════════════════════════════════════════
function revealFortune() {
  const v1 = document.getElementById('card1').value;
  const v2 = document.getElementById('card2').value;
  const v3 = document.getElementById('card3').value;
  const err = document.getElementById('error-msg');

  if (!v1 || !v2 || !v3) {
    err.style.display = 'block';
    return;
  }
  err.style.display = 'none';

  const c1 = CARDS.find(c => c.id === v1);
  const c2 = CARDS.find(c => c.id === v2);
  const c3 = CARDS.find(c => c.id === v3);
  const data = [c1, c2, c3];

  data.forEach((card, i) => {
    document.getElementById(`symbol-${i}`).innerHTML = getCardIcon(card);
    document.getElementById(`cardname-${i}`).textContent = card.name;
    document.getElementById(`keyword-${i}`).textContent = card.keyword;
    document.getElementById(`reveal-${i}`).classList.remove('flipped');
  });

  document.getElementById('reading-past').textContent = c1.past;
  document.getElementById('reading-present').textContent = c2.present;
  document.getElementById('reading-future').textContent = c3.future;

  showScreen('screen-fortune');
  document.getElementById('reading-container').classList.remove('visible');

  initStars();
  cancelAnimationFrame(animFrame);
  drawStars();
  canvas.classList.add('visible');

  setTimeout(() => document.getElementById('reveal-0').classList.add('flipped'), 600);
  setTimeout(() => document.getElementById('reveal-1').classList.add('flipped'), 1300);
  setTimeout(() => document.getElementById('reveal-2').classList.add('flipped'), 2000);

  setTimeout(() => {
    document.getElementById('reading-container').classList.add('visible');
  }, 3200);
}

function resetReading() {
  ['card1','card2','card3'].forEach(id => document.getElementById(id).value = '');
  canvas.classList.remove('visible');
  cancelAnimationFrame(animFrame);
  showScreen('screen-select');
}

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════
window.addEventListener('resize', () => {
  if (canvas.classList.contains('visible')) initStars();
});

populateDropdowns();
