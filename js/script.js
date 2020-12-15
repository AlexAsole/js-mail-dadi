var mail = prompt('Benvenuto! Inserisci la tua mail, se sei regolarmente iscritto potrai giocare!');
var presentazione = document.getElementById('presentazione');
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
  if(mailArray[i] === 'nome@gmail.com'){  //check della mail
    presentazione.innerText = 'Giochiamo, allora!';  //presentazione
    cliccabile.innerText = 'Clicca qui per lanciare!';
    cliccabile.addEventListener('click', //elemento cliccabile, lancio dadi
      function(){
        dadopg.innerText = dado1;
        dadopc.innerText = dado2;
        if (dado1 > dado2) {
          esito.innerText = 'Complimenti, hai vinto!'; //se dado1 è maggiore, allora ho vinto
        } else if (dado1 < dado2) {
          esito.innerText = 'Peccato, hai perso!'; //se dado2 è maggiore, allora ho perso
        } else if (dado1 === dado2) {
          esito.innerText = 'Strano, abbiamo pareggiato!'; //pareggio
        }
      })
  } 
}
