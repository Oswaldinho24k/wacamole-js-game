//variables
const topos = document.querySelectorAll('.topo')
const button = document.querySelector('#start')
const restartBtn = document.querySelector('#restart')
const timeText = document.querySelector('.time')
const scoreText = document.querySelector('.score')

let interval;
let vel = 1000
let time = 29000
let score = 0




//show and hide the topo
const startGame=()=>{
    button.disabled = true
    interval = setInterval(()=>{
        const randomTopo = Math.floor(Math.random()*topos.length)
        topos[randomTopo].classList.add('show')
        setTimeout(()=>{
            topos[randomTopo].classList.remove('show')
        }, vel)

        timeText.innerText = `Time: ${time/1000}` 
        time-=1000
    },1000)

    setTimeout(gameOver, 30000)
}

const gameOver=()=>{
    clearInterval(interval)
    restartBtn.disabled = false

}

const restartGame=()=>{
    button.disabled = false
    restartBtn.disabled=true
    score = 0
    scoreText.innerText = `Score: ${score}`
    time = 29000
    timeText.innerText = `Time: ${time/1000}` 
}
const hitTopo = (event) =>{
    event.target.classList.remove('show')
    score++
    scoreText.innerText = `Score: ${score}`
}



//controls
button.addEventListener('click', startGame)
topos.forEach((topo, idx)=>{
  topo.addEventListener('click',hitTopo)  
})
restartBtn.addEventListener('click', restartGame)

