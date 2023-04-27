function solution(s) {
    const len = s.length
    const mid = Math.floor(len/2)
    if (len%2)  return s[mid]//홀수일때
    else return s[mid-1]+s[mid]///짝수일때
}