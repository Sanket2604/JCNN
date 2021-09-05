let tl = gsap.timeline({scrollTrigger:{
    trigger:".bg1",
    start:"top 100%",
}})
.from('.bg1', { rotateZ: "-30deg" , opacity: 0, ease: 'power1', duration: 1})
.from('.c1', { x: '+50%', opacity: 0 , ease: 'power3', duration: 1})

let t2 = gsap.timeline({scrollTrigger:{
    trigger:".bg2",
    start:"top 90%",
}})
.from('.bg2', { rotateZ: "+30deg" , opacity: 0, ease: 'power1', duration: 1})
.from('.c2', { x: '-50%', opacity: 0 , ease: 'power3', duration: 1})

let t3 = gsap.timeline({scrollTrigger:{
    trigger:".bg3",
    start:"top 90%",
}})
.from('.bg3', { rotateZ: "-30deg" , opacity: 0, ease: 'power1', duration: 1})
.from('.c3', { x: '+50%', opacity: 0 , ease: 'power3', duration: 1})

let t4 = gsap.timeline({scrollTrigger:{
    trigger:".bg4",
    start:"top 90%",
}})
.from('.bg4', { rotateZ: "+30deg" , opacity: 0, ease: 'power1', duration: 1})
.from('.c4', { x: '-50%', opacity: 0 , ease: 'power3', duration: 1})