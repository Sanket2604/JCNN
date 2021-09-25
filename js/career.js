
let tl = gsap.timeline({scrollTrigger:{
        trigger:".cont1",
        start:"top center",
    }})
    .from('.row', { y: '10%', opacity: 0, ease: 'power1', delay: 1})