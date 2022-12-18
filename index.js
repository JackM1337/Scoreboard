let homeCount = 0
let homeCounter = document.getElementById("homecounter")
let guestCount = 0
let guestCounter = document.getElementById("guestcounter")

function add1home(){
    homeCount++
    homeCounter.textContent = homeCount
}

function add2home(){
    homeCount = homeCount + 2
    homeCounter.textContent = homeCount
}

function add3home(){
    homeCount = homeCount + 3
    homeCounter.textContent = homeCount
}

function add1guest(){
    guestCount++
    guestCounter.textContent = guestCount
}

function add2guest(){
    guestCount = guestCount + 2
    guestCounter.textContent = guestCount
}

function add3guest(){
    guestCount = guestCount + 3
    guestCounter.textContent = guestCount
}

function resetHome(){
    homeCount = 0
    homeCounter.textContent = 0
}

function resetGuest(){
    guestCount = 0
    guestCounter.textContent = 0
}