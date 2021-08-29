const timeline = gsap.timeline({ defaults: { duration: 0.5 }})

timeline
    .from('.logo', { y: '-150%' , opacity: 0 ,ease: 'circ', delay: 1 })
    .from('.p', { opacity: 0 , ease: 'sine', duration: 1})
    .from('.sec1', { x: '-50%' , opacity: 0, scale: 0, ease: 'sine'})
    .from('.sec3', { x: '+50%' , opacity: 0, scale: 0, ease: 'sine'})
    .from('.sec4', { x: '-50%' , opacity: 0, scale: 0, ease: 'sine'})
    .from('.sec5', { x: '+50%' , opacity: 0, scale: 0, ease: 'sine'})
    // .from('.sec5', { x: '-50%' , opacity: 0, scale: 0, ease: 'sine'})