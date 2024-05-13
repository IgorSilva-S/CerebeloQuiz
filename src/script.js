// Flyout Script
let accessIcons = document.querySelectorAll('.accessButton')
let TBWindowOpen = false
let accessIconsToggle = true
let darkTheme = false
let highContrast = false
let isDevOpen = false

let DeveloperKeys = false

if (!DeveloperKeys) {
    document.getElementById('OpenDevKeys').style.display = 'none'
}

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
    isDevOpen = false
    document.getElementById("TBWF").removeAttribute('style')
    document.getElementById("DevF").removeAttribute('style')
    if (!isInElectron) {
        document.getElementById('DevF').style.top = '160px'
    }
    let screen = window.screen.width
    if (screen <= 550) {
        document.getElementById('DevF').style.top = '260px'
    }
    document.getElementById('FOpen').removeAttribute('style')

}

document.getElementById('TBWindow').addEventListener('click', () => {
    if (!TBWindowOpen) {
        TBWindowOpen = true
        document.getElementById("TBWF").style.display = 'grid'
        document.getElementById('FOpen').style.display = 'block'
        let screen = window.screen.width
        if (screen <= 550) {
            document.getElementById('DevF').style.top = '260px'
        }
    } else {
        TBWindowOpen = false
        isDevOpen = false
        document.getElementById("TBWF").removeAttribute('style')
        document.getElementById("DevF").removeAttribute('style')
        if (!isInElectron) {
            document.getElementById('DevF').style.top = '160px'
        }
        let screen = window.screen.width
        if (screen <= 550) {
            document.getElementById('DevF').style.top = '260px'
        }
        document.getElementById('FOpen').removeAttribute('style')
    }
})

function closeFlyout() {
    TBWindowOpen = false
    isDevOpen = false
    document.getElementById("TBWF").removeAttribute('style')
    document.getElementById("DevF").removeAttribute('style')
    document.getElementById('FOpen').removeAttribute('style')
    if (!isInElectron) {
        document.getElementById('DevF').style.top = '160px'
    }
    let screen = window.screen.width
    if (screen <= 550) {
        document.getElementById('DevF').style.top = '260px'
    }
}

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
        isDevOpen = false
        document.getElementById("TBWF").removeAttribute('style')
        document.getElementById("DevF").removeAttribute('style')
        if (!isInElectron) {
            document.getElementById('DevF').style.top = '160px'
        }
        let screen = window.screen.width
        if (screen <= 550) {
            document.getElementById('DevF').style.top = '260px'
        }
        document.getElementById('FOpen').removeAttribute('style')
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
    isDevOpen = false
    document.getElementById("TBWF").removeAttribute('style')
    document.getElementById("DevF").removeAttribute('style')
    if (!isInElectron) {
        document.getElementById('DevF').style.top = '160px'
    }
    let screen = window.screen.width
    if (screen <= 550) {
        document.getElementById('DevF').style.top = '260px'
    }
    document.getElementById('FOpen').removeAttribute('style')
}

// Timer Script
let timer = document.getElementById('timer')

timer.addEventListener('animationend', () => {
    if (typeOfPage == 'imagePage') {
        goToQuestion()
    } else if (typeOfPage == "questionPage") {
        totalPoints--
        anotherQuestion()
    }
    timer.removeAttribute('style')
    setTimeout(() => {
        if (isClock) {
            timer.style.display = 'flex'
        }
    }, 1);
})

// Quiz Script
let typeOfPage = 'introPage'

function startQuiz() {
    document.getElementById('menuHome').style.display = 'none'
    anotherQuestion()
}

function restartQuiz() {
    answered = []
    counter = 0
    totalPoints = 6
    leftPB = 0
    anotherQuestion()
    document.getElementById('endPage').style.display = 'none'
    document.getElementById('progress').style.left = `-${100 - leftPB}%`
    document.getElementById('TBWindow').removeAttribute('style')
}

let answered = []
let counter = 0
let totalPoints = 6
let leftPB = 0
let questions = ["Quais são as consequências de danos no cerebelo?", "Qual é a composição do cerebelo?", "O que é o Vermis?", "Do que é composto o líquido cinzento?", "Qual a função do cerebelo?", "Qual a função do líquido branco?"]
let imgQuestions = ["images/quizImages/img1.png", "images/quizImages/img2.png", "images/quizImages/img3.png", "images/quizImages/img4.png", "images/quizImages/img5.png", "images/quizImages/img6.png"]

function anotherQuestion() {
    let isChoosed = false
    let isFinished = false
    do {
        actualQuestion = Math.floor(Math.random() * 6)
        if (answered[0] != actualQuestion && answered[1] != actualQuestion && answered[2] != actualQuestion && answered[3] != actualQuestion && answered[4] != actualQuestion && answered[5] != actualQuestion) {
            answered.push(actualQuestion)
            counter++
            document.getElementById('questNum').innerText = counter
            document.getElementById('writeQuestion').innerText = questions[actualQuestion]
            isChoosed = true
        } else if (counter == 6) {
            isChoosed = true
            isFinished = true
            counter++
        }

        if (isChoosed && !isFinished) {
            let qOfTime
            let randButton = []
            let theWrong = 0
            switch (actualQuestion) {
                case 0:
                    qOfTime = answers1
                    break;
                case 1:
                    qOfTime = answers2
                    break;
                case 2:
                    qOfTime = answers3
                    break;
                case 3:
                    qOfTime = answers4
                    break;
                case 4:
                    qOfTime = answers5
                    break;
                case 5:
                    qOfTime = answers6
                    break;
            }
            document.getElementById('a1').innerText = qOfTime[0]
            document.getElementById('cAnswer').innerText = qOfTime[0]
            document.getElementById('a2').innerText = qOfTime[1]
            document.getElementById('w1Answer').innerText = qOfTime[1]
            document.getElementById('a3').innerText = qOfTime[2]
            document.getElementById('w2Answer').innerText = qOfTime[2]
            document.getElementById('a4').innerText = qOfTime[3]
            document.getElementById('w3Answer').innerText = qOfTime[3]
            document.getElementById('hImg').src = imgQuestions[actualQuestion]
            let randCorrect = Math.floor(Math.random() * 4 + 1)
            randButton.push(randCorrect)
            document.getElementById('correct').className = `BStyle${randCorrect}`
            do {
                let randWrong = Math.floor(Math.random() * 4 + 1)
                if (randWrong != randButton[0] && randWrong != randButton[1] && randWrong != randButton[2] && randWrong != randButton[3]) {
                    randButton.push(randWrong)
                    theWrong++
                    let buttonId = `wrong${theWrong}`
                    document.getElementById(buttonId).className = `BStyle${randWrong}`
                }
            } while (theWrong != 3);
        }
    } while (!isChoosed);
    if (counter > 1) {
        leftPB = leftPB + 16.6
        document.getElementById('progress').style.left = `-${100 - leftPB}%`
        let screen = window.screen.width
        if (screen <= 550 && leftPB >= 40) {
            document.getElementById('TBWindow').style.color = 'white'
            if (darkTheme || highContrast) {
                document.getElementById('TBWindow').style.color = 'black'
            }
        }
    }
    document.getElementById('imgSection').removeAttribute('style')
    document.getElementById('questions').style.display = 'none'
    typeOfPage = 'imagePage'
    if (isClock) {
        timer.style.display = 'flex'
    }
    let screen = window.screen.width
    if (screen <= 550 || DTM) {
        document.getElementById('a1').innerText = ''
        document.getElementById('a2').innerText = ''
        document.getElementById('a3').innerText = ''
        document.getElementById('a4').innerText = ''
    }
    if (counter >= 7) {
        document.getElementById('imgSection').style.display = 'none'
        document.getElementById('questions').style.display = 'none'
        document.getElementById('endPage').removeAttribute('style')
        document.getElementById('numCorrect').innerText = totalPoints
        typeOfPage = 'endPage'
        leftPB = 100
        document.getElementById('progress').style.left = `-${100 - leftPB}%`
        setTimeout(() => {
            timer.removeAttribute('style')
        }, 2);
    }
}

let answers1 = ["Falta de coordenação motora e equilíbrio", "Aumento da capacidade de coordenação motora", "Redução da pressão arterial", "Chance de desenvolver esclerose lateral amiotrófica"]

let answers2 = ["Tecidos nervosos com substâncias cinzentas e brancas", "Lipídios", "Compõe-se de uma parte líquida (plasma)", "Ossos a músculos"]

let answers3 = ["Estrutura anatômica de ligação entre os dois hemisférios cerebelares", "Responsável pela síntese de proteínas cerebelares", "Parasitas que afetam as paredes cerebelares", "É o que você tinha quando criança"]

let answers4 = ["É composto de corpos celulares e neurônios", "É composto por proteínas", "É composto por água", "É composto por lipídeo"]

let answers5 = ["Dar equilíbrio", "Pensar", "Gerar emoções", "Responsável pelo armazenamento das memórias"]

let answers6 = ["É responsável pelas vias de comunicação entre o SNC e os locais externos do SNC", "Proteger o cerebelo", "Produz os glóbulos brancos presentes em todo corpo humano", "Distribui os nutrientes para o cérebro"]

function wrongAnswer(id) {
    let screen = window.screen.width
    if (screen <= 550 || DTM) {
        if (id == 'wrong1') {
            document.getElementById('w1Popup').style.display = 'flex'
        } else if (id == 'wrong2') {
            document.getElementById('w2Popup').style.display = 'flex'
        } else if (id == 'wrong3') {
            document.getElementById('w3Popup').style.display = 'flex'
        }
    }
    else {
        totalPoints--
        anotherQuestion()
        timer.removeAttribute('style')
        setTimeout(() => {
            if (isClock) {
                timer.style.display = 'flex'
            }
        }, 1);
    }
}

function correctAnswer() {
    let screen = window.screen.width
    if (screen <= 550 || DTM) {
        document.getElementById('correctPopup').style.display = 'flex'
    }
    else {
        anotherQuestion()
        timer.removeAttribute('style')
        setTimeout(() => {
            if (isClock) {
                timer.style.display = 'flex'
            }
        }, 1);
    }
}

function goToQuestion() {
    document.getElementById('imgSection').style.display = 'none'
    document.getElementById('questions').removeAttribute('style')
    typeOfPage = 'questionPage'
    timer.removeAttribute('style')
    setTimeout(() => {
        if (isClock) {
            timer.style.display = 'flex'
        }
    }, 1);
}

// Mobile Script
function closePopup() {
    document.getElementById('correctPopup').removeAttribute('style')
    document.getElementById('w1Popup').removeAttribute('style')
    document.getElementById('w2Popup').removeAttribute('style')
    document.getElementById('w3Popup').removeAttribute('style')
}

function popupCorrectAnswer() {
    closePopup()
    anotherQuestion()
    timer.removeAttribute('style')
    setTimeout(() => {
        if (isClock) {
            timer.style.display = 'flex'
        }
    }, 1);
}

function popupWrongAnswer() {
    closePopup()
    totalPoints--
    anotherQuestion()
    timer.removeAttribute('style')
    setTimeout(() => {
        if (isClock) {
            timer.style.display = 'flex'
        }
    }, 1);
}

// All: Auto match machine theme
let isDark = window.matchMedia("(prefers-color-scheme: dark)")
let isHigh = window.matchMedia("(prefers-contrast: more)")

if (isDark.matches) {
    changeTheme()
    console.log('Auto-changed theme to Dark Mode!')
}

if (isHigh.matches) {
    highContrastTheme()
    console.log('Aut-changed theme to High Contrast!')
}

// Dev Keys
function devKeysFlyout() {
    if (!isDevOpen) {
        isDevOpen = true
        document.getElementById('DevF').style.display = 'grid'
    } else {
        isDevOpen = false
        document.getElementById('DevF').removeAttribute('style')
        if (!isInElectron) {
            document.getElementById('DevF').style.top = '160px'
        }
        let screen = window.screen.width
        if (screen <= 550) {
            document.getElementById('DevF').style.top = '260px'
        }
    }
}

function correctAnswerBTN() {
    document.getElementById('correct').style.boxShadow = '0 0 20px #000'
    if (darkTheme || highContrast) {
        document.getElementById('correct').style.boxShadow = '0 0 20px #f0f8ff'
    }
}

function reloadQuestion() {
    let qOfTime
    switch (actualQuestion) {
        case 0:
            qOfTime = answers1
            break;
        case 1:
            qOfTime = answers2
            break;
        case 2:
            qOfTime = answers3
            break;
        case 3:
            qOfTime = answers4
            break;
        case 4:
            qOfTime = answers5
            break;
        case 5:
            qOfTime = answers6
            break;
    }
    document.getElementById('a1').innerText = qOfTime[0]
    document.getElementById('cAnswer').innerText = qOfTime[0]
    document.getElementById('a2').innerText = qOfTime[1]
    document.getElementById('w1Answer').innerText = qOfTime[1]
    document.getElementById('a3').innerText = qOfTime[2]
    document.getElementById('w2Answer').innerText = qOfTime[2]
    document.getElementById('a4').innerText = qOfTime[3]
    document.getElementById('w3Answer').innerText = qOfTime[3]
    let screen = window.screen.width
    if (screen <= 550) {
        document.getElementById('a1').innerText = ''
        document.getElementById('a2').innerText = ''
        document.getElementById('a3').innerText = ''
        document.getElementById('a4').innerText = ''
    }
}

let isClock = true
function disableClock() {
    if (isClock) {
        isClock = false
        timer.removeAttribute('style')
    } else {
        isClock = true
        if (typeOfPage != 'endPage' && typeOfPage != 'introPage') {
            timer.style.display = 'flex'
        }
    }
}

let DTM = false
function deskToMobile() {
    let PB = document.getElementById('quizProgress')
    if (!DTM) {
        DTM = true
        PB.style.bottom = 'auto'
        PB.style.top = '0px'
        PB.style.height = '40px'
        document.getElementById('PBAnim').style.height = '40px'
    } else {
        DTM = false
        PB.removeAttribute('style')
        document.getElementById('PBAnim').removeAttribute('style')
    }
}

function EDK() {
    if (!DeveloperKeys) {
        console.log('Alerta: uma variável necessária está definida como False! Favor, alterá-la')
    } else {
        console.log('Confirmada a validade da variável, DevKeys habilitado')
        document.getElementById('OpenDevKeys').style.display = 'none'
    }
}