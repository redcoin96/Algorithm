function solution(X, Y) {
    let count1 = {} 
    let count2 = {}
    for(let i = 0; i < X.length; i++){
       count1[X[i]] = (count1[X[i]] || 0) + 1
    }
    for(let i = 0; i < Y.length; i++){
       count2[Y[i]] = (count2[Y[i]] || 0) + 1
    }
    
    let ansobj = {}
    let ansarr = []
    for(i in count1){
        if(count2[i]){
            ansobj[i] = Math.min(count1[i], count2[i])
        }
    }
    if(!Object.keys(ansobj).length){
        return "-1"
    } else if(Object.keys(ansobj).length === 1 && Object.keys(count2).includes('0')){
        return "0"
    } else {
        for(i in ansobj){
            ansarr.unshift([i, ansobj[i]])
        }
    }
    
    let ans = ""
    
    for(i of ansarr){
        ans += i[0].repeat(i[1])
    }
    return ans
   
}