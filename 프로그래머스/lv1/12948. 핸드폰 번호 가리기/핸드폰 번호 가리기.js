function solution(phone_number) {
    let answer = []
    let arr = phone_number.split('')
    for(i=0; i<arr.length; i++){
        if (i<arr.length-4) answer.push('*')
        else answer.push(arr[i])
    }
    return answer.join('')
}