class Github { //esto se exportara fijarse bien
    constructor(clientId, clientSecret){
        if (!clientId || !clientSecret) {
            return console.warn('Por favor ingrese un nombre de perfil o nombre de usuario');
        }
        this.client_id = clientId;
        this.client_secret = clientSecret;

        this.repos_count = 9;//esto hara poner el limite de repositorios que se van a ver en la pag.
        this.sort= "created: asc"; //esto hara que se ordene el repositorio ascendente o descendente
    }
//es para pedir un recurso = FETCH
    async fetchUser(user) {
        const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);


        const repositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repos_count}&sort=${this.sort}`); //Esto es los repositorios que se busca, agregando client_id=${this.client_id}&client_secret=${this.client_secret}, daremos una libre busqueda y no habra limite, ya que si hacemos sin eso tambien ejecutara pero solo hara 30 busquedas con eso se vuelve indefinido
    
        console.log(userDataRequest);
        
        const repositories = await repositoriesRequest.json();


        //Convertiremos a json
        //verificar que es asincrono asi que necesitamos await
        const userData = await userDataRequest.json();
        //console.log(userDataRequest);
        //esto verifica la prueba como va el codigo 
        //console.log(userData);//Con esto se obtiene los datos

        //return userData; // esto fue en un principio pero como tenemos mas datos se modifica

        return {
            userData,
            repositories
        };
    }
}
module.exports = Github;