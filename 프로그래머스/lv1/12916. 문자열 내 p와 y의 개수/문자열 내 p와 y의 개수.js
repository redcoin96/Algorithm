function solution(s){
    let p = 0;
    let y = 0;
    const lowstr = s.toLowerCase();
    for(i=0; i<lowstr.length; i++){
        if (lowstr[i]==='p') p++
        if (lowstr[i]==='y') y++
    }
    return p === y;
}