const Manager = require("../lib/manager");

describe("Manager Class", () => {
  it("getName() should return Manager's name", () => {
    const newManager = new Manager("Chuck", 2, "notreal@gmail.com", 7);
    expect(newManager.getName()).toBe("Chuck");
  });
  it("getID() should return Manager ID", () => {
    const newManager = new Manager("Chuck", 2, "notreal@gmail.com", 7);
    expect(newManager.getID()).toBe(2);
  });
  it("getEmail() should return Manager's email", () => {
    const newManager = new Manager("Chuck", 2, "notreal@gmail.com", 7);
    expect(newManager.getEmail()).toBe("notreal@gmail.com");
  });
  it("getOffice() should return Manager's Office Number", () => {
    const newManager = new Manager("Chuck", 2, "notreal@gmail.com", 7);
    expect(newManager.getOffice()).toBe(7);
  });
  it("getRole() should return 'Manager'", () => {
    const newManager = new Manager("Chuck", 2, "notreal@gmail.com", 7);
    expect(newManager.getRole()).toBe("Manager");
  });
});
