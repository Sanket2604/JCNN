let t1 = gsap.timeline({scrollTrigger:{
    trigger:".cont1",
    start:"top 60%",
}})
.from('.heading', { y: '-100%', opacity: 0, ease: 'sine', duration: 0.25})
.from('.list, .listele', { y: '50px', opacity: 0, ease: 'sine', stagger: 0.25, delay:0})
.from('.btn_cont', { y: '50px', opacity: 0, ease: 'sine'})

function reveal(){
    const cname = document.getElementById('n').value
    const email = document.getElementById('e').value
    const code = document.getElementById('cno').value
    const phone = document.getElementById('pno').value
    const job = document.getElementById('j').value

    if( cname !== '' && email !== '' && job!== '' && phone !== ''){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            if(phone.match(/^\d{10}$/) || phone.match(/^\d{9}$/)){
                document.querySelector('.option').classList.add('active')
                document.querySelector('.submit_cont').innerHTML="Submit"
            }
            else{
                alert("Please enter a valid Phone Number")
            }
        }
        else{
            alert("Please enter a valid email address")
        }
    }
    else{
        if(cname === ''){
            alert("Please Enter Your Name")
        }
        else if(email === ''){
            alert("Please Enter Your Email Id")
        }
        else if(phone === ''){
            alert("Please Enter Your Phone Number")
        }
        else if(job === ''){
            alert("Please Enter The Job Position")
        }
    }
}
function submit(){
    const cname = document.getElementById('n').value
    const email = document.getElementById('e').value
    const code = document.getElementById('cno').value
    const phone = document.getElementById('pno').value
    const job = document.getElementById('j').value

    if( cname !== '' && email !== '' && job!== '' && phone !== ''){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            if(phone.match(/^\d{10}$/) || phone.match(/^\d{9}$/)){
                var file = event.srcElement.files[0];
                var reader = new FileReader();
                reader.readAsBinaryString(file);
                reader.onload = function () {
                    var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
                    Email.send({
                        Host: "smtp.gmail.com",
                        Username : "jcnnwebsite@gmail.com",
                        Password : "JCNN$#@!2",
                        To : "admin@jcnnexecutives.com",
                        From : "jcnnwebsite@gmail.com",
                        Subject : "New Candidate Submission",
                        Body : "<b>Name of the Candidate: </b>"+cname+
                                "<br><b>Email Id: </b>"+email+
                                "<br><b>Phone Number:</b> +"+code+" - "+phone+
                                "<br><b>Job Position: </b> "+job,
                        Attachments : [{
                            name : file.name,
                            data : dataUri
                            }]
                    }).then(function(response){
                        if(response == 'OK'){
                            document.querySelector('.thankyou').classList.toggle('active')
                            setTimeout(() => {  location.reload(); }, 5000)
                        }
                        else{
                            document.querySelector('.error').classList.toggle('active')
                            setTimeout(() => {  location.reload(); }, 5000)
                        }
                    });
                };
            }
            else{
                alert("Please enter a valid Phone Number")
            }
        }
        else{
            alert("Please enter a valid email address")
        }
    }
    else{
        if(cname === ''){
            alert("Please Enter Your Name")
        }
        else if(email === ''){
            alert("Please Enter Your Email Id")
        }
        else if(phone === ''){
            alert("Please Enter Your Phone Number")
        }
        else if(job === ''){
            alert("Please Enter The Job Position")
        }
    }
}