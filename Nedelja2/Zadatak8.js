let n = 5;
let pr = ' '
let red ="";

for(let i = 0; i <= n; i++){
    red = pr.repeat(n - i) + '#'.repeat(i);
    console.log(red)
}
