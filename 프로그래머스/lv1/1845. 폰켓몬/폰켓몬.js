function solution(nums) {
    let set = [...new Set(nums)]
    if(set.length >= nums.length/2){
        return nums.length/2
    }
    else{
        return set.length
    }
}