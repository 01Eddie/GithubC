//interfaz de usuario (ui)

class UI {
    constructor() {
        this.profile = document.getElementById('profile'); //Aqui obtendra el perfil(profile)
    }
    showProfile(user){ //Esta clase esta creada aqui para mostrar
        //este showProfile tiene que recibir la informacion de un usuario
        //console.log(user);//Esto muestra la informacion por json de usuario buscado
        /* aqui consultara a la api sobre la informacion que desea obtener en json */ this.profile.innerHTML = `
            <div class="card mt-2 animate__animated animate__bounce">
                <img src="${user.avatar_url}" class="card-img-top" />    
            <div class="card-body">
            <h3 class="card-title">${user.name} / ${user.login}</h3>
            <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">Ir a su perfil de github</a>
            <span class="badge badge-success">
            seguidores: ${user.followers}
            </span>
            <span class="badge badge-primary">
            Sigue: ${user.following}
            </span>
            <span class="badge badge-warning">
            Compañia: ${user.company}
            </span>
            <span class="badge badge-info">
            Blog: ${user.blog}
            </span>
            </div>
            </div>
        `;
        this.clearMessage();
    }

    showMessage(message, cssClass){ //Esto permitira que muestre un messaje
       //permite mostrar un mensaje si es malo o es bueno osea si existe o no
        const div = document.createElement('div');//Crear elementos de html
        div.className = cssClass;
        div.appendChild(document.createTextNode(message)); //Aqui vendra el contenido
        const content = document.querySelector('.row');//Fijarse esta clase, es donde queremos agregar un mensjae
        const profile = document.querySelector('#profile')  //inserta algo de la fila
        content.insertBefore(div, profile); //aqui ira el mensaje, pero antes de ese profile debe ingresar el mensaje(div) es por eso que esta (div, profile)

        setTimeout(() => this.clearMessage(), 3000); //esto hace que salga el boton solo por 3 seg. si es que no encuentra ningun usuario el filtro

    }
    clearMessage(){
        const alertFound = document.querySelector('.alert');//esto viene el mensaje con el css del showmessage de index.js, fijarse
        if (alertFound) {
            alertFound.remove();
        }
    }

    showRepositories(repositories){
        //console.log(repositories);
        let template = '';//esporque inicia en blanco para de alli rellenarlo por la cantidad de repo
        //como hay varios proyectos, tenemos que recorrerlo asi que es por eso que se ha tenido que cortar, para que recorra los e
         repositories.forEach(repo => {
            template += `
            <div class="card card-body mt-2 animated bounceInUp">
                <div class="row">
                    <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">
                        lenguaje: ${repo.language}
                        </span>
                        <span class="badge badge-success">
                        forks: ${repo.forks_count}
                        </span>
                    </div>
                </div>
            </div>
            `;
         });
        
        document.getElementById('repositories').innerHTML = template; //aqui se almacenara los repositorios que tienes
    }


    //Esto lo creo al ultimo
    reset(){
        this.profile.innerHTML = `
        <div class="container mt-5">
            <h3 class="display-2 text-center">Aprenda algo nuevo cada dia</h3>
        </div>
        `
    }
}
module.exports = UI;