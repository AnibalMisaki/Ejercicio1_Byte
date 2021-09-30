var c = 30;
var j = 2;

for (; j < c; j++) {

  if (primo(j)) {
    document.write(j + "<br>")
  }
  
}



function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}