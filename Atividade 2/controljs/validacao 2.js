function validar2(){
    var email = formulario2.email.value;
    var senha = formulario2.senha.value;
    
    if (email ==""){
        alert("Preencha o campo e-mail");
        formulario2.email.focus();        
        return false;
    }
    if (senha ==""){
        alert("Preencha o campo senha");
        formulario2.senha.focus();        
        return false;
    }
    return true;
}