function titleCase(sentence: string) {
    const tCase = []
    const split = sentence.split(" ")
    const changeCase = split.map(item => {
        var text = item.split("")
        const firstText = text[0].toUpperCase()
        text.shift()
        const newArray = [firstText, ...text]
        return newArray.join("")
    })

    return changeCase.join(" ")
}
// console.log(titleCase("my name is shakib"))

function findMissingNumber(numbers: number[]) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0)
    return sum
}

// console.log(findMissingNumber([1, 2, 4, 5]))
function reverseString(text: string) {
    return text.split("").reverse().join("")
}
// console.log(reverseString("level"))

function fizzBuzz(nums: number) {
    for (let i = 0; i <= nums; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FIZZBUZZ")
        } else if (i % 3 === 0) {
            console.log("FIZZ")
        } else if (i % 5 === 0) {
            console.log("BUZZ")
        } else {
            console.log(i)
        }
    }
}

// fizzBuzz(9)

// find largest number

function findLargestNumber(numbers: number[]) {
    let largeNumber = 0
    for (const number of numbers) {
        if (number > largeNumber) {
            largeNumber = number
        }
    }
    return largeNumber
}
// console.log(findLargestNumber([20,40,10,22,15,50,100,1]))
function checkPalindrome(text: string) {
    return text.split("").reverse().join("") === text
}
// console.log(checkPalindrome("level"))