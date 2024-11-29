const { describe, it, beforeEach, expect } = require('@jest/globals');
const usersDao = require('../../src/data-access/users.dao.js');
const usersDomain = require('../../src/domain/users.domain.js');

jest.mock('../../src/data-access/users.dao');

describe("Given a list of users", () => {
  describe("When the users login to the platform during the last week", () => {
    const aliceUser = {
      id: 1,
      name: 'Alice',
      lastLogin: new Date().toISOString()
    };

    beforeEach(() => {
      usersDao.getAllUsers.mockImplementation(async () => [
        aliceUser,
        {
          id: 2,
          name: 'Bob',
          lastLogin: '2021-09-12T10:00:00.000Z'
        }
      ]);
    });

    it("Then they should be present in the active users response", async () => {
      // Arrange
      const userService = new usersDomain();

      // Act
      const activeUsers = await userService.getActiveUsers();

      // Assert
      expect(activeUsers).toEqual([aliceUser]);
    });
  });
});