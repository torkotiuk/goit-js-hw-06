import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  const filteredFriends = users.filter(user =>
    user.friends.includes(friendName),
  );

  return filteredFriends.map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
