const siang = document.querySelector('.satu');
const malam = document.querySelector('.dua');
const darks = document.querySelector('.dark');
const lights = document.querySelector('.light');
const container = document.querySelector('.container');
const a = document.querySelector('.l1');
const b = document.querySelector('.l2');

siang.addEventListener('click', function () {
  container.style.backgroundColor = 'white';
  document.body.style.color = '#222';
  console.log('ok');
  container.classList.remove('containersatu');
  a.classList.remove('warna');
  b.classList.remove('warna');
});
malam.addEventListener('click', function () {
  container.style.backgroundColor = '#222';
  document.body.style.color = 'white';
  console.log('ok');
  darks.style.backgroundColor = 'white';
  lights.style.backgroundColor = 'white';
  container.classList.add('containersatu');
  a.classList.add('warna');
  b.classList.add('warna');
});

// skill
const html = document.querySelector('#html');
const awalhtml = document.querySelector('.awalhtml');
const akhirhtml = document.querySelector('.akhirhtml');

awalhtml.innerHTML = html.min;
akhirhtml.innerHTML = html.value;
html.addEventListener('input', function () {
  akhirhtml.innerHTML = html.value;
});
const css = document.querySelector('#css');
const awalcss = document.querySelector('.awalcss');
const akhircss = document.querySelector('.akhircss');

awalcss.innerHTML = css.min;
akhircss.innerHTML = css.value;
css.addEventListener('input', function () {
  akhircss.innerHTML = css.value;
});
const js = document.querySelector('#js');
const awaljs = document.querySelector('.awaljs');
const akhirjs = document.querySelector('.akhirjs');

awaljs.innerHTML = js.min;
akhirjs.innerHTML = js.value;
js.addEventListener('input', function () {
  akhirjs.innerHTML = js.value;
});
