function* fibonacci() {
  let fib1 = 1;
  let fib2 = 2;
  while (true) {
    let current = fib1;
    fib1 = fib2;
    fib2 = current + fib1;
    yield current;
  }
}

var sequence = fibonacci();

let amount = 0;
let acca = 0;

while (true) {
  amount = sequence.next().value;
  if (amount > 4000000) {
    break;
  }
  
  if (amount % 2 == 0) {
    acca = acca + amount;
  }
}

console.log(acca);
