shift(移动、改变) 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

unshift(添加、改变) 方法在数组的开头添加一个或多个元素。此方法更改数组的长度。
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
