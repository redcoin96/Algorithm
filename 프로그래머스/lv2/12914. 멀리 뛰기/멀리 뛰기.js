function solution(n) {
    let dp = new Array(n+1).fill(0);
    dp[0] = 1
    dp[1] = 1
    
    for(let i = 2; i<=n; i++){
        dp[i] = (dp[i-2]+dp[i-1])%1234567
    }

    return dp[n]
}

//피보나치 문제
//f(i)=f(i-1)+f(i-2)
//https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EB%A9%80%EB%A6%AC-%EB%9B%B0%EA%B8%B0-JS 