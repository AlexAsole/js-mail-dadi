var mail = prompt('Benvenuto! Inserisci la tua mail, se sei regolarmente iscritto potrai giocare!');

var mailArray = ['nome@gmail.com', 'nome@hotmail.com', 'nome@yahoo.com'];

var min = 1;
var max = 6;
var dado = Math.floor(Math.random() * (max + 1 - min) + min);

for (var i = 0; i < mailArray.length; i++) {
  if(mailArray[i] === 'nome@gmail.com'){
    alert('Gioca!')
  }
}
