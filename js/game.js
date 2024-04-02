const cones = ['cone8', 'cone9', 'cone10', 'cone11'];
const boys = ['boy1', 'happyboy1'];
const balls = ['brown','lightblue', 'pink', 'purple', 'yellow'];
const decorations = ['almonds', 'bege-nuts', 'blueberries', 'brown-nuts', 'candies', 'concours', 'green-almonds', 'leaf', 'strawberries'];
var randomIceCream = {};
let ballsAmount;
let zIndex = 0;
const coneElements = document.querySelector('.cone-elements').children[1];
const ballElements = document.querySelector('.ball-elements').children[1];
const decorationElements = document.querySelector('.decoration-elements').children[1];
let createdIceCream = [];
let amount = 0;
let levelWin=1;

let iconStart = document.querySelector('.iconStart');
// קביעת הטיימר להפעלת האנימציה כל 500 מילישניות (חצי שנייה)
let intervalId =setInterval(toggleBlink, 500);

init();





//פונקציה של כל האירועי לחיצה
function init() {

//כפתור לתחילת המשחק
  document.getElementById('startGame').addEventListener('click', () => this.play());
  //כפתור לחידוש המשחק
  document.getElementById('restartGame').addEventListener('click', () => this.replay());
  //שולח לפונקצית פתיחת ההוראות במודל
  document.getElementById('myBtn').addEventListener('click', () => this.modall());

  //שולח לפונקצית סגירת ההוראות
    document.getElementsByClassName('close')[0].addEventListener('click', () => this.closeModal());

    toggle = document.getElementById('backgroundMus').firstElementChild,
    toggle.addEventListener('click', (ev) => this.music(ev));
    toggle = document.getElementById('sounds').firstElementChild,
    toggle.addEventListener('click', (ev) => this.music1());
    nav = document.getElementsByClassName('nav-list')[0];
    menu = document.getElementsByClassName('container1')[0];
    menu.addEventListener('click', () => this.menue());
 
    document.getElementsByClassName('dropbtn')[0].addEventListener('click', () => this.defenition());



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

function defenition () {
  document.getElementById("myDropdown").classList.toggle("show");
}

function toggleBlink () {

  if (iconStart.style.opacity === '1') {
    iconStart.style.opacity = '0';
  } else {
    iconStart.style.opacity = '1';
  }
}




function replay()
{
  location.reload();
  setInterval(randIceCream, 100000);
}

//פונקציה המזמנת את ההזמנה הבאה לביצוע
function play()
{
 setTimeout(randIceCream)
 clearInterval(intervalId);
 iconStart.classList.remove('on');
 iconStart.remove('on');
 
}


  //rand iceCream:
  function randIceCream() {
    randomIceCream['cone'] = cones[rand(0, cones.length-1)];
    ballsAmount = rand(1,3);
    randomIceCream['ball'] = [];
    for (let i = 0; i < ballsAmount; i++) {
        randomIceCream['ball'].push(balls[rand(0, balls.length-1)]);
    }
    randomIceCream['decoration'] = decorations[rand(0, decorations.length-1)];
    showIceCream();

}


//תכתבי תיעוד על זה כי לא ממש הבנתי מה זה
function showIceCream() {
  const container = document.querySelector('.icecream-container');
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
  let x = event.currentTarget.parentElement.children[1];
  if(x.classList.contains('none'))
  {
    x.classList.remove('none');
    x.classList.add('flex-col');
  }
  else
  {
    x.classList.add('none');
    x.classList.remove('flex-col');
  }
  // if (amount % 2 == 0) {
  //   x.classList.remove('none');
  //   x.classList.add('flex-col');
  //   amount++;
  // }
  // else {
  //   x.classList.add('none');
  //   x.classList.remove('flex-col');
  //   amount--;
  // }
}

function throwToGarbage() {
  createdItem = [];
  document.querySelector('.created-container').innerHTML = "";
}

function addWin()
{
  let imgWin=document.querySelector(`#coneWin${levelWin++}-elements`);
  imgWin.src='../assets/images/icons/coneWin.png';

}

function addItem(event) {

  // let divElements = event.currentTarget.parentElement;
  // divElements.classList.add('none');
  // divElements.classList.remove('flex-col');

  createdIceCream.push(event.currentTarget.id);
  typeOfImg = event.currentTarget.parentElement.parentElement.classList[1];
  type = typeOfImg.substring(0, typeOfImg.indexOf('-'));
  createdItem = document.querySelector('.created-container');
  img = document.createElement('img');
  img.src = `../assets/images/${type}s/${event.currentTarget.id}.png`;
  img.style.zIndex = zIndex++;
  if (decorations.includes(event.currentTarget.id))
    img.classList.add('built-decoration');
  else
    img.classList.add('built-ice-cream')
  if(cones.includes(event.currentTarget.id))
    img.classList.add('cone');
  createdItem.appendChild(img);
  isRight();
}

function isRight()
{
  let flag = true;
  if(randomIceCream['cone'] === createdIceCream[0])
    for(let i = 0; i<randomIceCream['ball'].length; i++)
  {
    if(i-1>createdIceCream.length || randomIceCream['ball'][i] !== createdIceCream[i+1])
      flag = false;
  }
  if(flag)
    if(randomIceCream['decoration']===createdIceCream[createdIceCream.length-1])
      {


       
        setTimeout(()=>{addWin();throwToGarbage(); deleteIceCream(); randIceCream(); closeDivElements()}, 1000)
      //  setTimeout(()=>{alert("good"); throwToGarbage();}, 1500) ;
        return;
      }
}

function rand(from, to)
{
  return Math.floor(Math.random()*(to+1-from)+from)
}

function deleteIceCream()
{
  document.querySelector('.icecream-container').innerHTML = "";
}

function closeDivElements()
{
  divElement = document.querySelectorAll('.elements');
  for (let i = 0; i < divElement.length; i++) {
    if(divElement[i].classList.contains('flex-col'))
    {
      divElement[i].classList.add('none');
      divElement[i].classList.remove('flex-col');
    }
  }
}