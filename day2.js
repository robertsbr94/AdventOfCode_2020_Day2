const fs = require('fs');

let input = fs.readFileSync('input.txt').toString();
input = input.split('\n');
input = input.map(x => x.split(':'));
input = input.map(x => {
    xOne = x[0].split(' ');
    xTwo = x[1].trim();
    return [xOne, xTwo];
});

let numValid = 0;
for (let i = 0; i < input.length; i++) {
    const inputToTest = input[i];
    [conditions, password] = inputToTest;
    const limits = conditions[0].split('-');
    const letterTest = conditions[1];

    const indexedChars = [password[limits[0] - 1], password[limits[1] - 1]];
    let passwordValid = false;
    if (indexedChars[0] !== letterTest && indexedChars[1] !== letterTest) {
        continue;
    } else if (indexedChars[0] === letterTest && indexedChars[1] === letterTest) {
        continue;
    } else {
        passwordValid = true;
        numValid++;
    }
}
console.log(input.length);
console.log(numValid);