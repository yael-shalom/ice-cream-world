const cones = ['cone2', 'cone3', 'cone5', 'cone7', 'cone8', 'cone9', 'cone10', 'cone11'];
const boys = ['boy1', 'happyboy1'];
const balls = ['brown', 'lightblue', 'pink', 'purple', 'yellow'];
const decorations = ['almonds', 'bege-nuts', 'blueberries', 'brown-nuts', 'candies', 'chocolate', 'colorful1', 'colorful2',
    'colorful3', 'concours', 'green-almonds', 'leaf', 'lemon', 'strawberries', 'yellow-fruit'];
var randomIceCream = {};
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
  function rand(b)
  {
    return Math.floor(Math.random() * b);

  }
  


  //rand iceCream:
function randIceCream() {
    randomIceCream['cone'] = cones[rand(cones.length)];
    randomIceCream['ball'][0] = balls[rand(balls.length)];
    randomIceCream['ball'][1] = balls[rand(balls.length)];
    randomIceCream['ball'][2] = balls[rand(balls.length)];
    randomIceCream['decoration'] = decorations[rand(decorations.length)];

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



 
