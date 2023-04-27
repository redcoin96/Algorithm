function solution(arr){
    let answer = []
    for(i=0; i<arr.length; i++){
         if(arr[i] !== answer[answer.length-1]) answer.push(arr[i])
         else continue;
     }
     return answer
}