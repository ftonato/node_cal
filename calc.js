//argumentos do argv são sempre strings

let n1 = process.argv[2]
  ,	op = process.argv[3]
  ,	n2 = process.argv[4];

//console.log ('_debug: ', n1, op, n2);

switch (op) {
  case '+':
    console.log(Number(n1) + Number(n2));
    break;
  case '-':
    console.log(Number(n1) - Number(n2));
    break;
  case '*':
    console.log(Number(n1) * Number(n2));
    break;
  case '/':
    console.log(Number(n1) / Number(n2));
    break;
  default:
    console.log('Operação inválida!')
    break
}
