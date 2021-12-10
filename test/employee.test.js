const Employee = require("../lib/employee");

describe("Employee Class", () => {
  it("getName() should return employee's name", () => {
    const newEmployee = new Employee("Chuck", 2, "notreal@gmail.com");
    expect(newEmployee.getName()).toBe("Chuck");
  });
  it("getID() should return employee ID", () => {
    const newEmployee = new Employee("Chuck", 2, "notreal@gmail.com");
    expect(newEmployee.getID()).toBe(2);
  });
  it("getEmail() should return employee's email", () => {
    const newEmployee = new Employee("Chuck", 2, "notreal@gmail.com");
    expect(newEmployee.getEmail()).toBe("notreal@gmail.com");
  });
  it("getRole() should return 'Employee'", () => {
    const newEmployee = new Employee("Chuck", 2, "notreal@gmail.com");
    expect(newEmployee.getRole()).toBe("Employee");
  });
});
