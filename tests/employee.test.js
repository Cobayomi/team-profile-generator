const Employee = require("../lib/Employee");

describe("Employee constructor", () => {
  it("Returns an employee name", () => {
    //Arrange
    const name = "Capri";
    const id = "91";
    const email = "Capri@gmail.com";
    //Act
     const employee = new Employee(name, id, email);
     //assert
     expect(employee.name).toBe(name);
});

  it("Has correct Id", () => {
    const name = "Capri";
    const id = "91";
    const email = "Capri@gmail.com";
    //act
    const employee = new Employee(name, id, email);
    //assert
    expect(employee.name).toBe(name);
    
}); 

  it("Has correct email", () => {
    const name = "Capri";
    const id = "91";
    const email = "Capri@gmail.com";

});

});

