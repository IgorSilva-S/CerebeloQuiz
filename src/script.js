/*document.body.addEventListener("mousemove",(e) => {
    let mPosix = e.clientX
    let mPosiy = e.clientY
    let mouseTrail = document.createElement('div')
    mouseTrail.setAttribute('class', "mouseTrail")
    mouseTrail.setAttribute('style', `top: ${mPosiy}px; left: ${mPosix}px`)
    mouseTrail.addEventListener('animationend', () => {
        mouseTrail.remove()
    })
    document.body.insertAdjacentElement('beforeend', mouseTrail)
})*/

let accessIcons = document.querySelectorAll('.accessButton')
let TBWindowOpen = false
let accessIconsToggle = true

function enableAccessibiltyButtons() {
 if (!accessIconsToggle) {
    accessIcons.forEach((i) => {
        i.removeAttribute('style')
    })
    accessIconsToggle = true
    document.getElementById('ACSButtonInfo').innerText = 'Desabilitar botões de acessibilidade'
 } else {
    accessIcons.forEach((i) => {
        i.style.display = 'none'
    })
    accessIconsToggle = false
    document.getElementById('ACSButtonInfo').innerText = 'Habilitar botões de acessibilidade'
 }
 TBWindowOpen = false
 document.getElementById("TBWF").removeAttribute('style')

}

document.getElementById('TBWindow').addEventListener('click', () => {
    if (!TBWindowOpen) {
        TBWindowOpen = true
        document.getElementById("TBWF").style.top = '0'
    } else {
        TBWindowOpen = false
        document.getElementById("TBWF").removeAttribute('style')
    }
})