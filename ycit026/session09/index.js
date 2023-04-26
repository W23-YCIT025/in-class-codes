
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // sorted array // linear search O(n) // Binary search O(log n)
console.log('arr1', arr1);
const arr2 = [5, 2, 6, 9, 22, 25]; // sorted array
console.log('arr2', arr2);
const arr3 = arr2.sort(); // O(n * log n)
console.log('arr3', arr3);
const arr4 = arr2.sort((a, b) => a - b); // O(n ^ 2)
console.log('arr4', arr4); 
// arr4 for binary search O(n * log n) + O(log n) = O(n * log n)