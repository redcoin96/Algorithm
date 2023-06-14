function solution(clothes) {
    let obj = {}
    for (item of clothes){
        obj[item[1]] = (obj[item[1]]||0) +1
    }
    let arr = Object.values(obj)
    return arr.reduce((acc,cur)=>acc*(cur+1),1)-1
    /*
    (의상종류수 + 1)(...)-1
    1. +1 : 아무것도 안 입은 경우의 수
    2. -1 : 모든 종류를 안 입은 경우의 수 
    */
}