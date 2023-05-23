const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let pairs=ages.filter(ages=> (ages % 2) === 0);
console.log(pairs);