const cones = ['cone2', 'cone3', 'cone5', 'cone7', 'cone8', 'cone9', 'cone10', 'cone11'];
const boys = ['boy1', 'happyboy1'];
const balls = ['brown', 'lightblue', 'pink', 'purple', 'yellow'];
const decorations = ['almonds', 'bege-nuts', 'blueberries', 'brown-nuts', 'candies', 'chocolate', 'colorful1', 'colorful2',
    'colorful3', 'concours', 'green-almonds', 'leaf', 'lemon', 'strawberries', 'yellow-fruit'];
var randomIceCream = {};
let ballsAmount;
let zIndex=0;

randIceCream();
console.log(randomIceCream);




// //פונקציה המזמנת את ההזמנה הבאה לביצוע
// function play()
// {
// setInterval(changeBackground, 100000);
// }



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
    for (let i = 0; i < ballsAmount; i++) {
        randomIceCream['ball'][i] = balls[rand(0, balls.length-1)];
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
    container.appendChild(d);
    zIndex = 0;
}



 
