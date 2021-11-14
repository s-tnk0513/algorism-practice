const getSumOfNaturalNumber = (N: number): number => {
    if(N === 0){
        return 0;
    }
    return N + getSumOfNaturalNumber(N-1);
}

console.log(getSumOfNaturalNumber(5))