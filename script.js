let line = 'I like JavaScript language five six seven';
console.log('Original line: ' + line);
console.log('==============================');
// line to array
const ArrFromStr = line.split(' ');


// простецкий способ revers

console.log(ArrFromStr.reverse().join(" "));

console.log('==============================');





// замороченный способ через FOR

const newArray = [];
for (let i = ArrFromStr.length; i >= 0; i--) {
  newArray.unshift(ArrFromStr[i]);  
}
console.log(newArray.join(" "));

console.log('==============================');





// замороченный способ через forEach

const newArray2 = [];
ArrFromStr.forEach( (item) => newArray2.push(item)  );
console.log(newArray2.join(" "));

//  !!!!МАААЛЕНЬКАЯ ремарка!!!
// изначально задумывалось что в forEach будет браться первый
// элемент оригинального массива и методом unshift() будет 
// добавляться в НАЧАЛО нового массива. но на практике 
// оказалось что forEach берет ПОСЛЕДНИЙ элемент и поэтому
// пришлось "пушить" в конец нового элемента