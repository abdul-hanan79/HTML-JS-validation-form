/*
1.Create an array that contains 10 unique integers in the range of 1-100. The numbers should be randomized 
and saved in the array. Should a number be randomized that is already in the array, a new number should be 
randomized. Sort these numbers so lowest comes first using the appropriate function and presenting the result
 on the screen, both the unsorted and the sorted array must be printed.
*/



var numberArray = new Array();
//this function is use for random number generator
function randomNumberGenerator(arr) {
    for (var i = 0; i < 11; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}
//below i pass blank array to function and save in randomizedArray 
var randomizedArray = randomNumberGenerator(numberArray);



console.log(`Un Sorted Array --> ${randomizedArray}`);
//here is the function which is used to sorting the array in ascending order
function arraySorting(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
    return arr;
}

// here i pass randomized array to function and store in sorted Array
var sortedArray=new Array()

sortedArray=arraySorting(randomizedArray);

console.log(`Sorted Array --> ${sortedArray}`);
