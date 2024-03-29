const cones = ['cone2', 'cone3', 'cone5', 'cone7', 'cone8', 'cone9', 'cone10', 'cone11'];
const boys = ['boy1', 'happyboy1'];
const balls = ['brown', 'lightblue', 'pink', 'purple', 'yellow'];
const decorations = ['almonds', 'bege-nuts', 'blueberries', 'brown-nuts', 'candies', 'chocolate', 'colorful1', 'colorful2',
    'colorful3', 'concours', 'green-almonds', 'leaf', 'lemon', 'strawberries', 'yellow-fruit'];
var randomIceCream = {};
let ballsAmount;
let zIndex=0;
init();
randIceCream();
console.log(randomIceCream);


 //פונקציה של כל האירועי לחיצה
function init(){


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
  
    document.getElementsByClassName('button')[1].addEventListener('click', () => this.closeAndStart());
   
     //אירוע שפותח הגדרות
     document.getElementsByClassName('dropbtn')[0].addEventListener('click', () => this.defenition());


}
function defenition () {
  document.getElementById("myDropdown").classList.toggle("show");
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


 // When the user clicks on <span> (x), close the modal


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
function modall () {
  // Get the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}
// //פונקציה המזמנת את ההזמנה הבאה לביצוע
function play()
{
setInterval(changeBackground, 100000);
}



// //פונקציה שמרנדמת גלידה לביצוע
// function changeIceCream() {
//     // הגרלת מספר אקראי בין 0 לאורך המערך -1
//     randIceCream();
//     // החלפת תמונת הרקע
//     document.body.style.backgroundImage =// `url('${images[randomIndex]}')`
    
   
//   }


  

//פןנקצית רינדום 
  function rand(from, to)
  {
    return Math.floor(Math.random() * (to - from + 1)) + from;

  }
  

// mn

  //rand iceCream:
  function randIceCream() {
    randomIceCream['cone'] = cones[rand(0, cones.length-1)];
    ballsAmount = rand(1,3);
    randomIceCream['ball'] = [];
    for (let i = 0; i < ballsAmount; i++) {
        randomIceCream['ball'].push(balls[rand(0, balls.length-1)]);
    }
    randomIceCream['decoration'] = decorations[rand(0, decorations.length-1)];

}

showIceCream();
//תכתבי תיעוד על זה כי לא ממש הבנתי מה זה
function showIceCream()
{
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
 function openDivElements(event)
 {
  let x = event.currentTarget.parentElement.children[1];
  x.classList.remove('none');
  x.classList.add('flex-col')
 }

function throeToGarbage()
{

}