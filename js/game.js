const cones = ['cone2', 'cone3', 'cone5', 'cone7', 'cone8', 'cone9', 'cone10', 'cone11'];
const boys = ['boy1', 'happyboy1'];
const balls = ['brown', 'lightblue', 'pink', 'purple', 'yellow'];
const decorations = ['almonds', 'bege-nuts', 'blueberries', 'brown-nuts', 'candies', 'chocolate', 'colorful1', 'colorful2',
    'colorful3', 'concours', 'green-almonds', 'leaf', 'lemon', 'strawberries', 'yellow-fruit'];
var randomIceCream = {};
let ballsAmount;
randomIceCream();
console.log(randIceCream);




//פונקציה המזמנת את ההזמנה הבאה לביצוע
function play()
{
setInterval(changeBackground, 100000);
}



//פונקציה שמרנדמת גלידה לביצוע
function changeIceCream() {
    // הגרלת מספר אקראי בין 0 לאורך המערך -1
    randIceCream();
    // החלפת תמונת הרקע
    document.body.style.backgroundImage =// `url('${images[randomIndex]}')`
    
   
  }


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
    let c = document.createElement('img');
    c.src = `../assets/images/cones/${randomIceCream['cone']}.png`;
    container.appendChild(c);
    let b = document.createElement('img');
    b.src = `../assets/images/balls/${randomIceCream['ball']}.png`;
    b.style.zIndex = '1';
    container.appendChild(b);
    let d = document.createElement('img');
    d.classList.add('decoration')
    d.src = `../assets/images/decorations/${randomIceCream['decoration']}.png`;
    d.style.zIndex = '2'
    container.appendChild(d);

}



 
