
function getAge(user) {
  return user.age
}

const getName = (user) => user.name

const user = {
  name: 'Minh',
  age: {
    yearOlds: 25,
    birthday: '5-8-1994'
  },
  sex: undefined,
  friends: ['Thiem', 'Nhan'],
  greeting: function getName() {
    console.log('hello, I am ',this.name)
  }
}

user.greeting()
// console.log(getName()) 

const mux = (number1) => (number2) => number1 * number2
const muxWithFive = mux(5)
console.log(muxWithFive(3)) 


const user = {
  name: 'Nhan',
  age: {
    yearOlds: 25,
    birthday: '8-3-1994'
  },
  sex: 'female',
  friends: ['Thiem', 'Minh'],
  greeting: function () {
    console.log('hello, I am ',this.name)
  }
}

let { age, name }  = user
name = 'Minh'
age.yearOlds = 26
console.log(user, age, name)
