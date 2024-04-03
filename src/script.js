document.body.addEventListener("mousemove",(e) => {
    let mPosix = e.clientX
    let mPosiy = e.clientY
    let mouseTrail = document.createElement('div')
    mouseTrail.setAttribute('class', "mouseTrail")
    mouseTrail.setAttribute('style', `top: ${mPosiy}px; left: ${mPosix}px`)
    mouseTrail.addEventListener('animationend', () => {
        mouseTrail.remove()
    })
    document.body.insertAdjacentElement('beforeend', mouseTrail)
})