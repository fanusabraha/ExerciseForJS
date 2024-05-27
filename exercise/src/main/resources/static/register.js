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
            }
        })
    })