import users from './users.js';

const calculateTotalBalance = users =>
  users.reduce(
    (totalBalance, userBalance) => totalBalance + userBalance.balance,
    0,
  );

console.log(calculateTotalBalance(users)); // 20916
