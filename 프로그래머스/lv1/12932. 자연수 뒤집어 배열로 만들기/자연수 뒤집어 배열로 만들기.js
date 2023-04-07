function solution(n) {
    let str = String(n);
    let arr = str.split('').reverse();
    return arr.map(item=>parseInt(item))
}