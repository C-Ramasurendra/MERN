console.log("hello");
var a=5;
 a=10;
const c=30;
var a=10;
var b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
//relational operators(>,<,==,>=,<=)
var a=10;
var b=20;
  console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
a=10;
b="10";
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);
a="true";
b="false";
console.log(a&&b);
console.log(a||b);
console.log(!a);
//array 
var arr=[10,20,30,40];
console.log(arr);
console.log(typeof arr);

let i=1;
while(i<=10){
  console.log(i);
  i++;
}
//do while
i=1;
do{
    console.log("do while");
}while(i==0)
  for (let i=0;i<=10;i++)
  if(i%2==0){
    console.log(i)
  } 
  i=69;
  if(i%2==0)
  {
    console.log("even");
  }
  else{console.log("odd")}
  let m=80;
  if(m>=90)console.log("o grade");
  else if(m>=80)console.log("A grade");
  
  var arr1=[10,20,30];
  var arr2=[...arr1,40,50,60];
  console.log(arr2);
  // destrusturing operator
  var [m1,m2,m3,m4,m5]=[89,90,99,96,87]
  console.log(m1);
  console.log(m2);
  console.log(m3);
  console.log(m4);
  console.log(m5);

  var {name,age,Dept}={name:"A",age:24,dept:["cs","ds"]}
  console.log(name);
  console.log(age);
  console.log(Dept);