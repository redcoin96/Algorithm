function solution(n, m, section) {
   let arr = Array(n).fill(1)
   for(a of section){
       arr[a-1] = 0
   }
   let count = 0;
   for(let i = 0; i<arr.length; i++){
       if(arr[i] === 0){
          for(let j = 0; j<m; j++){
              arr[i+j] = 1
          }
          count++
       }
   }
   return count
}