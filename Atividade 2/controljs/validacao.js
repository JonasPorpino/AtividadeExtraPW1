function validar(){
    var atividade = formulario.atividade.value;
    var data = formulario.data.value;
    if (atividade ==""){
        alert("Preencha o campo Atividade");
        formulario.atividade.focus();        
        return false;
    }
    if (data ==""){
        alert("Preencha o campo DATA");
        formulario.data.focus();        
        return false;
    }
    return true;
}