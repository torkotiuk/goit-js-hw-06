import users from './users.js';

const getSortedUniqueSkills = users => {
  //
  let uniqueSkills = users
    //not unique skills//-//-//
    .reduce(function (total, user) {
      total.push(...user.skills);
      return total;
    }, [])
    //-//-//
    //show only unique skills//-//-//
    .reduce((acc, skill) => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
      return acc;
    }, [])
    //-//-//
    .sort();
  ///////
  return uniqueSkills;
  //
};

console.log(getSortedUniqueSkills(users));
// sk.console.log(sk);
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
