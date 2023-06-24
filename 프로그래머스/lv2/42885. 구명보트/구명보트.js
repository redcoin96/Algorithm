function solution(people, limit) {
    people = people.sort((a, b) => b - a);
    let count = 0
    let i = 0;
    while (people[i]) {
       if (people[i] + people[people.length - 1] > limit) {
         count++;
       } else {
         people.pop();
         count++;
       }
       i++
    }
    return count
}