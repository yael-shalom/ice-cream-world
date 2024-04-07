//ארועי לחיצה
init();


function init()
{

    //כניסה למשחקים השונים
    document.getElementById("one").addEventListener('click',iceCreamGame);
    document.getElementById("two").addEventListener('click',memory);
    document.getElementById("three").addEventListener('click',bull);
    document.getElementById("four").addEventListener('click',another);
    
}
function iceCreamGame()
{
    window.open('../pages/game.html','_self');
}
function memory()
{
    window.open('../pages/game.html','_self');
}
function bull()
{
    window.open('../pages/game.html','_self');
}
function another()
{
    window.open('../pages/game.html','_self');
}