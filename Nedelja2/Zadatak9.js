let n = 5;
let pr = ' ';
let red = ''

for(i = 0; i <= n; i++){
    red = pr.repeat(n - i) + '*'.repeat(i) + pr + '*'.repeat(i);
    console.log(red)
}