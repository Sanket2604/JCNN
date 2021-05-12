
let tl = gsap.timeline({scrollTrigger:{
        trigger:".cont1",
        start:"top center",
    }})
    .from('.jcard', { y: '100%', opacity: 0, ease: 'power1', stagger: 0.5, delay: 0.5})