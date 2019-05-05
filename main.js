let cntnr = document.getElementById('container');
let slike = ['1.jpg', '2.jpg', '3.jpg', 'BaliWater.jpg', '5.jpg', '7.jpg', '9.jpg'];
let sveSlike = slike.length;
let current = 1;

cntnr.addEventListener('click', stopStart);

let test = 0;

function slide() {
    cntnr.innerHTML = '<img src="slike/'+ slike[current] +'"/>'
    current++;
    if (current == sveSlike) {
        current = 0;
    }
}
slide();
let loop = setInterval (slide, 2550);

function stopStart() {
    if (test === 0) {  
        clearInterval(loop);
        test++;
        cntnr.setAttribute('title', 'pokreni');
    } else {
        loop = setInterval (slide, 2550);
        test--;
        cntnr.setAttribute('title', 'zaustavi');
    }
}