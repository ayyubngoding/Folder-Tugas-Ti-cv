

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
