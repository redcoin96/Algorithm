function solution(my_string, index_list) {
    const arr = my_string.split('');
    let answer = '';
    for(i=0; i<index_list.length; i++){
        answer += arr[index_list[i]]
    }
    return answer
}