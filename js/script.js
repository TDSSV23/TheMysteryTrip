setTimeout(abrir, 3000);
setTimeout(limpar);
// let opcao = 1

//função do POPUP
function abrir() {

    document.getElementById('popup').style.display = 'block';
}
function fechar() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('mostrar').style.display = 'none';
}

function limpar() {
    document.getElementById('opcao-voo-2').style.display = 'none';
    document.getElementById('opcao-voo-1').style.display = 'none';

}
//função do idas e voltas
function trocar() {
    document.getElementById('opcao-voo-1').style.display = 'flex';
    document.getElementById('opcao-voo-2').style.display = 'none';
}

function trocar_dnv() {
    document.getElementById('opcao-voo-1').style.display = 'none';
    document.getElementById('opcao-voo-2').style.display = 'flex';
}

function enviar() {
    document.getElementById('mostrar').style.display = 'flex';
    document.getElementById('s-saida').innerHTML = document.getElementById("saida").value;
    document.getElementById('s-chegada').innerHTML = document.getElementById("chegada").value;

    document.getElementById('s-data').innerHTML = document.getElementById("data").value;
    document.getElementById('s-data2').innerHTML = document.getElementById("data2").value;
 
    document.getElementById('s-pessoas').innerHTML = document.getElementById("pessoas").value;

}

function enviar2() {
    document.getElementById('mostrar').style.display = 'flex';
    document.getElementById('s-saida').innerHTML = document.getElementById("saida").value;
    document.getElementById('s-chegada').innerText = "*somente ida";

    document.getElementById('s-data').innerHTML = document.getElementById("data").value;

    document.getElementById('s-pessoas').innerHTML = document.getElementById("pessoas").value;

}

function ok(){
    document.getElementById('ook').innerHTML = "Sua viagem está em processamento... Retornaremos em breve!";
}


function pegarDataAtual(){
    data = new Date();
    document.getElementById('data').value = data.getDay()+'/'+data.getMonth()+'/'+data.getFullYear();
 }



