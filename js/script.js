let opcao = 1

//função do POPUP
function abrir(){
    document.getElementById('popup').style.display = 'block';
}
function fechar(){
    document.getElementById('popup').style.display =  'none';
}

//função do idas e voltas
function trocar(){
    if(opcao = 1){
        document.getElementById('opcao-voo-1').style.display = 'flex';
        document.getElementById('opcao-voo-2').style.display = 'none';
    }
}

function trocar_dnv(){
    if(opcao = 1){
        document.getElementById('opcao-voo-1').style.display = 'none';
        document.getElementById('opcao-voo-2').style.display = 'flex';
    }
}




