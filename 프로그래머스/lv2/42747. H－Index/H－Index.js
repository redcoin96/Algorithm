function solution(citations) {
  //if (citations.length === 1) return citations[0]
    
  //const max = Math.max(...citations)
  //const midIndex = Math.ceil(citations.length/2)
  //return Math.min(midIndex, citations.filter(item => item>=midIndex).length)
  let a = 0;
  let b = citations.length;
  while(a<=b){
      a++
      b = citations.filter(item => item>=a).length
  }
  return a-1
    
    
}
// [10, 8, 5, 4, 3] [3, 4, 5, 8, 10]
// (0,5)(1,5)(2,5)(3,5)(4,4)      (5,3)(6,2)(7,2)(8,2)(9,1)(10,1)
// 	[0, 0, 0, 0, 1]
// (0,5)(1,1)



// [50] > 1, [1,5] >1,  [5, 6, 7] > 3,
// citations: [3, 1, 0], result: 1
//	[10, 8, 5, 4, 3]
// [3, 4, 5, 8, 10]


/*                                (1,50)
                                  (1,2) (2,1)   (3,1) (4,1) (5,1)
                                  (1,3) (2,3) (3,3)   (4,3) (5,3) (6,2) (7,1)
                                   (3,5) (4,4)
a 번 이상 인용된 논문의 수가 b 개라면, 
"h = a, b 중 더 작은 값" 이고,
h-index 는 이런 h 중 최대값 입니다.*/

/*
[1, 4, 5]: 2
[5, 6, 7]: 3*/

