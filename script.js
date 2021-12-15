//-----------NASA API
// Brining in the custom nasa API server to work with 
fetch('https://api.nasa.gov/planetary/apod?api_key=vgqGnJL5WoracovhddpnoaxTdCrU7h4mWH6ps9KQ')
    .then(function (response) { //JS Promise Structure is returned and caputed in response parameter
        return response.json() //returning the data formatted in JSON format when avaliable
    })
    .then(function (imageData) { //JSON formatted data is captured 
        console.log(imageData)

        if (imageData.media_type === 'video') {
            document.querySelector('p').textContent = 'APOD is a video'
        } else {
            document.body.style.backgroundImage = 'url(' + imageData.hdurl + ')'
            // document.querySelector('img').setAttribute('src', imageData.hdurl)
        }
    })
//----------- End of NASA API

//----------- GLOBAL DECLARATIONS
const $24hour = document.getElementById('24hour')
const $container = document.getElementById('container')
const $save = document.getElementById('save')

//-----------------------------------------------------


//----------- CLOCK
setInterval(function () {
    const now = new Date()

    // if checked then display the value 
    if (control24Clock) {
        $container.innerText = now.toLocaleTimeString('en-GB')
    } else {
        $container.innerText = now.toLocaleTimeString('en-US')
    }
    console.log('Clock => ', now)
}, 1000)

// Date.prototype.toDateString()

// 12hour time | US English: 12-hour time with AM/PM → "7:00:00 PM"
console.log(now.toLocaleTimeString('en-US'));

// 24hour time | British English: 24-hour time without AM/PM → "03:00:00"
console.log(now.toLocaleTimeString('en-GB'));


//----------- SETTINGS
let control24Clock = false
    $submit.addEventListener('click', function () {
        // change control variables
        control24Clock = true
    })

//SHOW DATE

//----------- END CLOCK