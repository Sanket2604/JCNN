window.onscroll = function() {
    var top = window.scrollY;
    if (top>=40) {
        document.querySelector('.nav').classList.add('active');
    }
    else{
        document.querySelector('.nav').classList.remove('active');
    }
    
    if (top>=200) {
        document.querySelector('.gototop').classList.add('active');
    }
    else{
        document.querySelector('.gototop').classList.remove('active');
    }

}
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click',() => {
    if(menuBtn.classList.contains('open')) {
        menuBtn.classList.remove('open');
    }
    else {        
        menuBtn.classList.add('open');
    }
});

function toggleSideBar(){
    document.querySelector('.sidebar').classList.toggle('slide');
    document.querySelector('.backdrop').classList.toggle('back');
}
function sideBarClose(){
    document.querySelector('.sidebar').classList.remove('slide');
    document.querySelector('.menu-btn').classList.remove('open');
    document.querySelector('.backdrop').classList.remove('back');
}
document.querySelector('.backdrop').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('slide');
    document.querySelector('.menu-btn').classList.remove('open');
    document.querySelector('.backdrop').classList.remove('back');
});
