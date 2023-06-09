function solution(cards1, cards2, goal) {
    let currentCard; 
    let otherCard;
    let currentIndex; 
    let ans = [] 
    
    if(cards1.includes(goal[0])){
        currentCard = cards1;
        otherCard = cards2;
        currentIndex = cards1.indexOf(goal[0])
        ans.push(goal[0])
    } else if(cards2.includes(goal[0])){
        currentCard = cards2;
        otherCard = cards1;
        currentIndex = cards2.indexOf(goal[0])
        ans.push(goal[0])
    } else return "No"
    
 for(let i = 1; i<goal.length; i++){ 
     if(currentCard[currentIndex+1] === goal[i] ){
         currentIndex++
         ans.push(goal[i])
    } else if(otherCard.includes(goal[i])){
        [currentCard, otherCard] =  [otherCard, currentCard]
        currentIndex = currentCard.indexOf(goal[i])
        ans.push(goal[i])
    } else break;
}  
  return goal.length === ans.length ? "Yes" : "No"
}