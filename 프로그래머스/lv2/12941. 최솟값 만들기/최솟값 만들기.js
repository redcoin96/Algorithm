function solution(A,B){
    let count = 0;
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    
    for(let i = 0; i<A.length; i++){
        count += A[i]*B[i]
    }
    
    return count;
}