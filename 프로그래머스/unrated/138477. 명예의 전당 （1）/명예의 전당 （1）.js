function solution(k, score) {
   let hall = []
   let answer = []
   for(let i = 0; i<score.length; i++){
      if(i<k){
          hall.push(score[i]);
          answer.push(Math.min(...hall))
      } else if(score[i] < Math.min(...hall)){
        answer.push(Math.min(...hall))
      } else {
          hall.push(score[i]);
          hall.sort((a,b)=>b-a)
          hall.splice(-1)
          answer.push(hall[k-1])
      }
   }
    return answer
}