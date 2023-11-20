const navMobile = document.querySelector('.mobile-link');
const navOpenMenu = document.getElementById('open-menu');
const navCloseMenu = document.getElementById('close-menu');
const blur1 = document.querySelector('.blur1');
const aboutMobilebtn = document.querySelector('.about');
const btnproject = document.querySelector('.thisProject');
const projectContainer = document.querySelector('.project-container');
const closeProjectBtn = document.getElementById('close');
const radioActive = document.querySelectorAll('.pledgeCon');
const container = document.querySelectorAll('.back-project-container');
const pledgeCount = document.querySelectorAll('.pledge-count');
const rewardBtn = document.querySelectorAll('.reward');
const continueBtn = document.querySelectorAll('.continue');
const thanksCon = document.querySelector('.thankyou-container')
const inputPledge = document.querySelectorAll('.input-pledge')
const btnGotIt = document.querySelector('.gotIt')


navOpenMenu.addEventListener('click', toggleMobileMenu);
navCloseMenu.addEventListener('click', toggleMobileMenu);
aboutMobilebtn.addEventListener('click', closeMobileMenu);

btnproject.addEventListener('click', showPledge);
closeProjectBtn.addEventListener('click', closePledge);

rewardBtn.forEach((btn) => {
    btn.addEventListener('click', showPledge);
});

radioActive.forEach((radioBtn, index) => {
    radioBtn.addEventListener('click', () => {
        updateStyling(index);
    });
});


function updateStyling(index) {
    container.forEach((con, conIndex) => {
        con.style.border = conIndex == index ? '1px solid hsl(176, 50%, 47%)' : '1px solid hsl(0, 0%, 83%)';
    });

    pledgeCount.forEach((pledge, pledgeIndex) => {
        pledge.style.display = pledgeIndex == index ? 'flex' : 'none';
    });
}

function toggleMobileMenu() {
    navOpenMenu.classList.toggle('active-hide');
    navCloseMenu.classList.toggle('active-show');
    navMobile.classList.toggle('active');
    blur1.classList.toggle('blur');
}

function closeMobileMenu() {
    navOpenMenu.classList.toggle('active-hide');
    navCloseMenu.classList.toggle('active-show');
    navMobile.classList.toggle('active');
    blur1.classList.remove('blur');
}

function showPledge() {
    projectContainer.style.display = 'flex';
    blur1.classList.toggle('blur2');
}

function closePledge() {
    projectContainer.style.display = 'none';
    blur1.classList.remove('blur2');
}


function proceedBtn (){
    thanksCon.style.display = 'block'
    blur1.classList.remove('blur');
}


continueBtn.forEach((btn) =>{
    btn.addEventListener('click',()=>{
        projectContainer.style.display = 'none';
        proceedBtn()
    })
})

btnGotIt.addEventListener('click',() => {
    thanksCon.style.display = 'none'
    blur1.classList.remove('blur2');
})


