const cones = ['cone2', 'cone3', 'cone5', 'cone7', 'cone8', 'cone9', 'cone10', 'cone11'];
const boys = ['boy1', 'happyboy1'];
const balls = ['brown', 'lightblue', 'pink', 'purple', 'yellow'];
const decorations = ['almonds', 'bege-nuts', 'blueberries', 'brown-nuts', 'candies', 'chocolate', 'colorful1', 'colorful2',
    'colorful3', 'concours', 'cream1', 'cream2', 'cream3', 'cream4', 'cream5', 'cream6', 'green-almonds', 'leaf', 'lemon', 'macron',
    'orange', 'strawberries', 'strawberry', 'sweet', 'yellow-fruit'];
var randomIceCream = {};

randIceCream();

function randIceCream() {
    randomIceCream['cone'] = cones[Math.floor(Math.random() * cones.length)];
    randomIceCream['ball'] = balls[Math.floor(Math.random() * balls.length)];
    randomIceCream['decoration'] = decorations[Math.floor(Math.random() * decorations.length)];
}

showIceCream();

function showIceCream() {
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



function moveBy() { }