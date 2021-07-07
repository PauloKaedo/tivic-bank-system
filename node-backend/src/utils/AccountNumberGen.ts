function getRandomAccountFirstNumber() {
    return getRandomNumber(10000000, 99999999);
}

function getRandomAccountLastNumber() {
    return getRandomNumber(0, 9);
}

function getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export default function randomAccountNumberGenerator() {
    return getRandomAccountFirstNumber() + "-" + getRandomAccountLastNumber();
}