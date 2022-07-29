function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=(i+1); j<arr.length; j++){
            let sum = arr[i] + arr[j]
            if(sum === 0){
                return true
            }
            // console.log(sum)
        }
    }
    return false
}

// console.log(sumZero([1, 2, 3, 2, -3]))

//space complexity: O(n)

function uniqueChars(str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = (i+1); j < str.length; j++) {
            if(str[i] === str[j]) {
                return false
            }    
            // console.log(str[i])
        }    
    }
    return true
}

// console.log(uniqueChars('Mondayy'));

//space complexity: O(n)

function isPangram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let lowercase = str.toLowerCase()
    

    for(let i = 0; i < alphabet.length; i++){
        // console.log(lowercase.indexOf(alphabet[i]))
        if(lowercase.indexOf(alphabet[i]) === -1){
            return false
        }
    }
    return true
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog'))

//space complexity: O(n)

function longestWord(arr){
    let largest = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > largest){
            largest = arr[i].length
            // console.log(largest)
        }
    }
    return largest
}

// console.log(longestWord(["hi", "hello", "potatoes", "test", "verylongword" ]))

//space complexity: O(n)