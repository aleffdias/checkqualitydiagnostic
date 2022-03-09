//Variáveis globais
var tkt;

//Variáveis das questões
var cr_1 = document.getElementById("CR_1");
var cr_2 = document.getElementById("CR_2");
var cr_3 = document.getElementById("CR_3");
var cr_4 = document.getElementById("CR_4");


//Variáveis dos butões
var submit = document.getElementById('submit');


//Função de seleção de proxima questão com decisão de julgamento
function exibe_check(q){

    switch (q) {
        //A vítima possui evidência?
        case 'Alterar o veiculo':
        document.getElementById('CR_1').style.display = "block";
        document.getElementById('CR_2').style.display = "none";
        document.getElementById('CR_3').style.display = "none";
        document.getElementById('CR_4').style.display = "none";
        break;
        case 'Passageiro nao pagou':
        document.getElementById('CR_2').style.display = "block";
        document.getElementById('CR_1').style.display = "none";
        document.getElementById('CR_3').style.display = "none";
        document.getElementById('CR_4').style.display = "none";
        break;
        case 'Como ver o saldo da conta':
        document.getElementById('CR_3').style.display = "block";
        document.getElementById('CR_2').style.display = "none";
        document.getElementById('CR_1').style.display = "none";
        document.getElementById('CR_4').style.display = "none";
        break;
        case 'Achados e perdidos':
        document.getElementById('CR_4').style.display = "block";
        document.getElementById('CR_3').style.display = "none";
        document.getElementById('CR_2').style.display = "none";
        document.getElementById('CR_1').style.display = "none";
           break;
        default:
        document.getElementById('CR_4').style.display = "none";
        document.getElementById('CR_3').style.display = "none";
        document.getElementById('CR_2').style.display = "none";
        document.getElementById('CR_1').style.display = "none";
    }
}
contact.addEventListener('click', function(){

    var tkt = document.getElementById("ticket").value;

    if(tkt.length == 18){
        var t=0;

    for (i=0;i<18;i++){
        a = parseInt(tkt[i]);
    console.log(a);

    if(isNaN(a)){
        t++;
        }

        }

    if(t == 0){
        document.getElementById("print_erro_ticket").innerHTML = '';
        exibe_check(document.getElementById("contact").value);
        }
    else{
        document.getElementById("print_erro_ticket").innerHTML = 'O id deve conter apenas números!';
        }
    }
    else{
        document.getElementById("print_erro_ticket").innerHTML = 'O id possui tamanho incorreto!';
    }

})

submit.addEventListener('click', function(){
    tkt = '';
    document.getElementById("ticket").value = "";
    document.getElementById("contact").value = "";
    playMusic();
    limpa_check();
    limpa_resposta();
})

function limpa_check(){
for(i=1;i<5;i++){
    document.getElementById("CR_" + i + "").style.display = "none";
}
}

function limpa_resposta(){
for(i=1;i<13;i++){
    document.getElementById("resposta" + i + "").checked = false;
}
}

function playMusic(){
var music = new Audio('https://m.toqueparacelular.com.br/a/pr7/Discord_Notification.mp3');
music.play();
}