let score = 0
let time = 20000
let interval;
const wacas = document.querySelectorAll('.waca')
const scoreText = document.querySelector('.score')
const timeText = document.querySelector('.time')
const vel = 2000



wacas.forEach((waca, idx)=>{
    waca.addEventListener('click',(e)=>{                
        score++
        scoreText.innerText = score
        e.target.classList.remove('show')
    })
})

interval = setInterval(()=>{
    let randomWaca = Math.floor(Math.random()*wacas.length)
    wacas[randomWaca].classList.add('show')
    setTimeout(()=>{
        wacas[randomWaca].classList.remove('show')
    }, vel)
    time -=1000
    timeText.innerText = time/1000
}, 1000)

setTimeout(()=>{
    clearInterval(interval)
}, time)