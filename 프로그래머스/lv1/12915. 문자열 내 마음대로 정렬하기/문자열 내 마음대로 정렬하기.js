function solution(strings, n) {
    /*sort 알고리즘 자체는 2개의 배열 인자를 뺄셈연산을 이용하여,
    뺀값이 양수면 2개의 배열인자를 자리바꿈하고, 음수면 바꾸지않음.*/
  return strings.sort(function(a,b){
      const first = a[n];
      const second = b[n];
      if(first<second){
          return -1
      } else if(first>second){
          return 1
      } else return a.localeCompare(b);
  })

}