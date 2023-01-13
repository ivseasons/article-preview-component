const share = document.getElementById("share-btn");
const close = document.getElementById("close-btn")
const menu = document.getElementById("popup")
const avatarInfo = document.getElementById("avatar")
const shareSvg = document.querySelector(".share-svg")
let buttonClicked = false

share.addEventListener("click", () => {
    menu.classList.toggle('show')  
    avatarInfo.classList.toggle('hide')
    
})

close.addEventListener("click", () => {
    menu.classList.remove('show')  
    avatarInfo.classList.remove('hide')
})


