let colours = ['red', 'lightGreen', 'pink', 'yellow', 'blue', 'green'];
let flip = document.getElementById('flip');

flip.addEventListener("click", function(){
    random = getRandomNumber();
    document.body.style.backgroundColor = colours[random];
});
function getRandomNumber(){
    return Math.floor(Math.random() * colours.length);
}