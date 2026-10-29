const notes = [
  'Чиний л дэргэд би үнэхээр өөрөөрөө байж чаддаг.',
  'Зүгээр л хажууд чинь суух хүртэл надад хамгийн гоё мөч.',
  'Хаашаа явснаас илүү чамтай л хамт байсан нь хамгийн гоё.',
  'Чиний тэр гайхалтай хөөрхөн инээмсэглэлд би дуртай.',
  'Намайг гунигтайг анзаараад дэмжиж өгдөгт чинь баярлалаа.',
  'Номи, би чамд хоёр хязгааргүйн их хайртай шүү.',
];
const noteDialog = document.querySelector('#secret-dialog');
let noteIndex = 0;
function showNote(index) {
  noteIndex = (index + notes.length) % notes.length;
  document.querySelector('#secret-text').textContent = notes[noteIndex];
  document.querySelector('#note-number').textContent = `${noteIndex + 1} / ${notes.length}`;
}
document.querySelectorAll('[data-secret]').forEach(button => button.addEventListener('click', () => {
  showNote(Number(button.dataset.secret)); noteDialog.showModal();
}));
document.querySelector('#next-note').addEventListener('click', () => showNote(noteIndex + 1));
document.querySelector('#close-note').addEventListener('click', () => noteDialog.close());

const musicButton = document.querySelector('#music-toggle');
const audio = document.querySelector('#our-song');
const musicWidget = document.querySelector('.music-widget');
const musicStatus = document.querySelector('#music-status');
const seek = document.querySelector('#music-seek');
let startingMusic = false;
function syncMusic() {
  const playing = !audio.paused && !audio.ended && !audio.error;
  musicWidget.classList.toggle('is-playing', playing);
  musicButton.setAttribute('aria-pressed', String(playing));
  musicButton.setAttribute('aria-label', playing ? 'Video Games дууг түр зогсоох' : 'Video Games дууг тоглуулах');
  document.querySelector('#play-symbol').textContent = playing ? 'Ⅱ' : '▶︎';
}
function formatTime(value) {
  if (!Number.isFinite(value)) return '0:00';
  return `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
}
function updateProgress() {
  const ready = Number.isFinite(audio.duration) && audio.duration > 0;
  seek.disabled = !ready;
  seek.value = ready ? String(audio.currentTime / audio.duration * 100) : '0';
  document.querySelector('#music-time').textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
}
function stopMusic() { audio.pause(); syncMusic(); }
musicButton.addEventListener('click', async () => {
  if (startingMusic) return;
  if (!audio.paused) { stopMusic(); musicStatus.textContent = 'Түр зогсоосон ♡'; return; }
  startingMusic = true; musicButton.setAttribute('aria-busy', 'true');
  musicStatus.textContent = 'Дуугаа нээж байна…';
  try {
    if (audio.error) audio.load();
    await audio.play();
    musicStatus.textContent = 'Бидний дуу эгшиглэж байна ♡';
  } catch {
    musicStatus.textContent = 'Дууг одоогоор тоглуулах боломжгүй байна.';
  } finally {
    startingMusic = false; musicButton.removeAttribute('aria-busy'); syncMusic();
  }
});
for (const event of ['play', 'pause', 'ended', 'error']) audio.addEventListener(event, syncMusic);
audio.addEventListener('error', () => { musicStatus.textContent = 'Дууг одоогоор тоглуулах боломжгүй байна.'; });
for (const event of ['timeupdate', 'loadedmetadata', 'durationchange', 'emptied']) audio.addEventListener(event, updateProgress);
seek.addEventListener('input', () => {
  if (Number.isFinite(audio.duration) && audio.duration > 0) audio.currentTime = Number(seek.value) / 100 * audio.duration;
});
document.querySelector('#lock').addEventListener('click', () => { stopMusic(); musicStatus.textContent = 'Пянзан дээр дараад сонсоорой ♡'; });
syncMusic(); updateProgress();

let installPrompt;
const installDialog = document.querySelector('#install-dialog');
const installButton = document.querySelector('#install-now');
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault(); installPrompt = event; installButton.hidden = false;
});
document.querySelector('#install-help').addEventListener('click', () => installDialog.showModal());
document.querySelector('#close-install').addEventListener('click', () => installDialog.close());
installButton.addEventListener('click', async () => {
  if (!installPrompt) return;
  const prompt = installPrompt; installPrompt = null; installButton.hidden = true;
  try {
    await prompt.prompt();
    const result = await prompt.userChoice;
    if (result.outcome === 'accepted') installDialog.close();
  } catch { /* Manual browser instructions remain available. */ }
});
function hideInstalledButton() {
  document.querySelector('#install-help').hidden = true;
  installButton.hidden = true; installPrompt = null;
}
if (matchMedia('(display-mode: standalone)').matches || navigator.standalone) hideInstalledButton();
window.addEventListener('appinstalled', hideInstalledButton);
if ('serviceWorker' in navigator && (location.protocol === 'https:' || ['localhost', '127.0.0.1'].includes(location.hostname))) {
  navigator.serviceWorker.register('./sw.js').catch(() => { /* Online site remains usable. */ });
}
