const html=document.querySelector('.html');
const awal=document.querySelector('.awal');
const akhir=document.querySelector('.akhir');

awal.innerHTML=html.min;
akhir.innerHTML=html.value;

html.addEventListener('input',function(){
    akhir.innerHTML=html.value;
})