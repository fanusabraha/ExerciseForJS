        var newuser =[]
    submitbtn.addEventListener( 'click', ()=>{
        var username= document.querySelector("#username")
        var password= document.querySelector("#password")
        if (username.value=='' || password.value==''){ console.log(`please enter email and password`)}
        else {console.log(`you submitted valid data`)
        var userdata={ "username":username.value,
                        "password": password.value
            }
            newuser.push(userdata)
        }
        })

        var usernameBtn= document.querySelector("#username")
        // u can not get a data in GetMapping only in postMapping but u can in header of getMapping
//        usernameBtn.addEventListener('blur',()=>{
//        fetch('http://localhost:8080/users/exists').then((response)=>{console.log(response)})
//        })
        // sending data using the headers in the GetMapping

//        usernameBtn.addEventListener('blur',()=>{
//                fetch(`http://localhost:8080/users/exists?username=${username.value}&password=${password.value}`)
//                .then((response)=> response.json())
//                .then((data)=> {console.log(data)})})
            usernameBtn.addEventListener('blur',()=>{
                    var user= {"username":username.value, "password":password.value}
                    fetch(`http://localhost:8080/users/exists`,
                    {method:"post",
                    headers:{ "content-type": "application/json"},
                    body:JSON.stringify(user)
                    })
                    .then((response)=> response.json())
                    .then((data)=> {console.log(data)})
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