function solution(s) {
    const arr = s.split(' ').map(item=>parseInt(item)).sort((a,b)=>a-b)
    return arr.slice(0, 1).concat(arr.slice(-1)).join(' ')
    
}