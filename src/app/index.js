const UI = require('./ui');
const Github = require('./github');

const { client_id, client_secret } = require('./config.json');

//inicializacion de clases
const github = new Github(client_id, client_secret); //estamos llamando el metodo constructor
const ui = new UI();// aqui estamos llamando al constructor ui 

//console.log(github.fetchUser('01Eddie')); //aqui esta la peticion de prueba, esto sera la consulta a la api

//elementos DOM
const userForm = document.getElementById('userForm'); //Verificar este ID viene del html

//Eventos DOM
userForm.addEventListener('submit', (evento) => {
    //console.log('enviando');
    //Capturaremoe el campo de la caja
    //const textSearch = document.getElementById('textSearch');//Esto captura todo el codigo, las etiquetas y lo que buscas
    const textSearch = document.getElementById('textSearch').value; 
    //console.log(textSearch);
    if (textSearch !== '') {
        github.fetchUser(textSearch) // esto captura el json que busca
            .then(data => {
                //console.log(data)
                //if (data.message === 'Not Found') { //Fijarse el json que responde de alli se saca esta condicional --- se tiene que cambiar porque tiene dos busquedas y por eso altera asi que cambia a 
                if (data.userData.message === 'Not Found') { 
                    //console.log('Usuario no existe');
                    ui.showMessage('Usuario no encontrado', 'alert alert-danger col-md-12 mt-2');//aqui ira el mensaje y su diseño
                }else{
                //Renderizamos el perfil
                //ui.showProfile(data);//de aqui recibire los datos es por eso que esta data, esto cambia tambien userdata
                ui.showProfile(data.userData);
                ui.showRepositories(data.repositories);
                console.log(data.repositories);
                }
            });
    } else{
        ui.reset(); //este else agrego fuera del videotutorial
    }
    evento.preventDefault();
});
