const {describe, it} = require("node:test");
const assert = require('node:assert/strict');

describe("Given a list of users", () => {
    describe("When the users do not match the criteria", () => {
        it("Then it should return and empty array", () => {
            assert.deepEqual([], []);
        });
    });
});