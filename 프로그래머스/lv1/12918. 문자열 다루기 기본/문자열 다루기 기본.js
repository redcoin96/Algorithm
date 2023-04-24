function solution(s) {
    const reg = /^\d+$/
    if (s.length !== 4 && s.length !== 6) return false;
    if (reg.test(s)) return true;
    else return false;
}