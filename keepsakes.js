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
const musicPanel = document.querySelector('#music-panel');
function stopMusic() {
  document.querySelector('#music-player').replaceChildren();
  musicPanel.hidden = true;
  musicButton.setAttribute('aria-expanded', 'false');
}
musicButton.addEventListener('click', () => {
  if (!musicPanel.hidden) { stopMusic(); return; }
  const frame = document.createElement('iframe');
  frame.title = 'Lana Del Rey — Video Games · YouTube тоглуулагч';
  frame.src = 'https://www.youtube-nocookie.com/embed/cE6wxDqdOV0?autoplay=1&playsinline=1';
  frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.allowFullscreen = true;
  document.querySelector('#music-player').append(frame);
  musicPanel.hidden = false; musicButton.setAttribute('aria-expanded', 'true');
});
document.querySelector('#close-music').addEventListener('click', () => { stopMusic(); musicButton.focus(); });
// Leaving the album also stops the external player.
document.querySelector('#lock').addEventListener('click', stopMusic);

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
