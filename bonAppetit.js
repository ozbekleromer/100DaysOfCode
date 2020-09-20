/*
HackerRank Task Explanation Page : https://www.hackerrank.com/challenges/bon-appetit/problem
*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    if(b == bill.reduce((sum, val) => sum+val)/2) { 
        let annaBill = bill.slice(0,k).concat(bill.slice(k+1)); // pop the price of food that Anna didn't eat
        let result = b - (annaBill.reduce((sum, val) => sum+val)/2); // calculate the amount Brian must refund to Anna
        console.log(result);
    } else {
        console.log("Bon Appetit");
    }
}

function main() {
    const nk = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}
