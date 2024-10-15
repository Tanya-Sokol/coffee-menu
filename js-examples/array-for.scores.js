function getAverage(scores) {
    let sum = 0;
    const arrayLenght = scores.length;

    for (let i = 0; i < arrayLenght; i++) {
        const currentScore = scores[i];
        sum = sum + currentScore;

        console.log(currentScore);
        console.log(i);
        console.log(scores[i]);
    }

    return sum / arrayLenght;
}

console.log("result", getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
