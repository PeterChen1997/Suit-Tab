const bgImg = document.querySelector('.bg-img')
const currentTime = document.querySelector('#currentTime')


function updateTime() {
    let time = new Date()
    let minutes = time.getMinutes() + ''
    if(minutes.length == 1) {
        minutes = '0' + minutes
    }
    currentTime.textContent = time.getHours() + ' : ' + minutes
}



bgImg.style.backgroundImage = 'url("https://bing.ioliu.cn/v1?d=0&w=1920&h=1080")'



updateTime()
setInterval(updateTime, 5000)
