function solution(priorities, location) {
  let count = 0;
  let move = 0;
  while(priorities.length){
      if(priorities.filter(i => i>priorities[0]).length){
          if(move === location){
              location = priorities.length-1
              move = 0
          } else {
              move++
          }
          let num = priorities.shift()
          priorities.push(num)
      } else {
          if(move === location){
              return count+1
          } else{
              priorities.shift()
              count++
              move++
          }
      }
  }
}