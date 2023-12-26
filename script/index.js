// DOM Elements
const circularProgress = document.querySelector('.circular-progress')

const progressValue = document.getElementById('progress-value')
const animateCheckbox = document.getElementById('animate')
const hideCheckbox = document.getElementById('hide')

// Animation
let animationId

// setting progress value
progressValue.addEventListener('input', (e) => {

    if (Object.is(+e.target.value, NaN)) {
        e.target.value = ''
    }
    if (e.target.value < 0) {
        e.target.value = 0
    }

    if (e.target.value > 100) {
        e.target.value = 100
    }

    circularProgress.style.background = `conic-gradient(blue ${e.target.value * 3.6}deg, #ededed 0deg)`;
})

// button 'animate'
animateCheckbox.addEventListener('change', () => {
    let degrees = 360

    if (animateCheckbox.checked) {
        animationId = setInterval(function () {
            circularProgress.style.transform = `rotate(${degrees}deg)`
            degrees += 360
        }, 2000)

    } else {
        clearInterval(animationId)
    }
})

// button 'hide'
hideCheckbox.addEventListener('change', () => {
    if (hideCheckbox.checked) {
        circularProgress.style.opacity = '0'
    }

    if (!hideCheckbox.checked == true) {
        circularProgress.style.opacity = '1'
    }
})

