var mail = prompt('Benvenuto! Inserisci la tua mail, se sei regolarmente iscritto potrai giocare!');
var gioco = document.getElementById('gioco');
var cliccabile = document.getElementById('btn');
var dadopg = document.getElementById('dado-pg');
var dadopc = document.getElementById('dado-pc');
var esito = document.getElementById('esito');
var mailArray = ['nome@gmail.com', 'nome@hotmail.com', 'nome@yahoo.com'];
var min = 1;
var max = 6;
var dado1 = Math.floor(Math.random() * (max + 1 - min) + min);
var dado2 = Math.floor(Math.random() * (max + 1 - min) + min);

for (var i = 0; i < mailArray.length; i++) {
  if(mailArray[i] === 'nome@gmail.com'){
    presentazione.innerText = 'Giochiamo, allora!';
    cliccabile.innerText = 'Clicca qui per lanciare!';
    cliccabile.addEventListener('click',
      function(){
        dadopg.innerText = dado1;
        dadopc.innerText = dado2;
      })
    if (dadopg > dadopc) {

    }
  }
}
