const Intern = require("../lib/Intern");

test("Set school", () => {
    const testValue = "UWM"
    const employee= new Intern("Carrington", "123", "test@email", testValue);
    expect(employee.school).toBe(testValue);
});

test("getSchool function", () => {
    const testValue = "UWM"
    const employee = new Intern("Carrington", "123", "test@email.com", testValue);
    expect(employee.getSchool()).toBe(testValue)
});

test("getRole", () => {
    const testValue = "Intern"
    const employee = new Intern("Carrington", testValue);
    expect(employee.getRole()).toBe(testValue)
});