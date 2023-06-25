function solution(n) {
    let answer = 1;
    
    function func(n,startNum){
        if(startNum > Math.floor(n/2)) return
        let total = 0
        let currentNum = startNum
        while(total + currentNum <= n){
            total += currentNum 
            currentNum++
        }
        if(total === n) answer++
        total = 0
        
        func(n,startNum+1)
    }
    
    func(n,1)
    
    return answer
}