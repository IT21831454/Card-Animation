const Front = document.getElementById('Front');
const cards = document.querySelectorAll('.card');

Front.addEventListener('mousemove', function () {

    cards[0].style.rotate = "-8deg"
    cards[1].style.rotate = "-9deg"
    cards[2].style.rotate = "-10deg"
    cards[3].style.rotate = "-11deg"

    cards[4].style.rotate = "8deg"
    cards[5].style.rotate = "10deg"
    cards[6].style.rotate = "12deg"



});

Front.addEventListener('mouseout', function () {

    for (let x = 0; x <= 6; x++) {
        cards[x].style.rotate = "0deg"
    };



})