function solution(arr) {
  // 배열의 길이가 1이면 [-1]을 반환
  if (arr.length === 1) {
    return [-1];
  }
  
  // 배열에서 가장 작은 값을 찾기 위해 spread operator를 사용해 배열 복사
  const min = Math.min(...arr);
  
  // filter 함수를 사용해 가장 작은 값(min)을 제외한 새로운 배열을 생성
  const answer = arr.filter(num => num !== min);
  
  // 배열이 비어있다면 [-1] 반환, 그렇지 않으면 새로운 배열(answer) 반환
  return answer.length ? answer : [-1];
}