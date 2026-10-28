// Replace photos/01.jpg through photos/06.jpg. Missing images show the illustrated placeholders.
const memories = [
  { location: 'Jellystone', title: 'Бүх зүйл эхэлсэн газар', caption: 'Замын хоёр талаар хамтдаа алхаж байсан тэр өдөр. Бидний түүхийн хамгийн эхний хуудас.', label: 'Our beginning', art: '', image: 'photos/01.jpg' },
  { location: 'New York', title: 'Хотын дээр, чамтай', caption: 'SUMMIT дээр хоёулаа mocktail уугаад сууж байсан үе. Тэр өндөрт ч миний хамгийн гоё харагдац нь чи байсан.', label: 'Above the city', art: 'city', image: 'photos/02.jpg' },
  { location: 'New York', title: 'Empire State эгшиглэсэн нь', caption: 'Brooklyn Bridge дээр чи чихэвчээрээ “Empire State” сонсоод алхаж байсан чинь одоо ч санаанд тод байна.', label: 'You, me & New York', art: 'bridge', image: 'photos/03.jpg' },
  { location: 'Cleveland', title: 'Ахиад нэг хот. Дахиад л бид.', caption: 'Хаашаа явснаас илүү чамтай л хамт байсан нь тэр мөчүүдийг улам тодотгож.', label: 'A little adventure', art: 'home', image: 'photos/04.jpg' },
  { location: 'Солонгос', title: 'Хамтдаа өнгөрүүлсэн үдэш', caption: 'Солонгост хүртэл хамтдаа шоуджээ. Чиний инээдтэй хамт тэр өдрүүд хамгийн гоё дурсамж болон үлдсэн.', label: 'Seoul, with you', art: 'night', image: 'photos/05.jpg' },
  { location: 'Монгол', title: 'Энгийн өдрүүдийн ид шид', caption: 'Хичээлээ тараад уулзах, цуг хоол идэх, кофе шопд эсвэл машинд суугаад элдвийг ярих. Чамтай байх л гоё.', label: 'Everyday kind of love', art: 'coffee', image: 'photos/06.jpg' },
];

const letter = [
  'Анх Монголд Exchange дээр уулзаж байхдаа чамд ийм захиа бичиж сууна гэж огт төсөөлөөгүй юм байна. Jellystone-д анх очоод замын хоёр талд хамтдаа алхаж байсан тэр өдрийг би одоо ч сайн санадаг. Тэр үед бид хоёр ингэж дотносоно гэж яаж мэдэх билээ.',
  'Би чамд анхны харцаар дурлаагүй ээ. Харин хамт ажиллаж, нэг гэрт амьдарч, өдөр бүр уулзсаар байгаад л нэг л мэдэхэд чи миний амьдралын хамгийн чухал хүн болчихсон. Цуг хог асгахаар гарах, усанд явах, дэлгүүр орох, сагс тоглох, эсвэл зүгээр л хажууд чинь суух хүртэл надад тийм гоё мөч болчихсон байж билээ.',
  '7 сарын 24, 25, 26-ны өдрүүдэд ажил ихтэй маш их ядраад, орондоо ороод шууд унтчих байх гэж бодсон ч нүдээ анихаар л зөвхөн чи бодогдоод... Бодохгүй байя гэх тусам улам бүр бодоод байж билээ. Тэгж их ядарсан хэрнээ зөвхөн чамайг л санаад байгаагаа анзаараад, би чамд үнэхээр сайн болсон гэдгээ ойлгосон. Тэгээд л 7 сарын 26-ны шөнө би өөртөө "Чамд хайртай юм байна" гэдгээ хүлээн зөвшөөрсөн юм.',
  'Энэ захиаг бүр аль 8 сараас л дотроо бодож бичээд эхэлсэн байсан шүү. Юу гэж хэлэхээ бодсоор байтал түүнээс хойш бид хоёрт их олон дурсамжууд нэмэгдчихжээ.',
  'New York-д SUMMIT дээр хоёулаа mocktail уугаад сууж байсан үе, Brooklyn Bridge дээр чи чихэвчээрээ “Empire State” сонсоод алхаж байсан чинь одоо ч санаанд тод байна. Хоёулаа New York, Cleveland-ээр аялж, Солонгосд хүртэл хамтдаа шоуджээ. Эргээд бодоход, хаашаа явснаас илүү чамтай л хамт байсан нь тэр мөчүүдийг улам тодотгож. Анх Jellystone-ы зам дээр алхаж байсан бид хоёр ингэж олон газар хамт явна гэж бас л бодоогүй шүү.',
  'Одоо харин Монголдоо ирээд, сургууль сургуульдаа яваад, өдөр тутмын амьдралдаа орчихсон байна. Хамт амьдардаг байсан шигээ өдөржин цуг байхгүй ч уулзах болгондоо чамтай байх ямар гоё байдгийг дахин дахин мэдэрдэг. Хажууд чинь суугаад, чамайг илээд, үнсээд л байж баймаар. Чамд хайртайгаа хамгийн их мэдэрдэг үе маань ерөөсөө л тэр мөчүүд.',
  'Чиний өөртөө итгэлтэй, хөгжилтэй, юманд чин сэтгэлээсээ ханддаг зан надад их таалагддаг. Бас тэр гайхалтай хөөрхөн инээмсэглэл чинь. Өглөө дөнгөж сэрчихээд байж байгаа чинь дэлхий дээрх хамгийн үзэсгэлэнтэй төрх, унтаж байхдаа хүртэл надад асар хөөрхөн харагддаг шүү. Бас чамаас нэг тийм гоё үнэр үнэртдэг дээ, үгээр хэлэхийн аргагүй. Хажууд чинь очихоор тэр үнэр чинь мэдрэгдээд л би өөрийн эрхгүй тайвширчихдаг. Чиний л дэргэд би үнэхээр өөрөөрөө байж чаддаг.',
  'Намайг гунигтай байгааг шууд анзаараад дэмжиж өгдөгт чинь би их баярладаг. Тэр бүр хэлдэггүй ч надад их дулаахан санагддаг шүү. Бас хааяа ойлголцохгүй үедээ бие биеийнхээ талаас бодож, ярилцаж чаддагт дуртай. Чамайг аргадахад аргадалтыг минь хүлээж аваад, буцаад эвлэрчихдэг тэр мөчүүдэд ч би дуртай.',
  'Би ийм зүйлд жаахан хуучинсаг хүн юм шиг байгаа юм. Чамд өөрийн гараар захиа бичээд, бид хоёрын хувьд утгатай нэг юм өгмөөр байсан юм.',
  'Энэ Pink Gold өнгийн зүүлтийг сонгохдоо чамд зохих болов уу гэж нэлээн бодсон. Үүн дээр бид хоёрын хамт амьдарч, дотноссон Jellystone-ийн координат байгаа. Харахаараа тэр газрыг, тэнд хамт байсан үеэ санаасай гэж хүссэн юм.',
  'Намайг “Чи зүүлт зүүдэггүй юм уу?” гэхэд чи “Нэг тайлчихвал зүүхээ мартчихдаг” гэж хэлж байсан даа. Тэрийг чинь би санадаг шүү. Байнга зүү гэж шаардахгүй ээ. Мартчихсан байвал би өөрөө зүүж өгч байя гээд бүр хоёрыг авчихсан (хха).',
  '7 сарын 26-наас хойш 100 өдрийн дараа, 11 сарын 3-нд чамаас найз охин минь болооч гэж асууя гэж бодсон юм. Ингээд тэр өдөр нь болчихжээ.',
  'Цаашдаа ч чамтай аялж, шинэ юм үзэж, хамтдаа олон дурсамжтай болмоор байна. Бас хичээлээ тараад уулзаж, цуг хоол идэж, кофе шопд эсвэл машинд суугаад элдвийг ярьдаг энгийн өдрүүдээ ч үргэлжлүүлмээр байна.',
  'Номи, би чамд хоёр хязгааргүйн их хайртай шүү.',
  'Миний анхны бас сүүлийн минь найз охин болооч?',
  'Хамгийн гайхалтай залуу Алдараагаас нь ♡',
];

const $ = (s) => document.querySelector(s);
const gate = $('#gate');
const album = $('#album');
$('#unlock-form').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const coordinate = name => Number(String(data.get(name)).trim().replace(',', '.'));
  if (coordinate('latitude') === 40.8575 && coordinate('longitude') === 81.5937) {
    gate.hidden = true; album.hidden = false;
    $('#gate-error').textContent = '';
    window.scrollTo(0, 0);
    $('#home').setAttribute('tabindex', '-1'); $('#home').focus({ preventScroll: true });
  } else {
    $('#gate-error').textContent = 'Арай өөр байна, хайраа. Зүүлтэн дээрх координатаа дахин хараарай. ♡';
  }
});
$('#hint-button').addEventListener('click', e => {
  const open = $('#hint').hidden;
  $('#hint').hidden = !open; e.currentTarget.setAttribute('aria-expanded', String(open));
  e.currentTarget.querySelector('span').textContent = open ? '−' : '＋';
});
$('#lock').addEventListener('click', () => {
  album.hidden = true; gate.hidden = false; $('#unlock-form').reset();
  history.replaceState(null, '', location.pathname + location.search);
  window.scrollTo(0, 0); $('[name="latitude"]').focus({ preventScroll: true });
});

function artwork(memory) {
  const art = document.createElement('div');
  art.className = 'photo-art ' + memory.art;
  const label = document.createElement('span'); label.className = 'placeholder-label'; label.textContent = memory.label;
  const tag = document.createElement('span'); tag.className = 'placeholder-tag'; tag.textContent = 'ЗУРГАА ЭНД НЭМНЭ ♡';
  art.append(label, tag);
  if (memory.image) {
    const img = document.createElement('img'); img.src = memory.image; img.alt = memory.title; img.loading = 'lazy';
    img.addEventListener('load', () => { label.hidden = true; tag.hidden = true; });
    img.addEventListener('error', () => img.remove()); art.append(img);
  }
  return art;
}
function render(filter = 'all') {
  const grid = $('#photo-grid'); grid.replaceChildren();
  memories.forEach((memory, index) => {
    if (filter !== 'all' && filter !== memory.location) return;
    const card = document.createElement('button'); card.className = 'photo-card'; card.setAttribute('aria-label', memory.title + ' — дэлгэрэнгүй');
    const meta = document.createElement('div'); meta.className = 'photo-meta';
    const place = document.createElement('span'); place.textContent = memory.location.toUpperCase();
    const number = document.createElement('span'); number.textContent = '0' + (index + 1) + ' →'; meta.append(place, number);
    const title = document.createElement('h3'); title.textContent = memory.title;
    const caption = document.createElement('p'); caption.textContent = memory.caption;
    card.append(artwork(memory), meta, title, caption);
    card.addEventListener('click', () => {
      $('#dialog-image').replaceChildren(artwork(memory)); $('#dialog-title').textContent = memory.title;
      $('#dialog-caption').textContent = memory.caption; $('#dialog-location').textContent = memory.location;
      $('#photo-dialog').setAttribute('aria-labelledby', 'dialog-title'); $('#photo-dialog').showModal();
    }); grid.append(card);
  });
}
render();
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
  render(button.dataset.filter);
}));
$('#close-dialog').addEventListener('click', () => $('#photo-dialog').close());
$('#photo-dialog').addEventListener('click', e => { if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.currentTarget.close(); } });
const more = document.createElement('div'); more.id = 'letter-more'; more.hidden = true;
letter.forEach((text, i) => {
  const paragraph = document.createElement('p'); paragraph.textContent = text;
  if (i === letter.length - 1) paragraph.className = 'signature';
  (i < 2 ? $('#letter-content') : more).append(paragraph);
});
$('#letter-content').append(more);
$('#expand-letter').addEventListener('click', e => {
  more.hidden = !more.hidden; e.currentTarget.setAttribute('aria-expanded', String(!more.hidden));
  e.currentTarget.replaceChildren(document.createTextNode(more.hidden ? 'Захиаг бүтнээр нь унших ' : 'Захиаг хураах '));
  const arrow = document.createElement('span'); arrow.textContent = more.hidden ? '↓' : '↑'; e.currentTarget.append(arrow);
  if (more.hidden) $('#letter').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});
$('#yes').addEventListener('click', e => {
  $('#yes-message').hidden = false; e.currentTarget.textContent = 'Чи + Би = ∞ ♡';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rect = e.currentTarget.getBoundingClientRect();
  for (let i = 0; i < 16; i++) {
    const heart = document.createElement('span'); heart.className = 'heart-pop'; heart.textContent = '♡'; heart.setAttribute('aria-hidden', 'true');
    heart.style.left = rect.left + Math.random() * rect.width + 'px'; heart.style.top = rect.top + 'px'; heart.style.animationDelay = Math.random() * .5 + 's';
    document.body.append(heart); setTimeout(() => heart.remove(), 3100);
  }
});

const heroPhoto = document.createElement('img');
heroPhoto.src = 'photos/cover.jpg'; heroPhoto.alt = 'Бид хоёрын хамгийн дуртай дурсамж'; heroPhoto.className = 'hero-photo';
heroPhoto.addEventListener('error', () => heroPhoto.remove());
document.querySelector('.illustration').append(heroPhoto);
