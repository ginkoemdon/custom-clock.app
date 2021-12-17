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
const $12hours = document.getElementById('12hours')
const $clockContrast = document.getElementById('contrast')
const $content = document.getElementById('content')
const $container = document.getElementById('container')
const $save = document.getElementById('save')
const $seconds = document.getElementById('seconds')
const $greetings = document.getElementById('greetings')
const $displayDate = document.getElementById('displayDate')
const $dayOfWeek = document.getElementById('dayOfWeek')
const $dayOfMonth = document.getElementById('dayOfMonth')
const $dayOfYear = document.getElementById('dayOfYear')
const $weekOfYear = document.getElementById('weekOfYear')
//-----------------------------------------------------


//----------- CLOCK SET INTERVAL
setInterval(function () {
    const now = new Date()

    // if checked then display the value 
    if (control24Clock) {
        if (showSeconds == true) {
            $container.innerText = now.toLocaleTimeString('en-GB')
        } else {
            $container.innerText = now.getHours() + ":" + now.getMinutes()
        }

    } else
    if (showSeconds == true) {
        $container.innerText = now.toLocaleTimeString('en-US')
    } else {
        if (now.getHours() < 12) {
            $container.innerText = now.getHours() + ":" + now.getMinutes() + "am"
        } else {
            $container.innerText = (now.getHours() - 12) + ":" + now.getMinutes() + "pm"
        }
    }

    // GREETINGS 
    if (now.getHours() < 12) {
        $greetings.innerHTML = "Good Morning, Earthling"
    }

    if (now.getHours() > 12) {
        $greetings.innerHTML = "Good Afternoon, Tellurian"
        console.log($greetings)
    }

    // greater than 5pm
    if (now.getHours() > 17) {
        $greetings.innerHTML = "Good Evening, Terrestrial Being"
        console.log($greetings)
    }

    console.log('Clock => ', now)
}, 1000)

//----------- end of Clock

//----------- DATE DISPLAY 
let now = new Date();
let date = now.toDateString();
$displayDate.innerHTML = date

//----------- SETTINGS

//---- Event Listener for Settings Checkbox ---- 
$save.addEventListener('click', function (e) {
    e.preventDefault();

    // change settings variables

    // 24hour time | British English: 24-hour time without AM/PM → "03:00:00"
    control24Clock = $24hour.checked
    console.log(control24Clock)

    //---- Contrast for Clock Background  ----
    setClockContrast = $clockContrast.checked
    if (setClockContrast == true) {
        $content.classList.add('contrast')

    } else {
        $content.classList.remove('contrast')
    }

    //---- Showing Seconds ----
    showSeconds = $seconds.checked

    //---- Local Storage  ----
    localStorage.setItem('24HourSetting', control24Clock)
    localStorage.setItem('Contrast', setClockContrast)
    localStorage.setItem('Seconds', showSeconds)
})

// // ------------------


//----------- MORE INFO

//----------- Day of Week
let dayOfWeek
switch (new Date().getDay()) {
    case 0:
        dayOfWeek = "Sunday";
        break;
    case 1:
        dayOfWeek = "Monday";
        break;
    case 2:
        dayOfWeek = "Tuesday";
        break;
    case 3:
        dayOfWeek = "Wednesday";
        break;
    case 4:
        dayOfWeek = "Thursday";
        break;
    case 5:
        dayOfWeek = "Friday";
        break;
    case 6:
        dayOfWeek = "Saturday";
}
$dayOfWeek.innerHTML = dayOfWeek;
//----------- Day of Month
let dayOfMonth = new Date().getDate();
$dayOfMonth.innerHTML = dayOfMonth;

//----------- Day of Year
const dayOfYear = date =>
    Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
$dayOfYear.innerHTML = dayOfYear(new Date());

//----------- Day of Year
currentdate = new Date();
let oneJan = new Date(currentdate.getFullYear(), 0, 1);
let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
let result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
console.log(`The week number of the current date (${currentdate}) is ${result}.`);

$weekOfYear.innerHTML = result
//----------- DATE DISPLAY 


let control24Clock = false
let setClockContrast = false
let showSeconds = false

//----------- LOCAL STORAGE
// To check if local storage has the settings values 
if (localStorage.getItem('24HourSetting')) {
    // Assigning whatever the localStorage has
    // taking the variable from local storage and asigning the value to 24 hour clock
    control24Clock = localStorage.getItem('24HourSetting')
    setClockContrast = localStorage.getItem('Contrast')
    showSeconds = localStorage.getItem('Seconds')

    //---- 24 Hour Clock (Local Storage) ---- 
    if (control24Clock == 'true') {
        $24hour.checked = true
        control24Clock = true
    } else {
        $24hour.checked = false
        control24Clock = false
    }

    //---- Contrast (Local Storage) ---- 
    if (setClockContrast == 'true') {
        $content.classList.add('contrast')
        $clockContrast.checked = true
        setClockContrast = true
    } else {
        $content.classList.remove('contrast')
        $clockContrast.checked = false
        setClockContrast = false
    }

    //---- Showing Seconds (Local Storage) ---- 
    if (showSeconds == 'true') {
        $seconds.checked = true
        showSeconds = true
    } else {
        $seconds.checked = false
        showSeconds = false
    }
}