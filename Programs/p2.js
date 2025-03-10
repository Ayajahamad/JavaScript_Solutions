// Palindrome
let str = 'abc d'

let rev = str.split('').reverse().join('').replace(" ",'')
console.log(rev);

// for
st = ''
for (let s = str.length-1; s >= 0; s--) {
    st += str[s].replace(' ','')
}
console.log(st);

// for of
r = ''
for (const s of str) {
    r = s + r.replace(" ", '');
}
console.log(r);

// for
st = ''
for (let s = 0; s < str.length; s++) {
    st = str[s] + st.replace(' ','')
}
console.log(st);