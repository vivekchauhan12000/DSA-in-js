const detail=["apple","juices","fiss"];
const moreItem=["blackberry"];

  function cat(first,second){
 return first.concat(second);
};


console.log(cat(detail,moreItem));

const num=[1,2,3,42,42,50,54,656,553,3435,5356,3434,6556,356,34556,43656,343554,46557545,565564];



function even(number){
  return ((number % 2)==0);
};
function odd(number){
  return ((number % 2)!==0);
};

const oddnum = num.filter(odd);
const evennum= num.filter(even);
console.log(oddnum);
console.log(evennum);

function sameNum(number){
  try {
    return(number==50)
  } catch (error) {
    return error;
  }
 
}
const equal50=num.find(sameNum);
console.log(equal50);

//join string the whole array
console.log(num.join());

//pop remove the last object of array
num.pop()
console.log(num);

//shift remove the starting object of array
num.shift();
console.log(num);

//  push is to add new number in last place in array
num.push(100000);
console.log(num);

//reverse is to reverse the seqence in array
num.reverse();
console.log(num);
num.reverse();

//slice to remove object in given places
console.log(num.slice(0,5));

//splice is use for remove and add element in a array
num.splice(2,0,500,600,700,800);
console.log(num);

//map is use to make changes in given array and return the new changed array array
const mappy=num.map(function double(number){
return (number*26);
})
console.log(mappy);