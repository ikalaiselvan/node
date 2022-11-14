console.log(process.argv)

const double = n => n * 2;

const [one, two, three] = process.argv;

console.log(double(three));
