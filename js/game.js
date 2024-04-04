const cones = ['cone8', 'cone9', 'cone10', 'cone11'];
const boys = ['boy1', 'boy2', 'boy3', 'boy4', 'boy5'];
const balls = ['brown', 'lightblue', 'pink', 'purple', 'yellow'];
const decorations = ['almonds', 'bege-nuts', 'blueberries', 'brown-nuts', 'candies', 'concours', 'green-almonds', 'leaf', 'strawberries'];
let randomIceCream = {};
let iceCreamCost = { 'cone': 0, 'ball': 0, 'decoration': 0 };
let ballsAmount;
let zIndex = 0;
const coneElements = document.querySelector('.cone-elements').children[1];
const ballElements = document.querySelector('.ball-elements').children[1];
const decorationElements = document.querySelector('.decoration-elements').children[1];
let createdIceCream = [];
let iceCreamAmount = 0;
let levelWin = 1;
let countOfIce = 0, finalTime = 0, bestScore = 90, countGame = 2, countWin = 6, bestTime = 30, precentofWin = "100%";
let boyId = 0;
let missedIceCream = 0;

let level = 0;
let score = 0;
let currentScore = 0;
let flag1=false;
let hasIceCream = false;
let sumSalary = 0;
const coins = document.querySelector('#many-coins');
let interval;
let points = 0;



let iconStart = document.querySelector('.iconStart');
// קביעת הטיימר להפעלת האנימציה כל 500 מילישניות (חצי שנייה)
let intervalId = setInterval(toggleBlink, 500);


init();

//פונקציה של כל האירועי לחיצה
function init() {

  //כפתור לתחילת המשחק
  document.getElementById('startGame').addEventListener('click', () => play());
  //כפתור לחידוש המשחק
  document.getElementById('restartGame').addEventListener('click', () => replay());
  //שולח לפונקצית פתיחת ההוראות במודל
  document.getElementById('myBtn').addEventListener('click', () => modall());

  //שולח לפונקצית סגירת ההוראות
  document.getElementsByClassName('close')[0].addEventListener('click', () => closeModal());
  //שולח לפונקצית סגירת מודל הסיום
  document.getElementsByClassName('closeFinish')[0].addEventListener('click', () => closefinish());


    toggle = document.getElementById('backgroundMus').firstElementChild,
    toggle.addEventListener('click', (ev) => this.music(ev));
    toggle = document.getElementById('sounds').firstElementChild,
    toggle.addEventListener('click', () => this.music1());
    document.getElementById('sounds').addEventListener('click', () => music1());

  nav = document.getElementsByClassName('nav-list')[0];
  menu = document.getElementsByClassName('container1')[0];

  document.getElementsByClassName('dropbtn')[0].addEventListener('click', () => defenition());

  menue();

  //הכנסת האלמנטים לתוך ה-דיבים שלהם
  //cones
  for (let i = 0; i < cones.length; i++) {
    img = document.createElement('img');
    img.src = `../assets/images/cones/icons/${cones[i]}.png`;
    img.classList.add('elements-images');
    img.id = cones[i];
    img.addEventListener('click', addItem);
    coneElements.appendChild(img);
  }
  coneElements.firstChild.classList.add('border-radius-top');
  coneElements.lastChild.classList.add('border-radius-bottom');

  //balls
  for (let i = 0; i < balls.length; i++) {
    img = document.createElement('img');
    img.src = `../assets/images/balls/icons/${balls[i]}.png`;
    img.classList.add('elements-images');
    img.id = balls[i];
    img.addEventListener('click', addItem);
    ballElements.appendChild(img);
  }
  ballElements.firstChild.classList.add('border-radius-top');
  ballElements.lastChild.classList.add('border-radius-bottom');

  //decorations
  for (let i = 0; i < decorations.length; i++) {
    img = document.createElement('img');
    img.src = `../assets/images/decorations/icons/${decorations[i]}.png`;
    img.classList.add('elements-images');
    img.id = decorations[i];
    img.addEventListener('click', addItem);
    decorationElements.appendChild(img);
  }
  decorationElements.firstChild.classList.add('border-radius-top');
  decorationElements.lastChild.classList.add('border-radius-bottom');

}


function music(ev) {
  let audio = document.getElementById('backgroundMusic');
  let element = ev.target.parentElement;
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
  flag1 = !flag1


}
function menue() {
  menu.classList.toggle("change");
  nav.classList.toggle("hidden");
}

function closeModal1() {
  const modal2 = document.getElementById("myModal1");
  modal2.style.display = "none";

  // When the user clicks on <span> (x), close the modal
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function closefinish() {
  const modal = document.getElementById("nextLevel-content");
  modal.style.display = "none";
}


function closeAndStart() {
  const modal3 = document.getElementById("Div1");
  modal3.style.display = "none";
  this.sortPlayers();
}


function menue() {
  menu.classList.toggle("change");
  nav.classList.toggle("hidden");
}
// When the user clicks on the button, open the modal
function modall() {
  // Get the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function defenition() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function toggleBlink() {

  if (iconStart.style.opacity === '1') {
    iconStart.style.opacity = '0';
  } else {
    iconStart.style.opacity = '1';
  }
}




function replay() {
  location.reload();
  setInterval(randIceCream, 100000);
}

//פונקציה המזמנת את ההזמנה הבאה לביצוע
function play() {
  if (hasIceCream)
    return;
  setTimeout(randIceCream)
  clearInterval(intervalId);
  iconStart.classList.remove('on');
  iconStart.remove('on');
  startTimer();
  hasIceCream = true;
  // document.getElementById('startGame').removeEventListener('click', () => play());

  menu.addEventListener('click', () => menue());
}


//rand iceCream:
function randIceCream() {
  randomIceCream = {};
  randomIceCream['cone'] = cones[rand(0, cones.length - 1)];
  ballsAmount = rand(1, 3);
  randomIceCream['ball'] = [];
  for (let i = 0; i < ballsAmount; i++) {
    randomIceCream['ball'].push(balls[rand(0, balls.length - 1)]);
  }
  randomIceCream['decoration'] = decorations[rand(0, decorations.length - 1)];
  showIceCream();
  iceCreamCost = {'cone':0, 'ball':0, 'decoration':0};
}


//תכתבי תיעוד על זה כי לא ממש הבנתי מה זה
function showIceCream() {
  showPerson();
  const container = document.querySelector('.ice-cream-container');
  let cone = document.createElement('img');
  cone.src = `../assets/images/cones/${randomIceCream['cone']}.png`;
  cone.classList.add('cone');
  cone.style.zIndex = zIndex++;
  container.appendChild(cone);
  for (let i = 0; i < ballsAmount; i++) {
    let ball = document.createElement('img');
    ball.src = `../assets/images/balls/${randomIceCream['ball'][i]}.png`;
    ball.style.zIndex = zIndex++;
    container.appendChild(ball);
  }
  let decoration = document.createElement('img');
  decoration.classList.add('decoration')
  decoration.src = `../assets/images/decorations/${randomIceCream['decoration']}.png`;
  decoration.style.zIndex = zIndex;
  container.appendChild(decoration);
  zIndex = 0;
}


//open elements functions
function openDivElements(event) {
  if (!hasIceCream)
    return;
  let x = event.currentTarget.parentElement.children[1];
  if (x.classList.contains('none')) {
    x.classList.remove('none');
    x.classList.add('flex-col');
  }
  else {
    x.classList.add('none');
    x.classList.remove('flex-col');
  }
}

function throwToGarbage() {
  updateIceCreamCost();
  clearIceCream();
}

function clearIceCream()
{
  createdItem = [];
  createdIceCream = [];
  document.querySelector('.created-container').innerHTML = "";
  iceCreamCost = { 'cone': 0, 'ball': 0, 'decoration': 0 };
}

function updateIceCreamCost()
{
  points = 0;
  points += iceCreamCost['cone'];
  points += iceCreamCost['ball'];
  points += iceCreamCost['decoration'];
  lessPoints();
  sumSalary -= points;
  document.querySelector('.money').textContent = `YOUR SALARY: ${Math.max(sumSalary, 0)}`;
}

function addWin() {
  let imgWin = document.querySelector(`#coneWin${levelWin++}-elements`);
  imgWin.src = '../assets/images/icons/coneWin1.png';
}

function addItem(event) {
  createdIceCream.push(event.currentTarget.id);
  typeOfImg = event.currentTarget.parentElement.parentElement.classList[1];
  type = typeOfImg.substring(0, typeOfImg.indexOf('-'));
  createdItem = document.querySelector('.created-container');
  img = document.createElement('img');
  img.src = `../assets/images/${type}s/${event.currentTarget.id}.png`;
  img.style.zIndex = zIndex++;
  if (decorations.includes(event.currentTarget.id)) {
    img.classList.add('built-decoration');
    iceCreamCost['decoration'] += 2;
  }
  else
    img.classList.add('built-ice-cream')
  if (cones.includes(event.currentTarget.id)) {
    img.classList.add('cone');
    iceCreamCost['cone'] += 1;
  }
  createdItem.appendChild(img);
  if (balls.includes(event.currentTarget.id)) {
    iceCreamCost['ball'] += 15;
  }
  if(flag1)
 {
   audio1.document.querySelector('#add-item');
   audio1.currenTime = 0;
   audio1.play();}
  isRight();
}

function isRight() {
  let flag = true;
  if (randomIceCream['cone'] === createdIceCream[0]) {
    for (let i = 0; i < randomIceCream['ball'].length; i++) {
      if (i - 1 > createdIceCream.length || randomIceCream['ball'][i] !== createdIceCream[i + 1]) {
        flag = false;
      }
    }
  }

  if (flag)

    if (randomIceCream['decoration'] === createdIceCream[createdIceCream.length - 1]) {
      clearInterval(interval);
      // document.querySelector('.person').src = '../assets/images/boys/happyboy1.png';
      document.querySelector('.person').classList.add('out');
      document.querySelector('.ice-cream-container').classList.add('out');
      

      
      setTimeout(() => { addWin(); clearData(); showData(); }, 4500);
      if(flag1)
     { setTimeout(() => {coins.currenTime = 0; coins.play(); }, 500)
      setTimeout(() => { coins.pause(); }, 2000)
      const au=document.querySelector('#many-coins');
      au.currenTime=0;
      au.play();}
      countOfIce++;
      points = 0;
      points += iceCreamCost['cone'];
      points += iceCreamCost['ball'];
      points += iceCreamCost['decoration'];
      sumSalary += points;
      document.querySelector('.money').textContent = `YOUR SALARY: ${sumSalary}`;
      iceCreamCost = { 'cone': 0, 'ball': 0, 'decoration': 0 };
      createdIceCream = [];
      iceCreamAmount++;
      addPoints();
      currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      currentUser['bestScore'] = Math.max(currentUser['bestScore'], sumSalary);
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
      points = 0;
      return;
    }

}


function rand(from, to) {
  return Math.floor(Math.random() * (to + 1 - from) + from)
}

function deleteIceCream() {
  document.querySelector('.contain-person').innerHTML = "";
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

function showPerson() {
  containPerson = document.querySelector('.contain-person');
  iceContainer = document.createElement('div');
  iceContainer.classList.add('ice-cream-container');
  person = document.createElement('img');
  person.src = `../assets/images/boys/${boys[boyId]}.png`;
  person.classList.add('person');
  containPerson.appendChild(iceContainer);
  containPerson.appendChild(person);
  containPerson.classList.add('.contain-p');
  if(boyId>=4)
    boyId = 0;
  else
    boyId++;
}


function nextLevel() {
  const nextLevelM = document.querySelector('.nextLevel-content');
  nextLevelM.style.display = "block";
  const levelText = "Step number:",
    scoreText = "Score:",
    countOfIceText = "The number of ice creams created:",
    finalTimeText = "Time:",
    bestScoreText = "highest score:",
    bestTimeText = "the best time:",
    countGameText = "Number of games played:",
    countWinText = "number of victories::",
    precentofWinText = "win percentage:";
 
   


  const values = { 1: `${level}`, 2: `${score}`, 3: `${countOfIce}`, 4: `${finalTime}`, 5: `${bestScore}`, 6: `${bestTime}`, 7: `${countGame}`, 8: `${countWin}`, 9: `${precentofWin}` }
  const titles = { 1: `${levelText}`, 2: `${scoreText}`, 3: `${countOfIceText}`, 4: `${finalTimeText}`, 5: `${bestScoreText}`, 6: `${bestTimeText}`, 7: `${countGameText}`, 8: `${countWinText}`, 9: `${precentofWinText}` }
 

  const titleOfWin = document.querySelector('.titleOfWin');
  const datailOfWin=document.querySelector('.datailOfWin');
  titleOfWin.style.display = "block";
  datailOfWin.style.display = "block";

  for (let i = 0; i < 9; i++) {

      const element1 = document.createElement('p')
      element1.innerHTML = titles[(i + 1)]+"   "+values[(i + 1)];
      titleOfWin.appendChild(element1);
      // const space = document.createElement('div')
      // space.innerHTML="    ";
      // titleOfWin.appendChild(space);
      // const element2 = document.createElement('p')
      // element2.innerHTML = 
      // datailOfWin.appendChild(element2);

  }


  
  
}


function lessPoints() {
  const scoreDiv = document.querySelector('.floating-text1');
  setTimeout(() => { scoreDiv.classList.remove('floating-text1'); }, 50);
  scoreDiv.textContent = `-${points}`
  setTimeout(() => { scoreDiv.classList.add('floating-text1'); }, 100);
}



function addPoints() {
  const scoreDiv = document.querySelector('.floating-text1');
  setTimeout(() => { scoreDiv.classList.remove('floating-text1'); }, 0);
  scoreDiv.textContent = `+${points}`
  setTimeout(() => { scoreDiv.classList.add('floating-text1'); }, 20);
}

//xxx

function startTimer() {
  clearInterval(interval);
  let i = 0;
  if (i == 0) {
    i = 1;
    const elem = document.getElementById("myBar");
    let height = 1;
    interval = setInterval(frame, 15 / 100 * 1000);
    function frame() {
      if (height >= 100) {
        clearInterval(interval);
        i = 0;
        // document.querySelector('.person').src = '../assets/images/boys/angryboy1.png';
        missedIceCream++;
        document.querySelector('.person').classList.add('out');
        document.querySelector('.ice-cream-container').classList.add('out');
        setTimeout(() => { clearData(); showData(); updateIceCreamCost(); }, 4500)
      }
      else {
        height++;
        elem.style.height = height + "%";
      }
    }
  }
}

function clearData() {
  clearIceCream();
  deleteIceCream();
  closeDivElements();
}

function showData() {
  if ((iceCreamAmount+missedIceCream) >= 5) {
    showWin();
    return;
  }
  startTimer();
  randIceCream();
}

