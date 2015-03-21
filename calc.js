//argumentos do argv são sempre strings

var n1 = process.argv[2]
,	op = process.argv[3]
,	n2 = process.argv[4];

// console.log (n1, op, n2);

if(op === '+') {
	console.log(Number(n1) + Number(n2));
} else if(op === '-') {
	console.log(Number(n1) - Number(n2));
} else if(op === '*') {
	console.log(Number(n1) * Number(n2));
} else if(op === '/') {
	console.log(Number(n1) / Number(n2));
}