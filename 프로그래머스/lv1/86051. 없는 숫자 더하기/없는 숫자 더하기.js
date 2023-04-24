function solution(numbers) {
    let sum = 1+2+3+4+5+6+7+8+9
    let arrsum = numbers.reduce((acc,cur)=>acc+cur)
    return sum - arrsum
    
}