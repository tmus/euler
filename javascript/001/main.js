let factors = [3, 5];
let topNumber = 1000;
let naturals = [];

function isUniqueFilter(value, index, self) {
  return self.indexOf(value) === index;
}

factors.forEach(num => {
  for(i = 1; i < topNumber; i++) {
    if (num * i < topNumber) {
      naturals.push(num * i);
    }
  }
});

filtered = naturals.filter(isUniqueFilter);

console.log(filtered.reduce((acca, current) => acca + current));

// 
