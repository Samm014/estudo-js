function functionChange(e){
    var msg_end = document.getElementById('msg-end')
    if(e.value == "Idoso"){
        msg_end.innerHTML = 'Você é um Idoso.'
    }else if(e.value !== ""){
        msg_end.innerHTML = 'Você tem entre ' + (e.value) + ' anos de idade';
    }if(e.value == " "){
        alert('ocorreu um erro.')
        msg_end.innerHTML = ""; 
    }
}

function trocar(){
    let el = document.getElementById('emoji');
    el.classList.remove('em-angry');
    el.classList.add('em-grinning');  
}

function reset(e){
    e.classList.remove('em-grinning');  
    e.classList.add('em-angry');
}



function DetectClick(){
    document.getElementById("msg").innerHTML = "<b>Clique</b> detectado!";
    console.log('Clique DETECTADO!')
}


function redirect(){
    window.open('https://instagram.com/samuelmedeiros__'); // Abre em outra aba

    //window.location.href = 'https://instagram.com/samuelmedeiros__'; | Abre na mesma aba
}













/*
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        var validar = true;
    }else{
        validar = false;
    }

    return validar;

}

var idade = prompt("Qual é a sua idade?(apenas números)")
alert(validaIdade(idade));




function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)

}

console.log(soma(34,16));
console.log(setReplace("Vai Japão",'Japão','Brasil'))

*/








/*var d = new Date();
console.log(d.getMonth()+1) //sempre +1 pois considera o 0
console.log(d.getDay()) 
console.log(d.getMinutes()) 
console.log(d.getSeconds()) // ... 

*/


/*var count;
for(count = 0;count <= 5; count++){
    console.log(count)
}

var count = 0;

while(count <= 5){
    console.log(count);
    count++;
}
*/


/*var idade = prompt("Qual é a sua idade?")

//var idade = 18;
if(idade >= 18){
    alert('Maioridade')
}else{
    alert('Menoridade')
}

*/





/*
var frutas = [{nome:'maçã',cor:'vermelho'}, {nome:'banana',cor:'amarelo'}]
console.log(frutas[1].cor)*/

/*var fruta = {nome:'maçã',cor:'vermelha'};
console.log(fruta.cor)*/





/*var nome = "Samuel"
var msg = "Seja bem vindo "

alert(msg + nome)*/

//var lista = ['maçã','pêra','laranja'];
//console.log(lista.toString())//retorna em uma string
//console.log(lista.join(" | "));//substitui as vírgulas na separação dos //objetos
//lista.push("uva"); //coloca
//lista.pop("uva"); //retira
//console.log(lista.length) //quantidade de objetos
//console.log(lista.reverse()) //altera a ordem
//console.log(lista)