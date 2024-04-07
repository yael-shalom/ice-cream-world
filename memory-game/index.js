const imagesSrc = ["1-fake", "1-real", "2-fake", "2-real", "3-fake", "3-real", "4-fake", "4-real", "5-fake", "5-real",
    "6-fake", "6-real", "7-fake", "7-real", "8-fake", "8-real", "9-fake", "9-real", "10-fake", "10-real",
    "11-fake", "11-real", "12-fake", "12-real", "13-fake", "13-real"];
let imagesLevel = [];
const cards = document.getElementsByClassName("flip-card-back");
const example = document.getElementById("example");
const win = document.getElementById("win");
const li = document.querySelectorAll("li");
let count = 0;
let countWinnings = 0;
let chosenCards = [];
let cardsAmount = 3;

onload = () => {
    for (let i = 0; i < li.length - 2; i++) {
        li[i].addEventListener("click", () => { cardsAmount = 3 * (i + 1); restart(); });
    }
    li[li.length - 2].addEventListener("click", () => { cardsAmount = imagesSrc.length / 2;  restart(); });
    li[li.length - 1].addEventListener("click", restart);
    startGame();
}


function restart() {
    chosenCards = [];
    countWinnings = 0;
    count = 0;
    imagesLevel = [];
    startGame();
}

function startGame() {
    let rand = randomNumbers(0, imagesSrc.length - cardsAmount * 2);
    if (rand % 2 === 1)
        rand++;
    imagesLevel = imagesSrc.slice(rand, rand + cardsAmount * 2);
    shuffle(imagesLevel);
    createCardsDivs();
    for (let i = 0; i < cards.length; i++) {
        let img = document.createElement("img");
        img.src = `./images/${imagesLevel[i]}.png`;
        img.id = imagesLevel[i];
        cards[i].appendChild(img);
    }


    
    for (let i = 0; i < li.length - 2; i++) {
        li[i].removeEventListener("click", () => { cardsAmount = 3 * (i + 1); imagesLevel = []; countWinnings = 0; startGame(); });
    }
    li[li.length - 2].removeEventListener("click", () => { cardsAmount = imagesSrc.length / 2; imagesLevel = []; countWinnings = 0; startGame(); });

}

function createCardsDivs() {
    let container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < cardsAmount * 2; i++) {
        let flipCard = document.createElement("div");
        flipCard.classList.add("flip-card");
        flipCard.addEventListener("click", clickCard);
        flipCard.id = i;
        container.appendChild(flipCard);

        let flipCardInner = document.createElement("div");
        flipCardInner.classList.add("flip-card-inner");
        flipCard.appendChild(flipCardInner);

        let flipCardFront = document.createElement("div");
        flipCardFront.classList.add("flip-card-front");
        flipCardInner.appendChild(flipCardFront);

        let flipCardBack = document.createElement("div");
        flipCardBack.classList.add("flip-card-back");
        flipCardInner.appendChild(flipCardBack);
    }
}

function clickCard(event) {
    if (count < 2 && !isValid(event)) {
        count++;
        event.currentTarget.classList.add('show');
        chosenCards.push(event.currentTarget.id);
        if (count === 2) {
            const match = isMatch();
            if (!match)
                setTimeout(closeCards, 1000);
        }
    }
}

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        const rand = randomNumbers(0, arr.length - 1);
        const temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }
}

function randomNumbers(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

function closeCards() {
    const first = document.getElementById(chosenCards[0]);
    const second = document.getElementById(chosenCards[1]);
    first.classList.remove('show');
    second.classList.remove('show');
    chosenCards = [];
    count = 0;
}

function isValid(event) {
    return chosenCards.includes(event.currentTarget.id);
}

function isMatch() {
    const first = document.getElementById(chosenCards[0]);
    const second = document.getElementById(chosenCards[1]);
    const f = first.firstChild.lastChild.firstChild.id;
    const s = second.firstChild.lastChild.firstChild.id;
    if (f.slice(0, f.indexOf("-")) === s.slice(0, s.indexOf("-"))) {
        setTimeout(() => {
            first.querySelector("img").classList.add("good");
            second.querySelector("img").classList.add("good");
        }, 500);
        first.removeEventListener("click", clickCard);
        second.removeEventListener("click", clickCard);
        chosenCards = [];
        count = 0;
        countWinnings++;
        if (countWinnings === imagesLevel.length / 2)
            setTimeout(() => {
                toggleExample(win);
            }, 2000);
        return true;
    }
    return false;
}

function toggleExample(target) {
    target.classList.toggle('hide')
}