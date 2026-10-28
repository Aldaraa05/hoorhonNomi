// Optimized photos are in photos/web/. Original uploads remain in photos/.
const memories = [
  {
    "location": "Өдөр бүр чамтай",
    "title": "Миний хамгийн дуртай бид хоёр",
    "caption": "Чиний л дэргэд би үнэхээр өөрөөрөө байж чаддаг.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/3658.webp"
  },
  {
    "location": "Өдөр бүр чамтай",
    "title": "Чиний хажууд л",
    "caption": "Хажууд чинь суугаад, чамайг илээд, үнсээд л байж баймаар.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/238.webp"
  },
  {
    "location": "New York",
    "title": "Чамтай хамт New York",
    "caption": "Хаашаа явснаас илүү чамтай л хамт байсан нь тэр мөчүүдийг улам тодотгож.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/3885.webp"
  },
  {
    "location": "New York",
    "title": "Хотын гэрэл, бид хоёр",
    "caption": "New York-д хамтдаа байсан тэр мөчүүд одоо ч санаанд тод байна.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/3886.webp"
  },
  {
    "location": "New York",
    "title": "Дэлхийн дээр чамтай",
    "caption": "Цаашдаа ч чамтай аялж, шинэ юм үзэж, хамтдаа олон дурсамжтай болмоор байна.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/3887.webp"
  },
  {
    "location": "Хөгжилтэй мөчүүд",
    "title": "Чиний инээмсэглэл",
    "caption": "Бас тэр гайхалтай хөөрхөн инээмсэглэл чинь.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/1464.webp"
  },
  {
    "location": "Өдөр бүр чамтай",
    "title": "Хамт явах зам",
    "caption": "Анх Jellystone-ы зам дээр алхаж байсан бид хоёр.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/1589.webp"
  },
  {
    "location": "Өдөр бүр чамтай",
    "title": "Жаахан ойрхон сууя",
    "caption": "Чамтай байх ямар гоё байдгийг дахин дахин мэдэрдэг.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/1844.webp"
  },
  {
    "location": "Өдөр бүр чамтай",
    "title": "Хамтдаа өнгөрүүлсэн өдөр",
    "caption": "Цуг хоол идэж, элдвийг ярьдаг энгийн өдрүүдээ үргэлжлүүлмээр байна.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/240.webp"
  },
  {
    "location": "Хөгжилтэй мөчүүд",
    "title": "Хөөрхөн дурсамж нэмэгдлээ",
    "caption": "Нэг л мэдэхэд чи миний амьдралын хамгийн чухал хүн болчихсон.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/286.webp"
  },
  {
    "location": "Хөгжилтэй мөчүүд",
    "title": "Хаана ч байсан хамт",
    "caption": "Хаашаа явснаас илүү чамтай байсан нь л хамгийн гоё.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/291.webp"
  },
  {
    "location": "Өдөр бүр чамтай",
    "title": "Зүгээр л хоёулаа",
    "caption": "Зүгээр л хажууд чинь суух хүртэл надад тийм гоё мөч.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/3186.webp"
  },
  {
    "location": "Өдөр бүр чамтай",
    "title": "Энгийн өдрийн ид шид",
    "caption": "Хичээлээ тараад уулзах, цуг хоол идэх. Чамтай байх л гоё.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/3586.webp"
  },
  {
    "location": "Хөгжилтэй мөчүүд",
    "title": "Бидний хөгжилтэй мөч",
    "caption": "Чиний хөгжилтэй, юманд чин сэтгэлээсээ ханддаг зан надад их таалагддаг.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/3719.webp"
  },
  {
    "location": "Өдөр бүр чамтай",
    "title": "Дэргэд чинь тайван",
    "caption": "Хажууд чинь очихоор би өөрийн эрхгүй тайвширчихдаг.",
    "label": "Чи + Би ♡",
    "art": "",
    "image": "photos/web/3867.webp"
  }
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
    const number = document.createElement('span'); number.textContent = String(index + 1).padStart(2, '0') + ' →'; meta.append(place, number);
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
document.querySelector('[data-filter=all] sup').textContent = String(memories.length).padStart(2, '0');
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
heroPhoto.src = 'photos/web/3658.webp'; heroPhoto.alt = 'Бид хоёрын хамгийн дуртай дурсамж'; heroPhoto.className = 'hero-photo';
heroPhoto.addEventListener('error', () => heroPhoto.remove());
document.querySelector('.illustration').append(heroPhoto);
