const process = require('process');
const argProcess = process.argv;
const arguments = [];
for (let i = 2; i < argProcess.length; i++){
    arguments.push(argProcess[i])
}

const countArgs =  arguments.length;
const joinArgs =  arguments.join(' ');

const argArr = [...joinArgs];
const vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelsCtr = 0;

for (let i = 0; i < argArr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        argArr[i] === vowels[j] ? vowelsCtr++ : '';
    }
} 

console.log(`The number of argument${countArgs > 1 ? 's ' : ' '}passed ${countArgs > 1 ? 'are' : 'is'} ${countArgs},
The number of vowel${vowelsCtr > 1 ? 's ' : ' '}inside ${joinArgs} ${vowelsCtr > 1 ? 'are' : 'is'} ${vowelsCtr} `);
