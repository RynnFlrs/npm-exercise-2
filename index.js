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
const vowelsArr = [];
let vowelsCtr = 0;

for (let i = 0; i < argArr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        argArr[i] === vowels[j] ? (vowelsArr.push(argArr[i]), vowelsCtr++) : '';
    }
}


const isAre = (n) => n > 1 ? 'are' : 'is';
const isPlural = (n) => n > 1 ? 's ' : ' ';

console.log(`The number of argument${isPlural(countArgs)}passed ${isAre(countArgs)} ${countArgs} 
The joined string of all argument${isPlural(countArgs)}is ${joinArgs}
The number of vowel${isPlural(vowelsCtr)}inside ${joinArgs} ${isAre(vowelsCtr)} ${vowelsCtr} 
Such vowel${isPlural(vowelsCtr)}${isAre(vowelsCtr)} ${vowelsArr}`);
