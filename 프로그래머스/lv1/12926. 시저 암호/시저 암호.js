function solution(s, n) {
   let alparr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] //25
   let reg = /[a-z]/;
   let arr = s.split('')
   let answer = []
   
   for(let i = 0; i<arr.length; i++){
       let letter = arr[i].toLowerCase();
       if(letter===' ') {
           answer.push(' ')
           continue;
       }
       let LetterIndex = alparr.indexOf(letter);
       let nextLetterIndex = LetterIndex+n;
       if(nextLetterIndex>25){
           nextLetterIndex -= 26
       }
      answer.push(reg.test(arr[i])? alparr[nextLetterIndex] : alparr[nextLetterIndex].toUpperCase())   
   }
    return answer.join('')
}