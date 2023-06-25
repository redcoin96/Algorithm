function solution(A,B){
    let count = 0;
    A = A.sort((a,b)=>b-a)
    B = B.sort((a,b)=>b-a)
    function func(arr1, arr2){
        if(!arr1.length) return
        if(arr1[0]>arr2[0]){
            count += arr1[0]*arr2[arr2.length-1]
            arr1.shift()
            arr2.pop()
            func(arr1,arr2)
        } else {
            count += arr2[0]*arr1[arr1.length-1]
            arr1.pop()
            arr2.shift()
            func(arr1,arr2)
        }
    }
    
    func(A,B)
    
    return count;
}