const bgImg = document.querySelector('.bg-img')
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
    img.classList.add('fadein')
}

r = Math.floor(10 * Math.random())  

// bgImg.style.backgroundImage = `url("https://bing.ioliu.cn/v1?d=${r}&w=1920&h=1080")`
bgImg.style.backgroundImage = `url("./imgs/bg1.png")`
bgImg.onLoad = fadeIn(bgImg)


updateTime()
setInterval(updateTime, 5000)
