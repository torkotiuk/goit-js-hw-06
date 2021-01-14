import users from './users.js';

const getNamesSortedByFriendsCount = (a, b) =>
  a.friends.length - b.friends.length;
console.table(users.sort(getNamesSortedByFriendsCount).map(user => user.name));
