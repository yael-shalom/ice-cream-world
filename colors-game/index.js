
function drawScreen() {
    const time = 1_000;
    const otherColor = "var(--other-color)";
    const sameColor = "var(--same-color)";

    const arr = document.querySelectorAll('[id^=sqr]');

    function colorHeader() {
        const text = document.querySelector('h1').innerText;
        let s = '';
        for (let i = 0; i < text.length; i += 2) {
            s += `<span style="color: ${sameColor}">${text[i]}</span>`;
            if (i + 1 < text.length)
                s += `<span style="color: ${otherColor}">${text[i + 1]}</span>`
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
        arr[rand].addEventListener("click", clickC);
        prev = arr[rand];
        timeOut = setTimeout(changeColor, time)
    };

    changeColor();


    const grade = document.getElementById("grade");

    let n = 0;
    grade.innerHTML = `YOUR GRADE IS: ${n}`;

    const ok = document.getElementById("ok");
    const error = document.getElementById("error");
    function clickC(event) {
        if ((event.currentTarget.style.backgroundColor === otherColor)) {
            ok.play();
            n += 5;
        }
        else {
            n -= 5;
            error.play();
        }
        grade.innerHTML = `YOUR GRADE IS: ${n}`;
        clearTimeout(timeOut);
        changeColor();
    }
}