// products' images arrays
const cones = ['cone8', 'cone9', 'cone10', 'cone11'];
const boys = ['child1', 'child2', 'child3', 'child4', 'child5', 'child6', 'child7', 'child8', 'child9', 'child10', 'child12', 'child13'];
const balls = ['brown', 'lightblue', 'pink', 'purple', 'yellow'];
const decorations = ['almonds', 'beige-nuts', 'blueberries', 'brown-nuts', 'candies', 'concours', 'green-almonds', 'leaf', 'strawberries'];

//ice cream creation
let randomIceCreamArray = [];
let createdIceCream = [];
let iceCreamCost = { 'cone': 0, 'ball': 0, 'decoration': 0 };
let intervalsArray = [];

//ice cream products elements
const coneElements = document.querySelector('.cone-elements').children[1];
const ballElements = document.querySelector('.ball-elements').children[1];
const decorationElements = document.querySelector('.decoration-elements').children[1];

// more elements
const nav = document.querySelector('.nav-list');
const menu = document.querySelector('.container1');
const moneyEl = document.querySelector('.money');

//the win model
let level = 1;
let bestScore = 0, countGame = 0, countWin = 0, precentofWin = "0%";
let flag1 = 0;
let hasIceCream = false;

// game/win details
let iceCreamAmount = 0; // כמה גלידות הכין בסה"כ בשלב זה
let missedIceCream = 0; // כמה גלידות פספס
let levelWin = 1; // גביעי ניצחון
let sumSalary = 0;
let points = 0;

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
let firstTime = true;

//success audio
let coins = document.querySelector('#many-coins');

//timer interval
// let interval;

//הפעלת אנימציית חץ
let iconStart = document.querySelector('.iconStart');
// קביעת הטיימר להפעלת האנימציה כל 500 מילישניות (חצי שנייה)
let intervalId = setInterval(toggleBlink, 500);

function rand(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from)
}

init();

//פונקציה של כל האירועי לחיצה
function initEvents() {
  //כפתור לתחילת המשחק
  document.getElementById('startGame').addEventListener('click', play);
  //כפתור לחידוש המשחק
  document.getElementById('restartGame').addEventListener('click', play); // TODO: check if need
  //שולח לפונקצית פתיחת ההוראות במודל
  document.getElementById('myBtn').addEventListener('click', modall);

  //שולח לפונקצית סגירת ההוראות
  document.getElementsByClassName('close')[0].addEventListener('click', closeModal);
  //שולח לפונקצית סגירת מודל הסיום
  document.getElementsByClassName('closeFinish')[0].addEventListener('click', closeFinish);

  document.getElementById('backgroundMus').firstElementChild.addEventListener('click', (ev) => music(ev));

  document.getElementById('sounds').addEventListener('click', music1);

  document.getElementsByClassName('dropbtn')[0].addEventListener('click', definition);
}

//open elements functions
function openDivElements(event) {
  if (!hasIceCream)//while didn't start the game
    return;
  let x = event.currentTarget.parentElement.children[1];
  if (x.classList.contains('none')) {
    x.classList.remove('none');
    x.classList.add('flex-col');
  }
  else {
    //close divs elements
    x.classList.add('none');
    x.classList.remove('flex-col');
  }
}


// הגרלת גלידה אחת והחזרתה
function randIceCream() {
  const randomIceCream = {};
  randomIceCream.cone = cones[rand(0, cones.length - 1)];
  const ballsAmount = rand(1, 3);
  randomIceCream.ball = [];
  for (let i = 0; i < ballsAmount; i++) {
    randomIceCream.ball.push(balls[rand(0, balls.length - 1)]);
  }
  randomIceCream.decoration = decorations[rand(0, decorations.length - 1)];
  return randomIceCream;
}

function initProductsMenu() {
  //#region cones
  for (let i = 0; i < cones.length; i++) {
    img = document.createElement('img');
    img.src = `./assets/images/cones/icons/${cones[i]}.png`;
    img.classList.add('elements-images');
    img.id = cones[i];
    img.addEventListener('click', addItem);
    coneElements.appendChild(img);
  }
  coneElements.firstChild.classList.add('border-radius-top');
  coneElements.lastChild.classList.add('border-radius-bottom');
  //#endregion

  //#region balls
  for (let i = 0; i < balls.length; i++) {
    img = document.createElement('img');
    img.src = `./assets/images/balls/icons/${balls[i]}.png`;
    img.classList.add('elements-images');
    img.id = balls[i];
    img.addEventListener('click', addItem);
    ballElements.appendChild(img);
  }
  ballElements.firstChild.classList.add('border-radius-top');
  ballElements.lastChild.classList.add('border-radius-bottom');
  //#endregion

  // #region decorations
  for (let i = 0; i < decorations.length; i++) {
    img = document.createElement('img');
    img.src = `./assets/images/decorations/icons/${decorations[i]}.png`;
    img.classList.add('elements-images');
    img.id = decorations[i];
    img.addEventListener('click', addItem);
    decorationElements.appendChild(img);
  }

  decorationElements.firstChild.classList.add('border-radius-top');
  decorationElements.lastChild.classList.add('border-radius-bottom');
  //#endregion
}

function init() {
  initEvents();

  menue(); // TODO: check function

  //הכנסת האלמנטים לתוך ה-דיבים שלהם
  initProductsMenu();
}

//#region menu & modal

function music(ev) {
  const audio = document.getElementById('backgroundMusic');
  const element = ev.target.parentElement;
  if (element.classList.contains('off')) {
    element.classList.remove('off');
    element.classList.add('on');
    audio.currentTime = 0;
    audio.play();
  }
  else {
    element.classList.remove('on');
    element.classList.add('off');
    audio.pause();
  }
}

function music1() {
  flag1++;
}

function menue() {
  menu.classList.toggle("change");
  nav.classList.toggle("hidden");
}

function closeModal1() {
  const modal2 = document.getElementById("myModal1");
  modal2.style.display = "none";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function closeFinish() {
  const modal = document.getElementById("nextLevel-content");
  modal.style.display = "none";
  document.querySelector('.win-page').style.display = 'none';
}

// When the user clicks on the button, open the modal
function modall() {
  // Get the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function definition() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function toggleBlink() {
  //אנימציית חץ
  if (iconStart.style.opacity === '1') {
    iconStart.style.opacity = '0';
  } else {
    iconStart.style.opacity = '1';
  }
}

//#endregion

function initLevel() {
  clearAll();
  for (let i = 0; i < level; i++) {
    randomIceCreamArray[i] = randIceCream();
    setTimeout(enterPerson, 1000, i);
  }
}

// TODO: check
function startTimer(index) {
  const personId = index + 1;
  clearInterval(intervalsArray[index]);
  let i = 0;
  if (i == 0) {
    i = 1;
    const elem = document.getElementsByClassName("timer")[index];
    let height = 1;
    intervalsArray[index] = setInterval(frame, 15 / 100 * 1000);

    function frame() {
      if (height >= 100) {
        clearInterval(intervalsArray[index]);
        i = 0;
        if ((flag1) % 2 == 1) {
          const audio1 = document.querySelector('#sadBoy');
          audio1.currentTime = 0;
          audio1.play();
        }
        missedIceCream++;
        document.querySelector(`.person${personId}`).classList.add(`out${personId}`);
        document.querySelector(`.ice-cream-container${personId}`).classList.add(`out${personId}`);
        document.querySelector(`.timer-container${personId}`).classList.add(`out${personId}`);
        // setTimeout(throwToGarbage, 500);
        closeDivElements();
        setTimeout(() => {deleteIceCream(index); showData(index); }, 3000);// updateCreatedIceCreamCost(); 
      }
      else {
        height++;
        if (elem && elem.style)
          elem.style.height = height + "%";
      }
    }
  }
}


//פונקציה המזמנת את ההזמנה הבאה לביצוע
function play() {
  hasIceCream = true;

  initLevel();

  iconStart.classList.remove('on');
  iconStart.remove('on');

  //start the game
  menu.addEventListener('click', menue);
}

function showPerson(index) {
  const personId = index + 1;

  // show ice cream
  const iceContainer = document.createElement('div');
  iceContainer.classList.add(`ice-cream-container${personId}`);

  // rand boy image
  const boyId = rand(0, boys.length - 1);
  const person = document.createElement('img');
  person.src = `./assets/images/children/${boys[boyId]}.png`;
  person.classList.add(`person${personId}`);

  // timer
  timerContainer = document.createElement('div');
  timerContainer.classList.add(`timer-container${personId}`);
  timer = document.createElement('div');
  timer.classList.add('timer');
  timerContainer.appendChild(timer);

  // add person and timer to flex-row
  flexRowContainer = document.createElement('div');
  flexRowContainer.classList.add('flex-row');
  flexRowContainer.appendChild(timerContainer);
  flexRowContainer.appendChild(person);

  // add boy & ice-cream to container
  const containPerson = document.querySelector(`.contain-person${personId}`);
  containPerson.appendChild(iceContainer);
  containPerson.appendChild(flexRowContainer);

  startTimer(index);
}

//add new random ice cream to make
function showIceCream(index) {
  const personId = index + 1;
  const container = document.querySelector(`.ice-cream-container${personId}`);
  let zIndex = 0;

  // יצירת אלמנט הגביע של האדם
  const cone = document.createElement('img');
  cone.src = `./assets/images/cones/${randomIceCreamArray[index].cone}.png`;
  cone.classList.add('cone');
  cone.style.zIndex = zIndex++;
  container.appendChild(cone);

  // יצירת הכדורים
  for (let i = 0; i < randomIceCreamArray[index].ball.length; i++) {
    let ball = document.createElement('img');
    ball.src = `./assets/images/balls/${randomIceCreamArray[index].ball[i]}.png`;
    ball.style.zIndex = zIndex++;
    container.appendChild(ball);
  }

  // יצירת הקישוט
  let decoration = document.createElement('img');
  decoration.classList.add('decoration');
  decoration.src = `./assets/images/decorations/${randomIceCreamArray[index].decoration}.png`;
  decoration.style.zIndex = zIndex;
  container.appendChild(decoration);
}

// כניסת אדם חדש + גלידה
function enterPerson(index) {
  // הגרלת והצגת אדם חדש
  showPerson(index);

  // הצגת הגלידה של האדם שכבר הוגרלה
  showIceCream(index);
}

function clearCreatedIceCream() {
  // createdItem = [];
  createdIceCream = [];
  iceCreamCost = { cone: 0, ball: 0, decoration: 0 };
  document.querySelector('.created-container').innerHTML = "";
}

function updateCreatedIceCreamCost() {
  //sum and update user points
  const points = calculatePoints();
  lessPoints();
  sumSalary = Math.max(sumSalary - points, 0);
  moneyEl.textContent = `YOUR SALARY: ${Math.max(sumSalary, 0)}`;
}

function throwToGarbage() {
  updateCreatedIceCreamCost();
  clearCreatedIceCream();
}


function addWin() {
  //change the cone color
  if (levelWin % level === 0) {
    document.querySelector(`#coneWin${levelWin / level}-elements`).src = './assets/images/icons/coneWin1.png';
  }
  levelWin++;
}

function addItem(event) {
  let zIndex = 0;
  createdIceCream.push(event.currentTarget.id);
  //category of item
  const typeOfImg = event.currentTarget.parentElement.parentElement.classList[1];
  const type = typeOfImg.substring(0, typeOfImg.indexOf('-'));
  const createdItem = document.querySelector('.created-container');
  //create the item img
  const img = document.createElement('img');
  img.src = `./assets/images/${type}s/${event.currentTarget.id}.png`;
  img.style.zIndex = zIndex++;
  if (decorations.includes(event.currentTarget.id)) {
    img.classList.add('built-decoration');
    iceCreamCost.decoration += 2;//add cost
  }
  else
    img.classList.add('built-ice-cream')
  if (cones.includes(event.currentTarget.id)) {
    img.classList.add('cone');
    iceCreamCost.cone += 1;//add cost
  }
  if (balls.includes(event.currentTarget.id)) {
    iceCreamCost.ball += 15;//add cost
  }
  createdItem.appendChild(img);
  if ((flag1) % 2 == 1) {
    //audio for adding
    const audio1 = document.querySelector('#add-item');
    audio1.currentTime = 0;
    audio1.play();
  }
  isRight();
}

function isRight() {
  let rightIndex = -1;
  let i;
  for (let k = 0; k < level; k++) {
    let flag = true;
    if (randomIceCreamArray[k].cone !== createdIceCream[0])
      flag = false;
    for (i = 0; i < randomIceCreamArray[k].ball.length; i++) {
      if (i - 1 > createdIceCream.length || randomIceCreamArray[k].ball[i] !== createdIceCream[i + 1]) {
        flag = false;// if it's not the same
      }
    }
    if (randomIceCreamArray[k].decoration !== createdIceCream[i + 1])
      flag = false;
    if (flag)
      rightIndex = k;
  }
  if (rightIndex !== -1) {
    //the accurate ice cream
    clearInterval(intervalsArray[rightIndex]);
    const points = calculatePoints();
    addWin();
    //out animation
    document.querySelector(`.person${rightIndex + 1}`).classList.add(`out${rightIndex + 1}`);
    document.querySelector(`.ice-cream-container${rightIndex + 1}`).classList.add(`out${rightIndex + 1}`);
    document.querySelector(`.timer-container${rightIndex + 1}`).classList.add(`out${rightIndex + 1}`);
    setTimeout(() => { deleteIceCream(rightIndex); showData(rightIndex); }, 3000);
    if ((flag1) % 2 == 1) {
      //coins audio
      setTimeout(() => { coins.currentTime = 0; coins.play(); }, 500)
      setTimeout(() => { coins.pause(); }, 2000)
    }
    sumSalary += points;
    setTimeout(clearCreatedIceCream, 500);
    closeDivElements();
    document.querySelector('.money').textContent = `YOUR SALARY: ${sumSalary}`;
    iceCreamAmount++;
    addPoints();
    //save the best score of user
    if (currentUser) {
      currentUser.bestScore = Math.max(currentUser.bestScore, sumSalary);
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
  }
}

function calculatePoints() {
  points = 0;
  points += iceCreamCost.cone;
  points += iceCreamCost.ball;
  points += iceCreamCost.decoration;
  return points;
}

function deleteIceCream(index) {
  const personId = index + 1;
  document.querySelector(`.contain-person${personId}`).innerHTML = "";
}

function closeDivElements() {
  divElement = document.querySelectorAll('.elements');
  for (let i = 0; i < divElement.length; i++) {
    if (divElement[i].classList.contains('flex-col')) {
      divElement[i].classList.add('none');
      divElement[i].classList.remove('flex-col');
    }
  }
}

function nextLevel() {
  const nextLevelM = document.querySelector('.nextLevel-content');
  nextLevelM.style.display = "block";
  document.querySelector('.win-page').style.display = 'block';
  const levelText = "Level: ",
    scoreText = "Score:",
    countOfIceText = "Amount of created ice creams: ",
    bestScoreText = "Best score:",
    countGameText = "Games played: "

    iceCreamAmount = level * 5 - missedIceCream;
  if (JSON.parse(localStorage.getItem('currentUser'))) {
    bestScore = Math.max(sumSalary, JSON.parse(localStorage.getItem('currentUser')).bestScore);
    countGame = currentUser.countGames++;
    if (missedIceCream === 0)
      countWin = JSON.parse(localStorage.getItem('currentUser')).countWins;
    countWin++;
    precentofWin = countWin / countGame * 100 + '%';

    const values = { 1: `${level}`, 2: `${sumSalary}`, 3: `${iceCreamAmount}`, 4: `${bestScore}`, 5: `${countGame}` }
    const titles = { 1: `${levelText}`, 2: `${scoreText}`, 3: `${countOfIceText}`, 4: `${bestScoreText}`, 5: `${countGameText}` }

    const titleOfWin = document.querySelector('.titleOfWin');
    const detailOfWin = document.querySelector('.datailOfWin');
    titleOfWin.innerHTML = "";
    detailOfWin.innerHTML = "";
    titleOfWin.style.display = "block";
    detailOfWin.style.display = "block";

    for (let i = 0; i < 5; i++) {

      const element1 = document.createElement('p')
      element1.classList.add('win-text');
      element1.innerHTML = titles[(i + 1)] + "   " + values[(i + 1)];
      titleOfWin.appendChild(element1);

    }
  }
  else {
    const values = { 1: `${level}`, 2: `${sumSalary}`, 3: `${iceCreamAmount}` }
    const titles = { 1: `${levelText}`, 2: `${scoreText}`, 3: `${countOfIceText}` }

    const titleOfWin = document.querySelector('.titleOfWin');
    const detailOfWin = document.querySelector('.datailOfWin');
    titleOfWin.innerHTML = "";
    detailOfWin.innerHTML = "";
    titleOfWin.style.display = "block";
    detailOfWin.style.display = "block";

    for (let i = 0; i < 3; i++) {
      const element1 = document.createElement('p')
      element1.classList.add('win-text');
      element1.innerHTML = titles[(i + 1)] + "   " + values[(i + 1)];
      titleOfWin.appendChild(element1);
    }

    const element1 = document.createElement('p')
    element1.classList.add('win-text');
    element1.classList.add('win-text-guest');
    element1.innerHTML = 'The system has no more data for you, you are guest user';
    titleOfWin.appendChild(element1);

  }


  if (level === 1 && firstTime) {
    btnExit = document.createElement('button');
    btnExit.textContent = 'exit';
    btnExit.classList.add('btn-exit');
    btnExit.addEventListener('click', exit);
    btnNextLevel = document.createElement('button');
    btnNextLevel.textContent = 'next level';
    btnNextLevel.classList.add('btn-next-level');
    btnNextLevel.addEventListener('click', nextLevelGame);
    nextLevelM.appendChild(btnExit);
    nextLevelM.appendChild(btnNextLevel);
    firstTime = false;
  }

  if (level === 3) {
    document.querySelector('.btn-next-level').textContent = 'replay';
  }

  if (level === 1) {
    document.querySelector('.btn-next-level').textContent = 'next level';
  }

  if (currentUser) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    const users = JSON.parse(localStorage.getItem('allUsers'));
    users[currentUser.username] = currentUser;
    localStorage.setItem('allUsers', JSON.stringify(users))
  }
  else {
    document.querySelector('.btn-next-level').style.top = '200px';
    document.querySelector('.btn-exit').style.top = '200px';
  }
}


function lessPoints() {
  //animation
  if (points > 0) {
    const scoreDiv = document.querySelector('.floating-text1');
    setTimeout(() => { scoreDiv.classList.remove('floating-text1'); }, 0);
    scoreDiv.textContent = `-${points}`
    setTimeout(() => { scoreDiv.classList.add('floating-text1'); }, 20);
  }

}

function addPoints() {
  //animation
  if (points > 0) {
    const scoreDiv = document.querySelector('.floating-text1');
    setTimeout(() => { scoreDiv.classList.remove('floating-text1'); }, 0);
    scoreDiv.textContent = `+${points}`
    setTimeout(() => { scoreDiv.classList.add('floating-text1'); }, 20);
  }
}

function clearData(index) {
  clearCreatedIceCream();
  deleteIceCream(index);
  closeDivElements();
}

function showData(index) {
  if ((iceCreamAmount + missedIceCream) >= 5 * level) {
    nextLevel();
    return;
  }
  startTimer(index);
  randomIceCreamArray[index] = randIceCream();
  // enterPerson(index);
  setTimeout(enterPerson, 1000, index);
}

function exit() {
  window.open('../menu.html', '_self');
}

function nextLevelGame() {
  closeFinish();
  if (level < 3)
    level++;
  else {
    level = 1;
  }
  play();
}

function clearAll() {
  randomIceCreamArray = [];
  randomIceCreamArray.length = 0;
  createdIceCream = [];
  iceCreamCost = { 'cone': 0, 'ball': 0, 'decoration': 0 };
  levelWin = 1;
  missedIceCream = 0;
  iceCreamAmount = 0;
  for (let i = 0; i < level; i++) {
    document.querySelector(`.contain-person${i + 1}`).innerHTML = "";
  }
  for (let i = 1; i <= 5; i++) {
    document.querySelector(`#coneWin${i}-elements`).src = './assets/images/icons/coneSilver1.png';
  }
}