function solution(s) {
    let ans = [0,0]
    
    while (s !== "1"){
         let zeroNum = [...s].sort().indexOf('1')
         ans[0] += 1
         ans[1] += zeroNum;
         s = (s.length - zeroNum).toString(2)
    }
    return ans
}