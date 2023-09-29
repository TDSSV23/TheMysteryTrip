setTimeout(abrir, 3000);
setTimeout(limpar);


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
    document.getElementById('s-saida').innerHTML = document.getElementById("saida2").value;
    document.getElementById('s-chegada').innerHTML = document.getElementById("chegada2").value;

    document.getElementById('s-data2').innerText = "*somente ida";

    document.getElementById('s-data').innerHTML = document.getElementById("data3").value;

    document.getElementById('s-pessoas').innerHTML = document.getElementById("pessoas2").value;

}

function ok() {
    document.getElementById('ook').innerHTML = "Sua viagem está em processamento... Retornaremos em breve!";
}



function verificarData(opcao) {
    const dataAtual = new Date();
    let dataHoje = dataAtual.getFullYear() + "-0" + (dataAtual.getMonth() + 1) + "-" + dataAtual.getDate();
    let dataIda = document.getElementById("data").value;
    let dataVolta = document.getElementById("data2").value;
    let dataIda2 = document.getElementById("data2").value;

    if (dataIda >= dataVolta || dataHoje >= dataIda2) {
        alert("Datas Invalidas")
    } else {
        ok()
        if(opcao == "primeira"){
            enviar()
        } else{
            enviar2()
        }
    }
}




