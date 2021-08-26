function submit(){
    const cname = document.getElementById('n').value
    const email = document.getElementById('e').value
    const code = document.getElementById('cno').value
    const phone = document.getElementById('pno').value
    const job = document.getElementById('j').value

    if( cname !== '' && email !== '' && job!== '' && phone !== ''){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            if(phone.match(/^\d{10}$/)){
                var file = event.srcElement.files[0];
                var reader = new FileReader();
                reader.readAsBinaryString(file);
                reader.onload = function () {
                    const dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
                    Email.send({
                        SecureToken : "2f6399db-e75e-4f56-9c7a-e65c3ce6c166",
                        To : "umaymailme2604@gmail.com",
                        From : "optumusprime2604@gmail.com",
                        Subject : "New Candidate Submission",
                        Body : "<b>Name of the Candidate: </b>"+cname+
                                "<br><b>Email Id: </b>"+email+
                                "<br><b>Phone Number:</b> +"+code+" - "+phone+
                                "<br><b>Job Position: </b> <br> "+job,
                        Attachments : [{
                            name : file.name,
                            data : dataUri
                            }]
                        }).then(function(response){
                            if(response == 'OK'){
                                document.querySelector('.thankyou').classList.toggle('active')
                                setTimeout(() => {  location.reload(); }, 3000)
                            }
                            else{
                                document.querySelector('.error').classList.toggle('active')
                                setTimeout(() => {  location.reload(); }, 3000)
                            }
                    });
                }
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