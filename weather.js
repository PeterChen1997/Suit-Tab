const weather = document.querySelector('.top-weather')
const script = document.createElement('script')

script.src = 'https://api.caiyunapp.com/v2/RiA7WLZYAoqRWsdW/120.299,31.568/realtime.jsonp?callback=handleRes'
document.body.appendChild(script)

function handleRes(data) {
    document.body.removeChild(script)
    let degree = data.result.temperature
    let skycon = data.result.skycon
    document.querySelector('#degree').textContent = degree
    document.querySelector('.top-weather img').src = `./imgs/weather/${skycon}.png`
}

function handlePosition(position) {
    console.log(position)
}

function errorCallback(err) {
    console.log(err)
}

function getPosition() {
    console.log('clicked')
    navigator.geolocation.getCurrentPosition(handlePosition, errorCallback)
}

weather.addEventListener('click', getPosition)