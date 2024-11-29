const { getAllUsers }  = require('../data-access/users.dao');

class UsersDomain {
  constructor() {}

  async getActiveUsers() {
    const allUsers = await getAllUsers();
    const thisWeek = new Date();
    thisWeek.setHours(0, 0, 0, 0);
    thisWeek.setDate(thisWeek.getDate() - thisWeek.getDay());
    
    return allUsers.filter(user => {
      const lastLogin = new Date(user.lastLogin);
      return lastLogin >= thisWeek;
    });
  }
}

module.exports = UsersDomain;
