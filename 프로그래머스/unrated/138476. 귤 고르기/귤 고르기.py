#입력값 k가 귤의 종류보다 큰 경우, 즉 선택할 수 있는 귤의 종류 수가 선택해야 하는 귤의 개수보다 작은 경우에 대한 처리가 되어있지 않아서 테스트 케이스를 통과하지 못합니다. 이 경우에는 모든 귤을 선택해도 귤의 종류 수는 선택해야 하는 귤의 개수보다 작아지게 됩니다. 따라서 이 경우에는 귤의 종류 수를 그대로 반환해주어야 합니다.
#solution(5, [1, 2, 3, 4, 5, 6, 7, 8, 9])

def solution(k, tangerine):
    data = {}
    for i in range(len(tangerine)):
        if len(data) == 0 or tangerine[i] not in data:
            data[tangerine[i]] = 1
        elif tangerine[i] in data:
            data[tangerine[i]] += 1

    arr = sorted(list(data.values()), reverse=True)
 
    
    sum = 0

    for i in range(len(arr)):
        sum += arr[i]
        if sum >= k:
            return i+1