// Flyout Script
let accessIcons = document.querySelectorAll('.accessButton')
let TBWindowOpen = false
let accessIconsToggle = true
let isClock = true
let darkTheme = false
let highContrast = false

function enableAccessibiltyButtons() {
 if (!accessIconsToggle) {
    accessIcons.forEach((i) => {
        i.removeAttribute('style')
    })
    accessIconsToggle = true
    document.getElementById('ACSBCheck').removeAttribute('style')
 } else {
    accessIcons.forEach((i) => {
        i.style.display = 'none'
    })
    accessIconsToggle = false
    document.getElementById('ACSBCheck').style.display = 'none'
 }
 TBWindowOpen = false
 document.getElementById("TBWF").removeAttribute('style')

}

function disableClock() {
    if (isClock) {
        document.getElementById('clock').style.display = 'none'
        isClock = false
        document.getElementById('TCheck').style.display = 'none'
    } else {
        document.getElementById('clock').removeAttribute('style')
        isClock = true
        document.getElementById('TCheck').removeAttribute('style')
    }
    TBWindowOpen = false
    document.getElementById("TBWF").removeAttribute('style')
}

document.getElementById('TBWindow').addEventListener('click', () => {
    if (!TBWindowOpen) {
        TBWindowOpen = true
        document.getElementById("TBWF").style.display = 'grid'
    } else {
        TBWindowOpen = false
        document.getElementById("TBWF").removeAttribute('style')
    }
})

function changeTheme() {
    if (!highContrast) {
        let DTCheck = document.getElementById('DTCheck')
        if (!darkTheme) {
            document.body.className = 'dark'
            darkTheme = true
            DTCheck.removeAttribute('style')
        } else {
            document.body.removeAttribute('class')
            darkTheme = false
            DTCheck.style.display = 'none'
        }
        TBWindowOpen = false
        document.getElementById("TBWF").removeAttribute('style')
    }
}

function highContrastTheme() {
    let HCCheck = document.getElementById('HCCheck')
    if (!highContrast) {
        document.body.className = 'high'
        highContrast = true
        HCCheck.removeAttribute('style')
    } else {
        document.body.removeAttribute('class')
        highContrast = false
        HCCheck.style.display = 'none'
        if (darkTheme) {
            document.body.className = 'dark'
        }
    }
    TBWindowOpen = false
    document.getElementById("TBWF").removeAttribute('style')
}

// Quiz Script

let answered = []
let counter = 1
let totalPoints = 6
let questions = ["Quais são as consequências de danos no cerebelo?", "Qual é a composição do cerebelo?", "O que é o Vermis?", "Do que é composto o líquido cinzento?", "Qual a função do cerebelo?", "Qual a função do líquido branco?"]

function anotherQuestion() {
    let isChoosed = false
    do {
        let actualQuestion = Math.floor(Math.random() * 6)
        if (answered[0] != actualQuestion && answered[1] != actualQuestion && answered[2] != actualQuestion && answered[3] != actualQuestion && answered[4] != actualQuestion && answered[5] != actualQuestion) {
            
        }
    } while (!isChoosed);
}