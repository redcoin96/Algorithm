function solution(a, b) {
    const obj = {
        0:'THU',
        1:'FRI',
        2:'SAT',
        3:'SUN',
        4:'MON',
        5:'TUE',
        6:'WED'
    }
    const thirtyone = [1,3,5,7,8,10,12]
    const thirty = [4,6,9,11]
    let day = 0;
    for(let i = 1; i<a; i++){
        if (i === 2) {
            day += 29
        }
        else if(thirtyone.includes(i)){
           day += 31 
        }
        else {
            day += 30
        }
    }
    day += b
    
    
    return obj[day%7]
}