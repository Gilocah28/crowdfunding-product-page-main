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


const btnproject = document.querySelector('.thisProject')
const projectContainer = document.querySelector('.project-container')
btnproject.addEventListener('click',()=>{
    projectContainer.style.display = 'flex';
    blur1.classList.toggle('blur2')
})
document.getElementById('close').addEventListener('click',()=>{
    projectContainer.style.display = 'none';
    blur1.classList.remove('blur2')
})