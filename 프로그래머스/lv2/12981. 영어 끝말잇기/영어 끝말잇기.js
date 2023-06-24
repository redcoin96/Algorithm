function solution(n, words) {
    let stack = [words[0]]
    let lastword = words[0]
    for(let i = 1; i<words.length; i++){
        let currentword = words[i]
        if(!stack.includes(currentword) && lastword[lastword.length-1] === currentword[0]){
            stack.push(words[i])
            lastword = words[i]
        } else {
           let currentIndex = i+1;
           let turn = Math.ceil(currentIndex/n)
           let person = currentIndex - (n*(turn-1))
           return [person, turn]
        }
    }
    return [0,0]
}