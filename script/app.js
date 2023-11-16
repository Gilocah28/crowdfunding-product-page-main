const navMobile = document.querySelector('.mobile-link')

const navOpenMenu = document.getElementById('open-menu')
const navCloseMenu = document.getElementById('close-menu')

navOpenMenu.addEventListener('click',()=>{
    navOpenMenu.classList.toggle('active-hide')
    navCloseMenu.classList.toggle('active-show')
    navMobile.classList.toggle('active')
})

navCloseMenu.addEventListener('click',()=>{
    navOpenMenu.classList.toggle('active-hide')
    navCloseMenu.classList.toggle('active-show')
    navMobile.classList.toggle('active')
})