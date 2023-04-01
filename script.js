const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump=() => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop= setInterval(()=> {

console.assertlog('loop')

    const pipepostion = pipe.offsetLeft;
    const mariopostion= window.getComputedStyle(mario).bottom.replace('px',' ');

console.log(mariopostion);

    if (pipepostion <= 120 &&  pipepostion >0 && mariopostion< 80){
        pipe.style.animation="none";
        pipe.style.left=`${pipepostion}px`;

      mario.style.animation="none";
        mario.style.left=`${mariopostion}px`;

        mario.src='dead.jpeg';
        mario.style.width= '75px'
        mario.style.marginleft = '50px'

        clearInterval('loop');
    }
}, 10);

document.addEventListener('keydown', jump)
