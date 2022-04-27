import {checkMenu} from './App.js';
class LoginModule{
    
    sendCredential(){
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const credendial = {
            "login": login,
            "password": password,
        }

        let promise = fetch('login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            body: JSON.stringify(credendial) 
        })

        promise.then(response => response.json())
               .then(response => {
                    document.getElementById('info').innerHTML = response.info;
                    if(response.auth){
                        checkMenu();
                        document.getElementById('content').innerHTML = "";
                    }
               })
               .catch(error =>{
                    document.getElementById('info').innerHTML = "Ошибка сервера: "+error;
                    hiddenBtnsMenu();
                    showBtnLogin();
                    document.getElementById('content').innerHTML = "";
               })


    }
}

const loginModule = new LoginModule();

export {loginModule};