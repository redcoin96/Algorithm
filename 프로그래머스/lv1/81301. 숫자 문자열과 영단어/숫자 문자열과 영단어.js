function solution(s) {
    const numCheck = /^[0-9]+$/; 
    let current = ''
    let answer = []
    for(i=0; i<s.length; i++){
        if(!numCheck.test(s[i])) current += s[i] 
        else answer.push(s[i])
        switch(current){
            case 'zero':
                answer.push(0);
                current = '';
                break;
            case 'one':
                answer.push(1);
                current = '';
                break;
             case 'two':
                answer.push(2);
                current = ''; 
                break;
             case 'three':
                answer.push(3);
                current = '';    
                break;
             case 'four':
                answer.push(4);
                current = '';  
                break;
              case 'five':
                answer.push(5);
                current = '';   
                break;
              case 'six':
                answer.push(6);
                current = '';
                break;
             case 'seven':
                answer.push(7);
                current = '';  
                break;
            case 'eight':
                answer.push(8);
                current = ''; 
                break;
            case 'nine':
                answer.push(9);
                current = ''; 
                break;
        }
    }
    return Number(answer.join(''))
}