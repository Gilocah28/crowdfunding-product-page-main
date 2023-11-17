const navMobile = document.querySelector('.mobile-link')

const navOpenMenu = document.getElementById('open-menu')
const navCloseMenu = document.getElementById('close-menu')
const blur1 = document.querySelector('.blur1')

navOpenMenu.addEventListener('click',()=>{
    navOpenMenu.classList.toggle('active-hide')
    navCloseMenu.classList.toggle('active-show')
    navMobile.classList.toggle('active')
    blur1.classList.toggle('blur')
})

navCloseMenu.addEventListener('click',()=>{
    navOpenMenu.classList.toggle('active-hide')
    navCloseMenu.classList.toggle('active-show')
    navMobile.classList.toggle('active')
    blur1.classList.toggle('blur')
})

const aboutMobilebtn = document.querySelector('.about')

aboutMobilebtn.addEventListener('click',()=>{
    navOpenMenu.classList.toggle('active-hide')
    navCloseMenu.classList.toggle('active-show')
    navMobile.classList.toggle('active')
    blur1.classList.remove('blur')
})