//email:jcnnexecs@gmail.com   pass:noelnavneethfelix 
//linkedin: pass: JCNNExec12$#@!
function submit(){
    const cname = document.getElementById('n').value
    const email = document.getElementById('e').value
    const code = document.getElementById('cno').value
    const phone = document.getElementById('pno').value
    const text = document.getElementById('t').value

    if( cname !== '' && email !== '' && text!== '' && phone !== ''){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            if(phone.match(/^\d{10}$/)){
                Email.send({
                    Host: "smtp.gmail.com",
                    Username : "jcnnwebsite@gmail.com",
                    Password : "JCNN$#@!2",
                    To : "admin@jcnnexecutives.com",
                    From : "jcnnwebsite@gmail.com",
                    Subject : "New Client Submission",
                    Body : "<b>Name of the Client: </b>"+cname+
                            "<br><br><b>Email Id: </b>"+email+
                            "<br><br><b>Phone Number:</b> +"+code+" "+phone+
                            "<br><br><b>Requirements: </b> <br> "+text
                    }).then(function(response){
                        if(response == 'OK'){
                            document.querySelector('.thankyou').classList.toggle('active')
                        }
                        else{
                            document.querySelector('.error').classList.toggle('active')
                        }
                });
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
        else if(text === ''){
            alert("Please Enter Your Requirmeents")
        }
    }
}