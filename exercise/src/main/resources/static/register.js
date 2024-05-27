    var usernameTextbox = document.querySelector('#username')

    usernameTextbox.addEventListener('blur', ()=>{
        var user ={
        'username': usernameTextbox.value
        }
        fetch('/users/register', {
            method:'post',
            headers:{
            'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then((responseEntity)=> { return responseEntity.json()})
        .then((foundData)=>{
            if (foundData ===true){
                console.log('Username is already used')
                usernameTextbox.focus()
                usernameTextbox.select()
                showErrorApplication(()=>{
                console.log("we are now in the callback function")
                })
            }
        })
    })

    function showErrorApplication(callback){
        console.log("we are in the step of showErrorApplication")
        var i =0
        var animationInterval= setInterval(()=>{
            i++
            usernameTextbox.style.backgroundColor = `rgb(${i},0,0)`
                if(i=255){
                    clear.Interval(animationInterval);
                    console.log("done executing")
                    callback()
                }
            }, 5)
    }