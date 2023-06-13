function solution(X, Y) {
    let count1 = {} 
    let count2 = {}
    for(let i = 0; i < X.length; i++){
        if(Object.keys(count1).includes(X[i])){
            count1[X[i]] = count1[X[i]] + 1
        } else {
            count1[X[i]] = 1
        }
    }
    for(let i = 0; i < Y.length; i++){
        if(Object.keys(count2).includes(Y[i])){
            count2[Y[i]] = count2[Y[i]] + 1
        } else {
            count2[Y[i]] = 1
        }
    }
    
    let ansobj = {}
    let ansarr = []
    for(i in count1){
        if(Object.keys(count2).includes(i)){
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