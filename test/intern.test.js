const Intern = require("../lib/intern");

describe("Intern Class", () => {
  it("getName() should return intern's name", () => {
    const newIntern = new Intern("Chuck", 2, "notreal@gmail.com", "Texas");
    expect(newIntern.getName()).toBe("Chuck");
  });
  it("getID() should return intern ID", () => {
    const newIntern = new Intern("Chuck", 2, "notreal@gmail.com", "Texas");
    expect(newIntern.getID()).toBe(2);
  });
  it("getEmail() should return intern's email", () => {
    const newIntern = new Intern("Chuck", 2, "notreal@gmail.com", "Texas");
    expect(newIntern.getEmail()).toBe("notreal@gmail.com");
  });
  it("getSchool() should return intern's school", () => {
    const newIntern = new Intern("Chuck", 2, "notreal@gmail.com", "Texas");
    expect(newIntern.getSchool()).toBe("Texas");
  });
  it("getRole() should return 'Intern'", () => {
    const newIntern = new Intern("Chuck", 2, "notreal@gmail.com", "Texas");
    expect(newIntern.getRole()).toBe("Intern");
  });
});
