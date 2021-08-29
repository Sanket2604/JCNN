
    let tl = gsap.timeline({scrollTrigger:{
        trigger:".cont1",
        start:"top 50%",
    }})
    .from('.he1', { scale: 0, opacity: 0, ease: 'circ', delay: 1})
    .from('.s1', { y:'+50%', opacity: 0 , ease: 'power'})
    .from('.s2', { x:'-50%', opacity: 0 , ease: 'power'})

    let t2 = gsap.timeline({scrollTrigger:{
        trigger:".cont3",
        start:"top 50%",
    }})
    .from('.s3', { x: '-50%', y: '-50%', opacity: 0, ease: 'power2'})
    .from('.s4', { x: '+50%', y: '-50%', opacity: 0, ease: 'power2'})

    // let split = new SplitText(".headerText")

    let t3 = gsap.timeline({scrollTrigger:{
        trigger:".cont4",
        start:"top 50%",
    }})
    .from('.he2', { scale: 0, opacity: 0, ease: 'circ', delay: 1})
    .from('.grid_ele', { opacity: 0, ease: 'power3', stagger: 0.5})

    let t4 = gsap.timeline({scrollTrigger:{
        trigger:".cont5",
        start:"top 60%",
    }})
    .from('.he3', { y:'+100%', scale: 0, opacity: 0, ease: 'circ'})
    .from('.o1', { y:'+50%', opacity: 0 , ease: 'power'})


    $(document).ready(function(){

        $(".owl-carousel1").owlCarousel({
            autoplay:false,
            nav: true,
            loop:true,
            navText : ["<div class='prev-slide'><i class='fa fa-chevron-left'></i></div>",
            "<div class='next-slide'><i class='fa fa-chevron-right'></i></div>"],
            smartSpeed:1000,
            slideTransition:'linear',
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1,
                },
                760:{
                    items:1,
                },
                1100:{
                    items:2,
                },
                2500:{
                    items:3,
                }
            }
        });
        
    });
    
    