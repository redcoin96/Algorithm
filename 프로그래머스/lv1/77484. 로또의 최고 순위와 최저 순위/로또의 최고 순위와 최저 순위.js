function solution(lottos, win_nums) {
    let min = lottos.filter(item => win_nums.includes(item)).length
    let max = lottos.filter(item => win_nums.includes(item) | item === 0).length
    let arr = [max, min]
    return arr.map(function(a, i){
        switch(a){
            case 6 : 
                return 1
            case 5 :
                return 2
            case 4 :
                return 3
            case 3 :
                return 4
            case 2 :
                return 5
            case 1 :
                return 6
            case 0 :
                return 6 
        }
    })
}