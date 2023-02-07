const Engineer = require("../lib/Engineer");

test("set github", () => {
    const testValue = "Github User";
    const employee = new Engineer("Ade", 1, "Ade@gmail.com", testValue);
    expect(employee.github).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Ade", 1, "Ade@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("getGithub function", () => {
    const testValue = "Github User"
    const employee = new Engineer("Ade", 1, "Ade@gmail.com", testValue);
    expect(employee.getGithub()).toBe(testValue);
});