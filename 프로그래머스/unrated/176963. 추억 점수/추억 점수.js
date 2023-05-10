function solution(name, yearning, photo) {
 let answer = [];
  for(let i = 0; i<photo.length; i++){
      let count = 0;
      for(let j = 0; j<name.length; j++){
          photo[i].forEach(function(item){
            if(item===name[j]){count+=yearning[j]}
            })
          }
      answer.push(count)
  }
  return answer
}