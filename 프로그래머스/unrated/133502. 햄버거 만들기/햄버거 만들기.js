function solution(ingredient) {
 const stack = [];
 let count = 0;
  for (let i = 0; i<ingredient.length; i++){
    stack.push(ingredient[i])
    if(stack[stack.length-1] === 1  && stack[stack.length-2] === 3 && stack[stack.length-3] === 2 && stack[stack.length-4] === 1){
        stack.splice(-4)
        count++ 
    }
  }  
  return count;
}



/* 
[2, 1, 1, 2, 3, 1, 2, 3, 1]
let stack = []
count = 0;

인덱스가 i일때:
1. i === 1 && i+1 === 2 && i+2 === 3 && i+3 === 1 : count ++  => splice
2. i === 1 && stack[stack.length-1] === 3  && stack[stack.length-2] === 2 && stack[stack.length-1]
   : count++ => stack.splice(arr.length - 2) => arr.shift()
*/