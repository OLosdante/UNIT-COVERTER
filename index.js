const px = document.getElementById('px');
const em = document.getElementById('em');
const value = document.getElementById('value');
const pxBtn = document.getElementById('px-btn');
const emBtn = document.getElementById('em-btn');
const resetBtn = document.getElementById('reset-btn');


pxBtn.addEventListener('click', function() {
    const pxValue = px.value / 16;
    value.innerText = "value: " + pxValue + ' em';
})


emBtn.addEventListener('click', function() {
    const emValue = em.value * 16;
    value.innerText = "value: " + emValue + ' px';
})


resetBtn.addEventListener('click', function() { 
    px.value = '';
    em.value = '';
    value.innerText = 'value:';
})