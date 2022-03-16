import styles from '../css/styles.module.css';

var posicao = 0;
var jogador = 0;
var tabuleiro = [0,0,0,0,0,0,0,0,0];
var jogadas = 0;
function MarcarPosicao(casa){
  var x: number = +casa;
  if(tabuleiro[x]==0){
    if(jogador==0){
      jogador = 1;
    }
    else if(jogador==1){
      jogador = 2;
    }
    else if(jogador==2){
      jogador = 1
    }
    
    tabuleiro[x] = jogador;
    var img;
    if(jogador==1){
      img = document.createElement("img");
      img.setAttribute("src", "http://www.linhadecodigo.com.br/artigos/img_artigos/Joel_Rodrigues/JogoDaVelhaJS/JogodaVelha01.jpg"); 
    }
    else{
      img = document.createElement("img");
      img.setAttribute("src", "http://www.linhadecodigo.com.br/artigos/img_artigos/Joel_Rodrigues/JogoDaVelhaJS/JogodaVelha02.jpg"); 
    }
    var elemento = document.getElementById('casa_'+casa);
    elemento.appendChild(img)
    jogadas++;
    console.log(jogadas);
    if(jogadas>4){
      if(verificarFimDeJogo()){
        var msg = document.getElementById('msg');
        msg.append("O jogador "+jogador+" VENCEU!!");
      }
    }
  }
}

function casasIguais(a, b, c){
  if((tabuleiro[a]==tabuleiro[b])&&(tabuleiro[a]==tabuleiro[c])){
    return true;
  }
  else{
    return false;
  }
}

function verificarFimDeJogo(){
  
  if(casasIguais(0, 1, 2) || casasIguais(3, 4, 5) || casasIguais(6, 7, 8) ||
    casasIguais(0, 3, 6) || casasIguais(1, 4, 7) || casasIguais(2, 5, 8) ||
    casasIguais(0, 4, 8) || casasIguais(2, 4, 6))
  {
    console.log('true')
    return true;
  }
  else{
    console.log('false')
    return false;
  }
}

function GerarTabela(){
  return(
    <div className={styles.jogo}>
     <div className={styles.linha}>
        <div id="casa_0" className={styles.casa} onClick={()=>MarcarPosicao('0')}></div>
        <div id="casa_1" className={styles.casa} onClick={()=>MarcarPosicao('1')}></div>
        <div id="casa_2"className={styles.casa} onClick={()=>MarcarPosicao('2')}></div>
      </div>
      <div className={styles.linha}>
        <div id="casa_3" className={styles.casa} onClick={()=>MarcarPosicao('3')}></div>
        <div id="casa_4" className={styles.casa} onClick={()=>MarcarPosicao('4')}></div>
        <div id="casa_5" className={styles.casa} onClick={()=>MarcarPosicao('5')}></div>
      </div>
      <div className={styles.linha}>
        <div id="casa_6" className={styles.casa} onClick={()=>MarcarPosicao('6')}></div>
        <div id="casa_7" className={styles.casa} onClick={()=>MarcarPosicao('7')}></div>
        <div id="casa_8" className={styles.casa} onClick={()=>MarcarPosicao('8')}></div>
      </div>       
   </div>
  )
}

export default function Home() {
  return (
    <div>
      {GerarTabela()}
      <div id="msg"></div>
    </div>
  )
}

