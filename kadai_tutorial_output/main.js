// 変数の初期化
let untyped = '';
let typed = '';
let score = 0;

const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');

const textLists = [
    'Hello World', 'This is my App', 'How are you?',
    'Today is sunny', 'I love JavaScript!', 'Good morning',
    'I am Japanese', 'Let it be', 'Samurai',
    'Typing Game', 'Information Technology',
    'I want to be a programmer', 'What day is today?',
    'I want to build a web app', 'Nice to meet you',
    'Chrome Firefox Edge Safari', 'machine learning',
    'Brendan Eich', 'John Resig', 'React Vue Angular',
    'Netscape Communications', 'undefined null NaN',
    'Thank you very much', 'Google Apple Facebook Amazon',
    'ECMAScript', 'console.log', 'for while if switch',
    'var let const', 'Windows Mac Linux iOS Android',
    'programming'
];

// ①ランダムなテキストを表示する機能
const createText = () => {
    typed = ''; // 正タイプした文字列をクリア
    typedfield.textContent = typed;

    let random = Math.floor(Math.random() * textLists.length);

    untyped = textLists[random];
    untypedfield.textContent = untyped;
};

//createText();

// ②キー入力の判定ができる機能
const keyPress = e => {
    // 誤タイプ
    if(e.key !== untyped.substring(0,1)) {
        wrap.classList.add('mistyped');
        setTimeout(() => {
            wrap.classList.remove('mistyped');
        }, 100); // 背景色を0.1秒で戻す
        return; // 不一致の場合は処理を終了
    }

    // 正タイプ
    score++;
    wrap.classList.remove('mistyped');
    typed += untyped.substring(0,1);
    untyped = untyped.substring(1);
    typedfield.textContent = typed;
    untypedfield.textContent = untyped;

    // テキストがなくなったら新しいテキストを表示
    if(untyped === '') {
        createText();
    } 
};

// ③タイピングスキルのランクを判定する機能
const rankCheck = score => {

    let text = '';

    if(score < 100) {
        text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
    } else if(score < 200) {
        text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
    } else if(score < 300) {
        text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
    } else if(score >= 300) {
        text = `あなたのランクはSです。\nおめでとうございます!`;
    }

    return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
};

// ④ゲームを終了する機能
const gameOver = id => {
    clearInterval(id);

    const result = confirm(rankCheck(score));

    // OKボタンをクリックされたらリロードする
    if(result == true) {
        window.location.reload();
    }
};

// ⑤カウントダウンタイマーの機能
const timer = () => {
    let time = count.textContent;

    const id = setInterval(() => {
        time--;
        count.textContent = time;

        if (time <= 0) {
            gameOver(id);
        }
    }, 1000);
};

// キーボードのイベント処理
//document.addEventListener('keypress', keyPress);

// ゲームスタート時の処理
start.addEventListener('click', () => {
    timer();
    createText();
    start.style.visibility = 'hidden';
    document.addEventListener('keypress', keyPress);
});

untypedfield.textContent = 'Press Start.';