function binarySearchPosition(numbers, target, index=0) {
    // your code here
    let midIndex=Math.floor(numbers.length/2);
    if (numbers[midIndex] === target){
        return index;
    }
    if (numbers.length === 1){
        console.log("can't find target");
    }
    if (target > numbers[midIndex]){
        return (binarySearchPosition(numbers.slice(midIndex, numbers.length), target, index+midIndex));
    } else if (target < numbers[midIndex]){
        return (binarySearchPosition(numbers.slice(0,midIndex),target, index-midIndex));
    }
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0

index = 0;
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3
