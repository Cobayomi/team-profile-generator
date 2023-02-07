const Manager = require("../lib/Manager.js");

test("set office number", () => {
    const testValue = 10
    const employee = new Manager("Josh", 10, "josh@gmail.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Manager"
    const employee = new Manager("Josh", 10, "josh@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("get office number", () => {
    const testValue = 10
    const employee = new Manager("Josh", 10, "josh@gmail.com", testValue)
    expect(employee.getOfficeNumber()).toBe(testValue);
});