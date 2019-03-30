const users = [
  1,
  'text',
  {
    name: 'Minh',
    age: {
      yearOlds: 25,
      birthday: '5-8-1994'
    },
    sex: 'male',
    friends: ['Thiem', 'Nhan'],
    greeting: function () {
      console.log('hello, I am ',this.name)
    }
  },
  {
    name: 'Thiem',
    age: {
      yearOlds: 25,
      birthday: '14-2-1994'
    },
    sex: undefined,
    friends: ['Minh', 'Nhan'],
    greeting: function () {
      console.log('hello, I am ',this.name)
    }
  },
  {
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
]
// filter, map, 
const validUser = users.filter( item => typeof item === 'object')

const undefinedSexMember = validUser.filter( item => !item.sex)

const nameOfUsers = validUser.map( item => ({ name: item.name}))

const nameOfUsersDestructing = validUser.map( ({ name }) =>  ({name})) //object

// console.log(nameOfUsers, nameOfUsersDestructing)

const totalAge = validUser.reduce( 
  (accum, item) => accum + `${item.name} ,`,
  'ten 3 thang '
)

console.log(totalAge)
