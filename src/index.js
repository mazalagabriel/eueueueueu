/* Função aninhada */
let a = add(2, 3);

function add(a, b) {
  function number(x) {
    return x* x;
  }
  return number (a) + number(b);
  }
  console.log(a);
  