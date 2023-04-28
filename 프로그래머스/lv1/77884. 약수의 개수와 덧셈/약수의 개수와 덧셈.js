function solution(left, right) {
    let answer = 0; 
    while(left<=right){
        let count = 0;
        for(let i = 1; i<=left; i++){
            if(left%i === 0){
                count++
            }
        }
        if(count%2 === 0){
            answer += left   
        }
        else answer -= left;
        left++
    }
    return answer
}