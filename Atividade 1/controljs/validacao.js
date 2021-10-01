function validar(){
    var nome = formulario.nome.value;
    var endereco = formulario.endereco.value;
    var cidade = formulario.cidade.value;
    var cep = formulario.cep.value;
    var uf = formulario.uf.value;
    var data = formulario.data.value;
    if (nome ==""){
        alert("Preencha o campo Nome");
        formulario.nome.focus();        
        return false;
    }
    if (endereco ==""){
        alert("Preencha o campo Endereco");
        formulario.endereco.focus();        
        return false;
    }
    if (cidade ==""){
        alert("Preencha o campo Cidade");
        formulario.cidade.focus();        
        return false;
    }
    if (cep ==""){
        alert("Preencha o campo CEP");
        formulario.cep.focus();        
        return false;
    }
    if (uf ==""){
        alert("Preencha o campo UF");
        formulario.uf.focus();        
        return false;
    }
    if (data ==""){
        alert("Preencha o campo DATA");
        formulario.data.focus();        
        return false;
    }
    return true;
}