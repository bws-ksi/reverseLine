let line = 'I like JavaScript language five six seven';

console.log('Original line: ' + line);
console.log('==============================');
// line to array
const ArrFromStr = line.split(' ');


// простецкий способ revers
function reverseLine1(line) {
  const ArrFromStr = line.split(' ');
  console.log(ArrFromStr.reverse().join(" "));
}
reverseLine1(line);
console.log('==============================');





// замороченный способ через FOR

function reverseLine2(line) {
  const ArrFromStr = line.split(' ');
  const newArray = [];
  for (let i = ArrFromStr.length - 1 ; i >= 0; i--) {
    //newArray.unshift(ArrFromStr[i]);
    newArray.push(ArrFromStr[i]);  
  }
  console.log(newArray.join(" "));
}
reverseLine2(line);
console.log('==============================');





// замороченный способ через forEach

function reverseLine3(line){
  const ArrFromStr = line.split(' ');
  const newArray2 = [];
  //ArrFromStr.forEach( (item) => newArray2.push(item)  );
  ArrFromStr.forEach( (item) => newArray2.unshift(item)  );
  console.log(newArray2.join(" "));
};
reverseLine3(line);
