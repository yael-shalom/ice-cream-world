const cones = ['cone10', 'cone9', 'cone7', 'cone3'];
const boys = ['boy1', 'happyboy1'];
const balls = ['brown', 'lightblue', 'pink', 'purple', 'yellow'];
const decorations = ['almonds', 'bege-nuts', 'blueberries', 'brown-nuts', 'candies', 'concours', 'green-almonds', 'leaf', 'strawberries'];
var randomIceCream = {};
let ballsAmount;
let zIndex = 0;
const coneElements = document.querySelector('.cone-elements').children[1];
const ballElements = document.querySelector('.ball-elements').children[1];
const decorationElements = document.querySelector('.decoration-elements').children[1];
let createdIceCream = [];

init();
randIceCream();
console.log(randomIceCream);


//פונקציה של כל האירועי לחיצה
function init() {


  document.getElementById('startGame').addEventListener('click', () => this.play());
  //שולח לפונקצית פתיחת ההוראות במודל
  document.getElementById('myBtn').addEventListener('click', () => this.modall());

  //שולח לפונקצית סגירת ההוראות
  document.getElementsByClassName('close')[0].addEventListener('click', () => this.closeModal());
  toggle = document.getElementById('backgroundMus').firstElementChild,
    toggle.addEventListener('click', (ev) => this.music(ev));
  toggle = document.getElementById('sounds').firstElementChild,
    toggle.addEventListener('click', (ev) => this.music1());
  menu = document.getElementsByClassName('container1')[0];
  menu.addEventListener('click', () => this.menue());
  nav = document.getElementsByClassName('nav-list')[0];



  //אירוע שפותח הגדרות
  const def = document.getElementsByClassName('.dropbtn buttonNav');
  // def.addEventListener('click', () => this.defenition());

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
function defenition() {
  const myD = document.getElementById(".myDropdown").classList.toggle("show");
  // myD
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
  this.flag = !this.flag

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
// //פונקציה המזמנת את ההזמנה הבאה לביצוע
function play() {
  setInterval(changeBackground, 100000);
}

//פןנקצית רינדום 
function rand(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;

}


// mn

//rand iceCream:
function randIceCream() {
  randomIceCream['cone'] = cones[rand(0, cones.length - 1)];
  ballsAmount = rand(1, 3);
  randomIceCream['ball'] = [];
  for (let i = 0; i < ballsAmount; i++) {
    randomIceCream['ball'].push(balls[rand(0, balls.length - 1)]);
  }
  randomIceCream['decoration'] = decorations[rand(0, decorations.length - 1)];

}

showIceCream();
//תכתבי תיעוד על זה כי לא ממש הבנתי מה זה
function showIceCream() {
  const container = document.querySelector('.icecream-container');
  let cone = document.createElement('img');
  cone.src = `../assets/images/cones/${randomIceCream['cone']}.png`;
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
  let x = event.currentTarget.parentElement.children[1];
  x.classList.remove('none');
  x.classList.add('flex-col');
}

function throeToGarbage() {

}

function addItem(event)
{
  createdIceCream.push(event.currentTarget.id);
  typeOfImg = event.currentTarget.parentElement.parentElement.classList[1];
  type = typeOfImg.substring(0,typeOfImg.indexOf('-'));
  createdItem = document.querySelector('.created-container');
  img = document.createElement('img');
  img.src = `../assets/images/${type}s/${event.currentTarget.id}.png`;
  img.style.zIndex = zIndex++;
  if(decorations.includes(event.currentTarget.id))
    img.classList.add('decoration');
  createdItem.appendChild(img);
}