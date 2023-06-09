function solution(participant, completion) {
    let sortP = participant.sort()
    let sortC = completion.sort()
    for(let i = 0; i<sortC.length; i++){
        if(sortP[i]!==sortC[i]) return sortP[i]
    }
    return participant[participant.length-1]
}

