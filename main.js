// 1. Print numbers from 1 to 10
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print the odd numbers less than 100
console.log("Odd numbers less than 100:");
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}

// 3. Print the multiplication table with 7
console.log("Multiplication table of 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 4. Print all the multiplication tables with numbers from 1 to 10
console.log("Multiplication tables from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication table for ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('-------------------');
}

// 5. Calculate the sum of numbers from 1 to 10
const sum1To10 = Array.from({ length: 10 }, (_, i) => i + 1).reduce((acc, val) => acc + val, 0);
console.log(`Sum of numbers from 1 to 10: ${sum1To10}`);

// 6. Calculate 10!
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
console.log(`10! = ${factorial(10)}`);

// 7. Calculate the sum of even numbers greater than 10 and less than 30
const sumEven = Array.from({ length: 29 - 10 }, (_, i) => i + 11)
                     .filter(num => num % 2 === 0)
                     .reduce((acc, val) => acc + val, 0);
console.log(`Sum of even numbers between 11 and 29: ${sumEven}`);

// 8. Convert Celsius to Fahrenheit
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
console.log(`25°C to Fahrenheit: ${celsiusToFahrenheit(25)}°F`);

// 9. Convert Fahrenheit to Celsius
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
console.log(`77°F to Celsius: ${fahrenheitToCelsius(77)}°C`);

// 10. Calculate the sum of numbers in an array
const sumArray = arr => arr.reduce((acc, val) => acc + val, 0);
const numbersArray = [1, 2, 3, 4, 5]; // Example array
console.log(`Sum of array: ${sumArray(numbersArray)}`);

// 11. Calculate the average of numbers in an array
const averageArray = arr => sumArray(arr) / arr.length;
console.log(`Average of array: ${averageArray(numbersArray)}`);

// 12. Return an array of positive numbers
const positiveNumbers = arr => arr.filter(num => num > 0);
console.log(`Positive numbers in [-5, 0, 5, 10]: ${positiveNumbers([-5, 0, 5, 10])}`);

// 13. Find the maximum number in an array
const maxInArray = arr => Math.max(...arr);
console.log(`Max in [1, 2, 3, 4, 5]: ${maxInArray([1, 2, 3, 4, 5])}`);

// 14. Print the first 10 Fibonacci numbers without recursion
const fibonacciWithoutRecursion = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
};
console.log(`First 10 Fibonacci numbers: ${fibonacciWithoutRecursion(10)}`);

// 15. Find the nth Fibonacci number using recursion
const nthFibonacci = n => (n <= 1 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));
console.log(`5th Fibonacci number: ${nthFibonacci(5)}`);

// 16. Check if a number is prime
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
console.log(`Is 7 prime? ${isPrime(7)}`);

// 17. Calculate the sum of digits of a positive integer
const sumOfDigits = num => String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
console.log(`Sum of digits of 1234: ${sumOfDigits(1234)}`);

// 18. Print the first 100 prime numbers
const firstNPrimes = (n) => {
    const primes = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes;
};
console.log(`First 100 prime numbers: ${firstNPrimes(100)}`);

// 19. Return first "p" prime numbers greater than "n"
const primesGreaterThanN = (n, p) => {
    const primes = [];
    let num = n + 1;
    while (primes.length < p) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes;
};
console.log(`First 5 prime numbers greater than 10: ${primesGreaterThanN(10, 5)}`);

// 20. Rotate an array to the left 1 position
const rotateLeft = arr => [...arr.slice(1), arr[0]];
console.log(`Rotate left [1, 2, 3]: ${rotateLeft([1, 2, 3])}`);

// 21. Rotate an array to the right 1 position
const rotateRight = arr => [arr[arr.length - 1], ...arr.slice(0, -1)];
console.log(`Rotate right [1, 2, 3]: ${rotateRight([1, 2, 3])}`);

// 22. Reverse an array
const reverseArray = arr => [...arr].reverse();
console.log(`Reverse [1, 2, 3]: ${reverseArray([1, 2, 3])}`);

// 23. Reverse a string
const reverseString = str => str.split('').reverse().join('');
console.log(`Reverse "hello": ${reverseString("hello")}`);

// 24. Merge two arrays
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(`Merge [1, 2] and [3, 4]: ${mergeArrays([1, 2], [3, 4])}`);

// 25. Return numbers that are in one array but not both
const symmetricDifference = (arr1, arr2) => {
    const uniqueToFirst = arr1.filter(x => !arr2.includes(x));
    const uniqueToSecond = arr2.filter(x => !arr1.includes(x));
    return [...uniqueToFirst, ...uniqueToSecond];
};
console.log(`Symmetric difference of [1, 2, 3] and [3, 4, 5]: ${symmetricDifference([1, 2, 3], [3, 4, 5])}`);

// 26. Return elements in the first array but not in the second
const difference = (arr1, arr2) => arr1.filter(x => !arr2.includes(x));
console.log(`Difference of [1, 2, 3] and [2, 3]: ${difference([1, 2, 3], [2, 3])}`);