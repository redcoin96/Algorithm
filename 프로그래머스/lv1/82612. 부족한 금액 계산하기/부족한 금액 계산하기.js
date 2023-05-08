function solution(price, money, count) {
    let totalcost = 0;
    for(let i = 1; i<=count; i++){
        totalcost += price*i
    }
    return totalcost-money>0 ? totalcost-money : 0
}