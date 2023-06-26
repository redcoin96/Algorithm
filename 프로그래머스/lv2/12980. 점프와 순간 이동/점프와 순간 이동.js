function solution(n){
  let answer = 1;
  while(true){
    if(n===1) return answer  
    if(n%2) answer++
    n = Math.floor(n/2)
  }
}