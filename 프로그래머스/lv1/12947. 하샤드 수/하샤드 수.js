function solution(x) {
    const str = x+'';
    let sum = 0;
    for(i=0; i<str.length; i++){
        sum += parseInt(str[i])
    }
    return !(str%sum) 
}