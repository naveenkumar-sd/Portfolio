
// for responsive navbar


function toggleMenu() {
    const menu = document.querySelector('.secondary-list');
    const icon = document.querySelector('.secondary-icon');
    menu.classList.toggle("open");
    icon.classList.toggle('open')
}

// for sticky navbar

window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    var navLogo = document.querySelector('.nav-logo p');
    nav.classList.toggle("sticky-navContainer", window.scrollY > 0);
    navLogo.classList.toggle("nav-logo-active", window.scrollY > 0);
})


//for sticky secondary navbar
window.addEventListener('scroll', function () {
    var nav = document.querySelector('.secondary-container');
    var navlogo2 = this.document.querySelector('.nav-logos p');
    nav.classList.toggle("sticky-secondary-navContainer", window.scrollY > 0);
    navlogo2.classList.toggle("nav-logo-active2", window.scrollY > 0)
})




// for mediaqueries(600)px bg 
const bg=document.querySelector('.bg')

const scale12= (number, inMin, inMax, outMin, outMax)=> {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
let load=0

let int=setInterval(blurring,30)

function blurring(){
    load++

    if(load>99){
        clearInterval(int)
    }
    bg.style.filter=`blur(${scale12(load,0,100,30,0)}px)`

}


//section pic container

const secPic=document.querySelector('.section_pic_container');


const scale1= (number, inMin, inMax, outMin, outMax)=> {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
let load1=0

let int1=setInterval(blurring1,30)

function blurring1(){
    load1++

    if(load1>99){
        clearInterval(int1)
    }
    secPic.style.filter=`blur(${scale1(load1,0,100,20,0)}px)`


}







// for active link

const navLinksEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'home';

window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 2)) {
            currentSection = sectionEl.id;
        };

        navLinksEls.forEach(navLinkEl => {
            if (navLinkEl.href.includes(currentSection)) {
                document.querySelector('.active').classList.remove('active');
                navLinkEl.classList.add('active');
            }

        });

    })
})

// for secondary active link

// const navLinksEls2 = document.querySelectorAll('.nav-items2');
// console.log(navLinksEls2);
// const sectionEls2 = document.querySelectorAll('.section');

// let currentSection2 = 'home';

// window.addEventListener('scroll', () => {
//     sectionEls2.forEach(sectionEl => {
//         if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 2)) {
//             currentSection2 = sectionEl.id;
//         };

//         navLinksEls2.forEach(navLinkEl => {
//             if (navLinkEl.href.includes(currentSection2)) {
//                 document.querySelector('.active2').classList.remove('active2');
//                 navLinkEl.classList.add('active2');
//             }

//         });

//     })
// })

// if (navLinkEl.href.includes(currentSection2)) {
//     document.querySelector('.active2').classList.remove('active2');
//     navLinkEl.classList.add('active2');
// }




// carousel for pg lige

let imgs = document.getElementById('imgs')
let leftBtn = document.getElementById('left')
let rightBtn = document.getElementById('right')

let img = document.querySelectorAll('#imgs img')


let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 300}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

// for toggle-icon 



var icon=document.getElementById('darkmode-toggle')

// var figEl=document.getElementById('figText1')


icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        // icon.src="sun-img.png";
        // figEl.innerText="Light";
    }else{
        // icon.src="moon-img.png";
        // figEl.innerText="Dark"
    }
}



var icon=document.getElementById('darkmode-toggle2')

// var figEl=document.getElementById('figText1')

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        // icon.src="sun-img.png";
        // figEl.innerText="Light";
    }else{
        // icon.src="moon-img.png";
        // figEl.innerText="Dark"
    }
}
