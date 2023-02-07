func();
function func() {
  // 함수안의 this는 함수의 주인에게 바인딩됨
  console.log("func");
  console.log(this); // window
  console.log(this === window);
}

console.log("window");
console.log(this); // window
console.log(this === window);

myFunc();
myFuncStrict();
function myFunc() {
  this.num = 100;
  console.log(num); // 100

  num++;
  console.log(window.num); // 101
  console.log(num); // 101
}

function myFuncStrict() {
  "use strict";
  // UseStrict 사용시 this는 디폴트 바인딩이 없기 때문에 undefined가 됨
  // this.num = 100   Error! this가 undefined이기 때문에 오류가 뜸
}

var person = {
  name: "Name",
  fullname: function () {
    return this.name;
  },
};

console.log(person.fullname()); // Name

var num = 200;

function funcNum() {
  console.log(this.num); // 200
}

var objNum = {
  num: 400,
  func: funcNum,
};

objNum.func(); // func를 objNum이 호출했기때문에 this는 objNum이 되고 this.num은 400이 된다

// 생성자 함수가 생성하는 this는 생성자 함수가 생성한 객체로 바인딩된다
function Vehicle(type) {
  this.type = type;
}

var car = new Vehicle("car");
var cycle = new Vehicle("cycle");

console.log(car.type); // car
console.log(cycle.type); // cycle

// new키워드를 빼면 생성자함수가아닌 일반 함수로 호출하기때문에 this가 window에 바인딩 됨
var type = "window";
var walk = Vehicle("walk");

console.log(window.type); // walk

// apply와 call함수는 this를 명시적으로 바인딩해줌, this의 주인을 정해준다고 생각하면 됨
function thisMaster() {
  console.log(this);
}

thisMaster(); // window

var obj = {
  a: 000,
};

// call을 통해 this의 주인을 obj로 설정했으므로 thisMaster에서 불러오는 this는 obj가 됨
thisMaster.call(obj); // {a: 000}
