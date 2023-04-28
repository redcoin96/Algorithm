function solution(board, moves) {
    let answer = 0;
    let movedarr = [];
    
    for(let i = 0; i<moves.length; i++){
        for(let j = 0; j<board.length; j++){
            let searchIndex = board[j][moves[i]-1] //board[0][0] > [1][0] > [2][0]
             if (searchIndex){
                if (searchIndex === movedarr[movedarr.length-1]){
                   answer += 2;
                   movedarr.pop(); 
                }
                else {
                    movedarr.push(searchIndex)
                }
                board[j][moves[i]-1] = 0;
                 break;
              }
          }
    }
    return answer
}
    
 
        
    // moves값 1 일때 > 인덱스 1번 순회 > 0아닌 숫자만나면 해당 숫자 무조건 0으로 만들어주고
    // movedarr의 마지막값과 비교해서
    // 다르면 movearr에 넣기 / 같으면 answer += 2 해주고 movedarr의 마지막 인덱스 제거해주기 
    
