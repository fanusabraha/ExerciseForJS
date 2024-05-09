        var user =[]
 submitbtn.addEventListener( 'click', ()=>{
        var username= document.querySelector("#username")
        var password= document.querySelector("#password")
        if (username.value=='' || password.value==''){ console.log(`please enter email and password`)}
        else {console.log(`you submitted valid data`)
        var userdata={ "username":username.value,
                        "password": password.value
            }
            user.push(userdata)
        }
        })

        submitbtn.addEventListener('click', submitBtnClick)
        function submitBtnClick () {alert(`i have been clicked`)}
        var submitButton = document.querySelector("#submitbtn")
                console.log(`${submitButton}`)

        submitButton.addEventListener('focus', function(){console.log(`focused on the inputs`)})

        document.getElementById("submitbtn").addEventListener("mouseover",
                                            function(){this.style.backgroundColor="blue"})
        document.getElementById("submitbtn").addEventListener("mouseout",
                                            function(){this.style.backgroundColor="green"})