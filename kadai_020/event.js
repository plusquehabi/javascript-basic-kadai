const textBtn = document.getElementById('text-btn');

textBtn.addEventListener('click', ()=> {
    document.querySelector('h1').innerText = 'ボタンをクリックしました';
});