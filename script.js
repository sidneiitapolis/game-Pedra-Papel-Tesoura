document.querySelector('#jogador-escolha-1').onclick=()=>{
    jogar(1)  }
document.querySelector('#jogador-escolha-2').onclick=()=>{
    jogar(2)  }
document.querySelector('#jogador-escolha-3').onclick=()=>{
    jogar(3)  }


// Da as boas vindas ao jogador
let pontoComputador = 0
let pontoJogador = 0
let jogadorNome = prompt('Qual é o seu nome')
let jogadorEscolha=0
let computadorEscolha=0

document.querySelector('#jogador-nome').innerHTML=jogadorNome
document.querySelector('#msg').innerHTML=(`Bem  vindo ao jogo ${jogadorNome}`)


//Pedra  jogada  1
//Papel Jogada   2
//Tesoura Jogada 3

//Funçao que recebe a jogada

function jogar(escolha){
    jogadorEscolha=escolha
    selecionar('jogador',jogadorEscolha)
    setTimeout(()=>{tirasel('jogador',jogadorEscolha)
    document.querySelector('#msg').innerHTML="Jogue novamente"

},3000)
    
    //Sortear a jogada do computador
   var computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1 //retorna um numero entre 1 e 3
    selecionar('computador',computadorEscolha)
    setTimeout(()=>{tirasel('computador',computadorEscolha)},3000)
    vencedor = verifica(jogadorEscolha, computadorEscolha)

    mostraVencedor()    

    //adiciona a classe selecionado

    function selecionar(tipo, escolha){
        document.getElementById(tipo +'-escolha-'+escolha).classList.add('selecionado')
    }

    //remove a classe selecionado

   function tirasel(tipo,escolha){
    document.getElementById(tipo +'-escolha-'+escolha).classList.remove('selecionado')

}

    
   

 }

        // recebe a escolha dos jogadores
        //retorna quem ganhou
        //empate 0
        //jogador 1
        //computador 2
function verifica(jogador,computador){
    if (jogador == 1 && computador == 1) {
        return 0
    }
    else if (jogador == 1 && computador == 2) {
        return 2
        

    }
    else if (jogador == 1 && computador == 3) {
        return 1
        
    }

    else if (jogador == 2 && computador == 1) {
        return 1
        
    }
    else if (jogador == 2 && computador == 2) {
        return 0
    }
    else if (jogador == 2 && computador == 3) {
        return 2
       
    }

    else if (jogador == 3 && computador == 1) {
        return 2
        
    }
    else if (jogador == 3 && computador == 2) {
        return 1
        
    }
    else if (jogador == 3 && computador == 3) {
        return 0
    }

    
}

function SomaPontoJogador(){
    pontoJogador=pontoJogador+1
    document.querySelector('#jogador-pontos').innerHTML=pontoJogador
}

function SomaPontoComputador(){
    pontoComputador=pontoComputador+1
    document.querySelector('#computador-pontos').innerHTML=pontoComputador
}








function mostraVencedor(){
        if (vencedor == 0) {
            document.querySelector('#msg').innerHTML=(`Computador e ${jogadorNome} empataram`)
            
        }
            else if (vencedor == 1) {
                document.querySelector('#msg').innerHTML=(`Você venceu ${jogadorNome} `)
                SomaPontoJogador()
            }
                
                else if (vencedor == 2 ) {
                    SomaPontoComputador()
                    document.querySelector('#msg').innerHTML=(`Computador Venceu `)
                }

                        
            
                  
}            

