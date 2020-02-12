function max(br1, br2, br3) {
    let max = br1;

    if(br2 > max){
         max = br2;
    }
    if(br3 > max){
        max = br3
    }
    return max;
}
console.log(max(75, 98, 45));