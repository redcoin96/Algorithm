function solution(s) {
    let letter = "" 
    let count = [0,0] 
    let result = 0; 
    for(let i = 0; i<s.length; i++){
        if(!letter){
            letter = s[i]
            count = [1,0]
        } else if(count[0] === count[1]){
            letter = s[i]
            count = [1,0]
            result++
        } else if(letter === s[i]){
            count[0] += 1
        } else {
            count[1] += 1
        }
    }
    return result + 1
}