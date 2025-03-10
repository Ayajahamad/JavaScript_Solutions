let num = 1234

let nStr = num.toString()
console.log(nStr);

sum = 0
for (let s = 0; s < nStr.length; s++) {
    sum+=Number(nStr[s])
}
console.log(sum);