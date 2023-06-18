function solution(k, m, score) {
    return score.sort((a,b)=>b-a).filter((a,i)=>!((i+1)%m)).map(i=>i*m).reduce((a,c)=>a+c,0)

}