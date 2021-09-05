
    let tl = gsap.timeline({scrollTrigger:{
        trigger:".cont1",
        start:"top 50%",
    }})
    .from('.he1', { scale: 0, opacity: 0, ease: 'circ', delay: 1})
    .from('.grid_ele', { opacity: 0, ease: 'power3', stagger: 0.5})