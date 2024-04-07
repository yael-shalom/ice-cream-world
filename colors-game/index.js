const scoreEl = document.getElementById('grade');
const ok = document.getElementById('ok');
const error = document.getElementById('error');
const bestScoreEl = document.getElementById('best-grade');

let colorsGame = { bestScore: 0, bestPlayer: '' };
let score = 0;

function checkStorage() {
    if (!localStorage.colorsGame || localStorage.colorsGame === 'undefined')
        localStorage.colorsGame = JSON.stringify(colorsGame);

    colorsGame = JSON.parse(localStorage.colorsGame);
    bestScoreEl.textContent = `BEST SCORE IS: ${colorsGame.bestScore}, 
    ${colorsGame.bestPlayer ? `for player: ${colorsGame.bestPlayer}` : 'no previous scores'}`;
}

function saveStorage() {
    localStorage.colorsGame = JSON.stringify(colorsGame);
}

function drawScreen() {
    const time = 1_000;
    const otherColor = 'var(--other-color)';
    const sameColor = 'var(--same-color)';

    const arr = document.querySelectorAll('[id^=sqr]');

    function colorHeader() {
        const text = document.querySelector('h1').innerText;
        let s = '';
        for (let i = 0; i < text.length; i += 2) {
            s += `<span style='color: ${sameColor}'>${text[i]}</span>`;
            if (i + 1 < text.length)
                s += `<span style='color: ${otherColor}'>${text[i + 1]}</span>`
        }
        document.querySelector('h1').innerHTML = s;
    }

    colorHeader();

    let prev = arr[0];
    let timeOut;

    let changeColor = () => {
        prev.style.backgroundColor = sameColor;
        let rand = Math.floor(Math.random() * 4);
        arr[rand].style.backgroundColor = otherColor;
        arr[rand].addEventListener('click', clickC);
        prev = arr[rand];
        timeOut = setTimeout(changeColor, time)
    };

    changeColor();


    scoreEl.innerHTML = `YOUR SCORE IS: ${score}`;

    function clickC(event) {
        if ((event.currentTarget.style.backgroundColor === otherColor)) {
            ok.play();
            score += 5;
        }
        else {
            score -= 5;
            error.play();
        }
        scoreEl.innerHTML = `YOUR SCORE IS: ${score}`;

        if (score > colorsGame.bestScore) {
            colorsGame.bestScore = score;
            colorsGame.bestPlayer = JSON.parse(localStorage.currentUser).username || 'guest';

            bestScoreEl.textContent = `BEST SCORE IS: ${colorsGame.bestScore}, 
        ${colorsGame.bestPlayer ? `for player: ${colorsGame.bestPlayer}` : 'no previous scores'}`;
        }

        clearTimeout(timeOut);
        changeColor();
    }
}