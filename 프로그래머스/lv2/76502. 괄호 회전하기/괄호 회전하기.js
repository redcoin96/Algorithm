function solution(s) {
    let arr = [...s]
    let count = 0;
    for (let i = 0; i<arr.length; i++){
        if(i === 0 && check(arr)) count++
        else {
            arr = move(arr);
            if(check(arr)) count++
        }
    }
    return count
}

function move(arr) {
    let bracket = arr.shift();
    arr.push(bracket);
    return arr;
}

function check(arr){
    let stack = [] 
    for (let i = 0; i<arr.length; i++){
        if(stack.length === 0 && (arr[i]==='}' || arr[i]===']' || arr[i]===')')){
            return false
        } 
        stack.push(arr[i])
        
        let lastStr = stack.slice(stack.length-2).join('')
        if (lastStr === "()" || lastStr === "{}" || lastStr === "[]") stack.splice(stack.length-2)
    }
    return stack.length === 0
}