// const secondHand = document.querySelector('.second-hand')
// const minuteHand = document.querySelector('.min-hand')
// const hourHand = document.querySelector('.hour-hand')
// const stopClock = document.querySelector('#stop-clock')
// const clock = document.querySelector('.pomodoro button')
// let clockStatus = false

// function toggleClock() {
//     clockStatus = !clockStatus
//     console.log(clockStatus)
//     if(clockStatus) {
//         document.body.classList.add('clock-active')
//     } else {
//         document.body.classList.remove('clock-active')
//     }
// }
// function setDate() {
//   const now = new Date()

//   const hours = now.getHours()
//   const minutes = now.getMinutes()
//   const seconds = now.getSeconds()

//   if (seconds == 0) {
//     hourHand.style.transition = 'all 0s'
//     minuteHand.style.transition = 'all 0s'
//   }
//     const secondsDegrees = (seconds / 60) * 360 + 90
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`

//     const hoursDegrees = (hours / 12) * 360 + 90 + (minutes / 60) * 30
//     hourHand.style.transform = `rotate(${hoursDegrees}deg)`

//     const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90
//     minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  

// }

// function stop() {
//     document.body.classList.remove('clock-active')
//     clockStatus = false
// }


// clock.addEventListener('click', toggleClock)
// stopClock.addEventListener('click', stop)
// setInterval(setDate, 1000)