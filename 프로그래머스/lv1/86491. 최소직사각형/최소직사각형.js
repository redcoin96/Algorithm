function solution(sizes) {
    let arr1 = []
    let arr2 = []
    
    let sortArr = sizes.map(it=>it.sort((a,b)=>b-a))
    sortArr.forEach(function(item){
        arr1.push(item[0])
        arr2.push(item[1])
    })
    
    return Math.max(...arr1) * Math.max(...arr2)
    
    //1. 모든 명함들의 긴 모서리를 가로로 돌려서 겹쳐봅시다.
    //2. 그 상태에서 지갑에 한번에 넣을 수 있으려면 세로길이는 어떻게 해야할지 상상해봅시다!
}