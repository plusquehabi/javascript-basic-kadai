const textBtn = document.getElementById('text-btn');

textBtn.addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('h1').innerText = 'ボタンをクリックしました';
    }, 2000);
});