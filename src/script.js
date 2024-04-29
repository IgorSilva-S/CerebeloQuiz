// Flyout Script
let accessIcons = document.querySelectorAll('.accessButton')
let TBWindowOpen = false
let accessIconsToggle = true
let isClock = false
let darkTheme = false
let highContrast = false
let isDevOpen = false

let DeveloperKeys = true

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
    document.getElementById('FOpen').removeAttribute('style')

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
    isDevOpen = false
    document.getElementById("TBWF").removeAttribute('style')
    document.getElementById("DevF").removeAttribute('style')
    document.getElementById('FOpen').removeAttribute('style')
}

document.getElementById('TBWindow').addEventListener('click', () => {
    if (!TBWindowOpen) {
        TBWindowOpen = true
        document.getElementById("TBWF").style.display = 'grid'
        document.getElementById('FOpen').style.display = 'block'
    } else {
        TBWindowOpen = false
        isDevOpen = false
        document.getElementById("TBWF").removeAttribute('style')
        document.getElementById("DevF").removeAttribute('style')
        document.getElementById('FOpen').removeAttribute('style')
    }
})

function closeFlyout() {
    TBWindowOpen = false
    isDevOpen = false
    document.getElementById("TBWF").removeAttribute('style')
    document.getElementById("DevF").removeAttribute('style')
    document.getElementById('FOpen').removeAttribute('style')
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
    document.getElementById('FOpen').removeAttribute('style')
}

// Quiz Script

let answered = []
let counter = 0
let totalPoints = 6
let questions = ["Quais são as consequências de danos no cerebelo?", "Qual é a composição do cerebelo?", "O que é o Vermis?", "Do que é composto o líquido cinzento?", "Qual a função do cerebelo?", "Qual a função do líquido branco?"]

function anotherQuestion() {
    let isChoosed = false
    let isFinished = false
    do {
        let actualQuestion = Math.floor(Math.random() * 6)
        let questionAnswer = []
        let repeatQuestion = 1
        if (answered[0] != actualQuestion && answered[1] != actualQuestion && answered[2] != actualQuestion && answered[3] != actualQuestion && answered[4] != actualQuestion && answered[5] != actualQuestion) {
            answered.push(actualQuestion)
            counter++
            document.getElementById('questNum').innerText = counter
            document.getElementById('writeQuestion').innerText = questions[actualQuestion]
            isChoosed = true
        } else if (counter == 6) {
            alert(`Você terminou o Quiz, e acertou ${totalPoints}/6`)
            isChoosed = true
            isFinished = true
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
            document.getElementById('a2').innerText = qOfTime[1]
            document.getElementById('a3').innerText = qOfTime[2]
            document.getElementById('a4').innerText = qOfTime[3]
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
}

let answers1 = ["Falta de coordenação motora e equilíbrio", "Aumento da capacidade de coordenação motora", "Redução da pressão arterial", "Chance de desenvolver esclerose lateral amiotrófica"]

let answers2 = ["Tecidos nervosos com substâncias cinzentas e brancas", "Lipídios", "Compõe-se de uma parte líquida (plasma)", "Ossos a músculos"]

let answers3 = ["Estrutura anatômica de ligação entre os dois hemisférios cerebelares", "Responsável pela síntese de proteínas cerebelares", "Parasitas que afetam as paredes cerebelares", "É o que você tinha quando criança"]

let answers4 = ["É composto de corpos celulares e neurônios", "É composto por proteínas", "É composto por água", "É composto por lipídeo"]

let answers5 = ["Dar equilíbrio", "Pensar", "Gerar emoções", "Responsável pelo armazenamento das memórias"]

let answers6 = ["É responsável pelas vias de comunicação entre o SNC e os locais externos do SNC", "Proteger o cerebelo", "Produz os glóbulos brancos presentes em todo corpo humano", "Distribui os nutrientes para o cérebro"]

function wrongAnswer() {
    totalPoints--
    anotherQuestion()
}

// Dev Keys
function devKeysFlyout() {
    if (!isDevOpen) {
        isDevOpen = true
        document.getElementById('DevF').style.display = 'grid'
    } else {
        isDevOpen = false
        document.getElementById('DevF').removeAttribute('style')
    }
}

function correctAnswerBTN() {
    document.getElementById('correct').style.boxShadow = '0 0 20px #000'
    if (darkTheme || highContrast) {
        document.getElementById('correct').style.boxShadow = '0 0 20px #f0f8ff'
    }
}
