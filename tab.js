const bgImg = document.querySelector('.bg-img img')
const currentTime = document.querySelector('#currentTime')
let r = 0

function updateTime() {
    let time = new Date()
    let minutes = time.getMinutes() + ''
    let hours = time.getHours() + ''
    if(minutes.length == 1) {
        minutes = '0' + minutes
    } else if(hours.length == 1) {
        hours = '0' + hours
    }
    currentTime.textContent = hours + ':' + minutes
}

function fadeIn(img) {
    if(img.complete) {
        img.classList.add('fadein')
        this.clearInterval(loopId)
    }
    console.log('loop')
}

r = Math.floor(5 * Math.random()) + 1  

// bgImg.style.backgroundImage = `url("https://bing.ioliu.cn/v1?d=${r}&w=1920&h=1080")`
bgImg.setAttribute('src', `http://115.159.6.187/backgroundImg/bg${r}.jpg`)
// bgImg.style.backgroundImage = `url("./imgs/bg1.png")`
// bgImg.complete = fadeIn(bgImg)

const loopId = setInterval(fadeIn.bind(this, bgImg), 10)



updateTime()
setInterval(updateTime, 5000)
