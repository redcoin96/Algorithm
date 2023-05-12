//홀수 번째 알파벳이 대문자일 경우를 생각하셔야 합니다. 
//처음 시작이 공백으로 시작하거나 끝부분에 공백이 있을수도 있는 문자열이 주어질 //수도 있습니다.

function solution(s) {
    const arr = s.toLowerCase().split(' ')
    let answer = ''
    for(let i = 0; i<arr.length; i++){
       for(let j = 0; j<arr[i].length; j++){
           if(j%2){
               answer += arr[i][j]
           } else {
               answer += arr[i][j].toUpperCase()
           }
       }
       answer += ' '
    }
    return answer.slice(0,-1)
}