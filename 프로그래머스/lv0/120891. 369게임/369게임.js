function solution(order) {
    let count = 0;
    let str = String(order);
    for(let i=0; i<str.length; i++){
        if (str[i]==='3' || str[i]==='6' || str[i]==='9'){
            count++
        }
    }
    return(count)
}