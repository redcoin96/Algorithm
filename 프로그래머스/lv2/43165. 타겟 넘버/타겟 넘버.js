function solution(numbers, target) {
    let answer = 0;
    
    function func(index, sum){
        if(index === numbers.length){
            if(sum === target) answer++
            return;
        } 
        func(index+1, sum + numbers[index])
        func(index+1, sum - numbers[index])
    }
    func(0,0)
    
    return answer
}