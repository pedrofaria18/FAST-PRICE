//Página inicial de Login
const LOGIN_URL = "login.html";

// Objeto para o banco de dados de usuários baseado em JSON
var db_usuarios = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};

// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) { //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else { //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


// Dados de usuários para serem utilizados como carga inicial
const dadosIniciais = {
    usuarios: [
        { "id": generateUUID(), "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com" },
        { "id": generateUUID(), "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com" },
    ]
};


// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp() {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }

    // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
    // Obtem a string JSON com os dados de usuários a partir do localStorage
    var usuariosJSON = localStorage.getItem('db_usuarios');

    // Verifica se existem dados já armazenados no localStorage
    if (!usuariosJSON) { // Se NÃO há dados no localStorage

        // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

        // Copia os dados iniciais para o banco de dados 
        db_usuarios = dadosIniciais;

        // Salva os dados iniciais no local Storage convertendo-os para string antes
        localStorage.setItem('db_usuarios', JSON.stringify(dadosIniciais));
    } else { // Se há dados no localStorage

        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        db_usuarios = JSON.parse(usuariosJSON);
    }
};


// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser(login, senha) {

    // Verifica todos os itens do banco de dados de usuarios 
    // para localizar o usuário informado no formulario de login
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];

        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.login = usuario.login;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.nome = usuario.nome;

            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    // Se chegou até aqui é por que não encontrou o usuário e retorna falso
    return false;
}

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser() {
    usuarioCorrente = {};
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    window.location = LOGIN_URL;
}

function addUser(nome, login, senha, email) {

    // Cria um objeto de usuario para o novo usuario 
    let newId = generateUUID();
    let usuario = { "id": newId, "login": login, "senha": senha, "nome": nome, "email": email };

    // Inclui o novo usuario no banco de dados baseado em JSON
    db_usuarios.usuarios.push(usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
}

function setUserPass() {

}


// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp();


/*Validar botão "Logar" da página de login*/
btn_logar.disabled = true;
let validaLogin = () => {
    if (username.value.lenght == 0 || password.value.lenght == 0)

        btn_logar.disabled = true;
    else
        btn_logar.disabled = false;
}
username.onchange = validaLogin;
password.onchange = validaLogin;
/* final Validar botão "Logar" da página de login*/


/*Validar botão "Cadastrar" do formulário de Cadastro*/
btn_salvar.disabled = true;
let validaCadastro = () => {
    if (txt_senha2.value.lenght == 0 || txt_senha.value.lenght == 0 || txt_email.value.length == 0 || txt_nome.value.length == 0 || txt_login.value.length == 0)

        btn_salvar.disabled = true;
    else
        btn_salvar.disabled = false;
}
txt_login.onchange = validaCadastro;
txt_nome.onchange = validaCadastro;
txt_email.onchange = validaCadastro;
txt_senha.onchange = validaCadastro;
txt_senha2.onchange = validaCadastro;
/* final Validar botão "Cadastrar" do formulário de Cadastro*/


/* CARACTERES BLOQUEADOS */
txt_login.onchange = () => console.log("change", txt_login.value);
txt_login.oninput = () => {
    let ultimoCarater = txt_login.value.charAt(txt_login.value.length - 1);
    console.log("ultimoCarater", ultimoCarater);
    let caracteresInválidos = '.+-*/,!@#$%¨&*()_+={}][?/;.,|""';
    if (caracteresInválidos.indexOf(ultimoCarater) >= 0)
        txt_login.value = txt_login.value.substr(0, txt_login.value.length - 1);
};

txt_nome.onchange = () => console.log("change", txt_nome.value);
txt_nome.oninput = () => {
    let ultimoCarater = txt_nome.value.charAt(txt_nome.value.length - 1);
    console.log("ultimoCarater", ultimoCarater);
    let caracteresInválidos = '0123456789.+-*/,!@#$%¨&*()_+={}][?/;.,|""';
    if (caracteresInválidos.indexOf(ultimoCarater) >= 0)
        txt_nome.value = txt_nome.value.substr(0, txt_nome.value.length - 1);
};
/* FINAL CARACTERES BLOQUEADOS */