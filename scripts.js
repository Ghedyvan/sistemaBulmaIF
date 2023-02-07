function login(){
    var usuario = document.getElementById("userAdm").value;
    var senha = document.getElementById("senhaAdm").value;

    if(usuario == "teste" && senha == "teste"){         
        alert("Usuário fez login com sucesso!")      
        // window.location.href = "scanner.html";
    }
    else{
        alert("Usuário e/ou senha incorreto(s)!")
        limparDados();
    }
}  

function limparDados(){
    document.getElementById("userAdm").value = "";
    document.getElementById("senhaAdm").value = "";
}

function Aluno(){
    var nome;
    var turma;
    var status;
}

function dadosAluno(){
    var nome = document.querySelector(".nomedoaluno");
    var status = document.querySelector(".statusdoaluno");
    var aluno = new Aluno;
    aluno.nome = "Claudinho";
    aluno.status = "Ativo"
    nome.textContent = aluno.nome;
    status.textContent = aluno.status;
    limparMatricula();
}
function alerta(){
    alert("TESTANDO");
}
function limparMatricula(){
    document.getElementById("numeroDeMatricula").value = '';
}
