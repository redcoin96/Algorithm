function solution(N, stages) {
    let answer = [];
    let totalPeople = stages.length
    for(let i = 0; i<N; i++){
        let stage = i+1;
        let arr = [stage];
        let participant = 0; //stage 이상의 수
        let notCleared = 0; //stage 개수
        for(let j = 0 ; j<totalPeople; j++){
            if (stages[j]>=stage){
                participant ++
                if(stages[j]===stage){
                    notCleared ++
                }
            }
        }
        let failure = notCleared/participant
        arr.push(failure)
        answer.push(arr)
        }
    return answer.sort((a,b)=>b[1]-a[1]).map(item=>item[0])
}