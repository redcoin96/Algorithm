function solution(a, b, n) { 
    let count = 0;
    while(Math.floor(n/a)){
        count += Math.floor(n/a)*b
        n = n - Math.floor(n/a)*a + Math.floor(n/a)*b
    }
    return count;
        
}