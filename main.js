
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
