function solution(n, arr1, arr2) {
   let binarr1 = arr1.map(item=>item.toString(2))
   let binarr2 = arr2.map(item=>item.toString(2))
   let sumarr = []
   for(let i = 0; i<n; i++){
       sumarr.push(Number(binarr1[i])+Number(binarr2[i])+'')
   }
   for(let i = 0; i < n; i++){
       if(sumarr[i].length<n){
           let zerostr = '0'.repeat(n-(sumarr[i].length));
           sumarr[i] = zerostr+sumarr[i]
       }
   }
    const obj = {
        1 : '#',
        2 : '#',
        0 : ' '
    }
   for(let i = 0; i<n; i++){
       sumarr[i] = sumarr[i].replace(/1|2|0/g, matched => obj[matched])
   }
   return sumarr
}