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
const $container = document.getElementById('container')
const $save = document.getElementById('save')
const $seconds = document.getElementById('seconds')
const $greetings = document.getElementById('greetings')
//-----------------------------------------------------


//----------- CLOCK SET INTERVAL
setInterval(function () {
    const now = new Date()

    // if checked then display the value 
    if (control24Clock) {
        if (showSeconds == true){ 
            $container.innerText = now.toLocaleTimeString('en-GB')   
        }
        else {
            $container.innerText = now.getHours()+":"+now.getMinutes()
        }

    } else 
         if (showSeconds == true)
    {
        $container.innerText = now.toLocaleTimeString('en-US')
    } 
    else{
        if (now.getHours() < 12){
            $container.innerText = now.getHours()+":"+now.getMinutes()+"am"
        } else {$container.innerText = (now.getHours() - 12)+":"+now.getMinutes()+"pm"}
    }

     // GREETINGS 
     if (now.getHours() < 12){
         $greetings.innerHTML = "Good Morning, Earthling"
     }

     if (now.getHours() > 12){
        $greetings.innerHTML = "Good Afternoon, Tellurian"
        console.log($greetings)
    }

    // greater than 5pm
    if (now.getHours() > 17){
        $greetings.innerHTML = "Good Evening, Terrestrial Being"
        console.log($greetings)
    }
    
    console.log('Clock => ', now)
}, 1000)

//----------- end Clock

let control24Clock = false
let setClockContrast = false
let showSeconds = false

//----------- LOCAL STORAGE
// To check if local storage has the settings values 
if(localStorage.getItem('24HourSetting')){
    // Assigning whatever the localStorage has
    // taking the variable from local storage and asigning the value to 24 hour clock
    control24Clock = localStorage.getItem('24HourSetting')
    setClockContrast = localStorage.getItem('Contrast')
    showSeconds = localStorage.getItem('Seconds')

    //---- 24 Hour Clock (Local Storage) ---- 
    if(control24Clock == 'true'){
        $24hour.checked = true
        control24Clock = true
    } else{
        $24hour.checked = false
        control24Clock = false
    }

    //---- Contrast (Local Storage) ---- 
    if(setClockContrast == 'true'){
        $container.classList.add('contrast')
         $greetings.classList.add('contrast')
        $clockContrast.checked = true
        setClockContrast = true
    } else{
        $container.classList.remove('contrast')
        $greetings.classList.remove('contrast')
        $clockContrast.checked = false
        setClockContrast = false
    }

    //---- Showing Seconds (Local Storage) ---- 
    if(showSeconds == 'true'){
        $seconds.checked = true
        showSeconds = true
    } else{
        $seconds.checked = false
        showSeconds = false
    }
}


//----------- SETTINGS

    //---- Event Listener for Settings Checkbox ---- 
    $save.addEventListener('click', function(e) {
        e.preventDefault();

    // change settings variables

        // 24hour time | British English: 24-hour time without AM/PM → "03:00:00"
        control24Clock = $24hour.checked
        console.log(control24Clock)

        //---- Contrast for Clock Background  ----
        setClockContrast = $clockContrast.checked
        if (setClockContrast == true) {
            $container.classList.add('contrast')
            $greetings.classList.add('contrast')
        }
        else {
        $container.classList.remove('contrast')
        $greetings.classList.remove('contrast')
        }

        //---- Showing Seconds ----
        showSeconds = $seconds.checked

          //---- Local Storage  ----
        localStorage.setItem('24HourSetting', control24Clock)
        localStorage.setItem('Contrast', setClockContrast)
        localStorage.setItem('Seconds', showSeconds)
    })

// // ------------------



//SHOW DATE
