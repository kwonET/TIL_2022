//1
var myName = "Beau" //모든 영역에서 사용 가능

myName = 8

let ourName = "freeCodeCamp" //선언된 영역 안에서만 사용 가능

const pi = 3.14 //변하지 않는 변수

//2
var a;
var b=2; // b에 2가 할당되었다.
console.log(a) //null

a=7;
b=a; //a의 내용을 b에 할당

console.log(a) // 내용을 보여줌.

//3
var a=9; //초기화

//4
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result+= "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    console.log(result); 
}

wordBlanks("dog","adorable","run","quickly");

//5 
var myArray=[["John",23],["cat",2]];
myArray.push(["happy",3]);
