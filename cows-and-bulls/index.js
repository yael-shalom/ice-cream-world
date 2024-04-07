let i = 0;
let row = 0;
const colors = ["lightyellow", "#d6fbef", "lightblue", "rgb(195 180 222)", "lightpink", "lightgray"];
let userColors = {};
const randColors = [];
const message = document.getElementById("message");
const con = document.getElementsByClassName("con");
const points = document.getElementsByClassName("points");

function randomColors() {
    while (randColors.length < 4) {
        let rand = Math.floor(Math.random() * colors.length);
        if (!randColors.includes(colors[rand]))
            randColors.push(colors[rand]);
    }
    // console.log(randColors);
}

function clickColor(event) {
    message.style.visibility = "hidden";
    event.currentTarget.style.backgroundColor = colors[i];
    userColors[event.currentTarget.id] = colors[i];
    i = (i + 1) % colors.length;
    if (isAllChecked()) {
        points[row].addEventListener("click", clickPoints);
        points[row].style.cursor = "pointer";
    }
}

function isAllChecked() {
    return Object.values(userColors).filter(v => v != "").length === 4;
}

function clickPoints(event) {
    if (isAllChecked()) {
        const valid = isValid();
        if (valid) {
            event.currentTarget.style.opacity = '1';
            check(event);
            allow();
            removeClick();
            userColors = {};
            addKeys();
        }
        else {
            message.textContent = "change colors you chose twice";
            message.style.visibility = "visible";
        }
    }
    else
        message.textContent = "you didn't choose all";
}

function isValid() {
    const value = Object.values(userColors);
    for (let j = 0; j < value.length; j++) {
        if (containsTwice(value, value[j]) > 1)
            return false;
    }
    return true;
}

function check(event) {
    const sumPoints = event.currentTarget.children;
    const v = Object.values(userColors);
    let cB = 0, cP = 0;
    // console.log(v);
    // console.log(randColors);
    for (let j = 0; j < v.length; j++) {
        if (randColors.includes(v[j])) {
            if (v[j] === randColors[j]) {
                cB++;
            }
            else {
                cP++;
            }
        }

    }
    for (let k = 0; k < cB; k++) {
        sumPoints[k].style.backgroundColor = "black";
    }
    for (let k = cB; k < cB + cP; k++) {
        sumPoints[k].style.backgroundColor = "white";
        sumPoints[k].style.borderRadius = "100%";
        sumPoints[k].style.border = "1px solid #e7607a";
    }
    if (cB === 4) {
        open("./win.html");
    }
}

function containsTwice(arr, v) {
    let c = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === v)
            c++;
    }
    return c;
}

function allow() {
    const element = con[row + 1].children;
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("click", clickColor);
        element[i].id = `color${i}`;
    }
    row = row + 1;
}

function removeClick() {
    const element = con[row - 1].children;
    for (let i = 0; i < element.length; i++) {
        element[i].removeEventListener("click", clickColor);
    }
    points[row - 1].removeEventListener("click", clickPoints);
}

function addKeys() {
    for (let j = 0; j < randColors.length; j++) {
        userColors[`color${j}`] = "";
    }
}

onload = () => {
    randomColors();
    addKeys();
    const element = con[row].children;
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("click", clickColor);
        element[i].id = `color${i}`;
    }
    points[row].addEventListener("click", clickPoints);
}