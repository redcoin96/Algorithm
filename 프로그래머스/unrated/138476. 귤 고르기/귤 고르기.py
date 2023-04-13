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