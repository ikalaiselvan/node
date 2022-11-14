

const add = (A, B) => A + B;
// console.log(add(2,3));

// console.log(process.argv);

const [, , n1, n2] = process.argv;

console.log(add(+n1, +n2));
// second method:
// console.log(add(process.argv[2], process.argv[3]));




