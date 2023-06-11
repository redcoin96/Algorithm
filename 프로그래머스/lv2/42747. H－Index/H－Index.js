function solution(citations) {
  let a = 0;
  let b = citations.length;
  while(a<=b){
      a++
      b = citations.filter(item => item>=a).length
  }
  return a-1
}
/*
a 번 이상 인용된 논문의 수가 b 개라면, 
"h = a, b 중 더 작은 값" 이고,
h-index 는 이런 h 중 최대값 입니다.*/