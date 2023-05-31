/*	
["aya", "yee", "u"]
*/

function solution(babbling) {
   const arr = ['aya','ye','woo','ma']
   let count = 0;
   for(let i = 0; i<babbling.length; i++){
       let prev = ''
       let stack = [] //['a','y','a']
       let isPossible = false
       const curword = babbling[i].split('') //['a', 'y', 'a']
       for(let j = 0; j<curword.length; j++){
           stack.push(curword[j])
           if(arr.includes(stack.join(''))){
              if(stack.join('') === prev) break;
               else if(j !== curword.length-1){
                   prev = stack.join('')
                   stack = []          
               }
               else isPossible = true;
              }
        }
    if(isPossible) count++
  }
  return count;
}
    

    
    