function solution(n, lost, reserve) {
    //[18, 21]
    //[3, 4, 5, 6, 8, 13, 17, 22, 23, 26, 28]
    for(let i = 0; i<lost.length; i++){
        if (reserve.includes(lost[i])){
            reserve.splice(reserve.indexOf(lost[i]),1)
            lost.splice(i,1)
            i--
        }
    }
    
    lost = lost.sort((a,b)=>a-b)
    reserve = reserve.sort((a,b)=>a-b)
    
    let count = n-lost.length //체육복 있는 학생 수
    for(item of lost){
        if(reserve.includes(item-1)){
            reserve.splice(reserve.indexOf(item-1),1)
            count++
            continue;
        } 
        if (reserve.includes(item+1)){
            reserve.splice(reserve.indexOf(item+1),1)
            count++
        } 
    }
    return count
}