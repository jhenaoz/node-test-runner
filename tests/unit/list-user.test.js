const {describe, it, mock, beforeEach} = require("node:test");
const { deepEqual } = require('node:assert/strict');
const usersDao = require('../../src/data-access/users.dao');

describe("Given a list of users", () => {
  describe("When the users login to the platform during the last week", () => {
    let usersDomain;
    const aliceUser = {
      id: 1,
      name: 'Alice',
      lastLogin: new Date().toISOString()
    };
    beforeEach((context) => {
      const mockFunction = async () => new Promise((resolve)=> {
        resolve([
          aliceUser, 
          {
            id: 2,
            name: 'Bob',
            lastLogin: '2021-09-12T10:00:00.000Z'
          },
          {
            id: 3,
            name: 'Charlie',
            lastLogin: '2021-09-13T11:00:00.000Z'
          }
        ])
      })
      const fn = context.mock.method(usersDao, 'getAllUsers');
      fn.mock.mockImplementation(mockFunction);
      usersDomain = require('../../src/domain/users.domain.js');
    });

    it("Then they should be present in the active users response", async () => {
      // Arrange
      const userService = new usersDomain();

      // Act
      const activeUsers = await userService.getActiveUsers();

      // Assert
      deepEqual(activeUsers, [aliceUser]);
    });
  });
});
