import users from './users.js';

const getUsersWithGender = (users, gender) => {
  const filteredGender = users.filter(user => user.gender === gender);
  return filteredGender.map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
