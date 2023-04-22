function solution(arr) {
    if(arr.length === 1 ) return [-1]
    const minnum = Math.min(...arr)
    return arr.filter((item) => item !== minnum)
}