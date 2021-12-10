const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  it("getName() should return engineer's name", () => {
    const newEngineer = new Engineer(
      "Chuck",
      2,
      "notreal@gmail.com",
      "gitprofile"
    );
    expect(newEngineer.getName()).toBe("Chuck");
  });
  it("getID() should return Engineer ID", () => {
    const newEngineer = new Engineer(
      "Chuck",
      2,
      "notreal@gmail.com",
      "gitprofile"
    );
    expect(newEngineer.getID()).toBe(2);
  });
  it("getEmail() should return Engineer's email", () => {
    const newEngineer = new Engineer(
      "Chuck",
      2,
      "notreal@gmail.com",
      "gitprofile"
    );
    expect(newEngineer.getEmail()).toBe("notreal@gmail.com");
  });
  it("getGithub() should return Engineer's Github", () => {
    const newEngineer = new Engineer(
      "Chuck",
      2,
      "notreal@gmail.com",
      "gitprofile"
    );
    expect(newEngineer.getGithub()).toBe("gitprofile");
  });
  it("getRole() should return 'Engineer'", () => {
    const newEngineer = new Engineer(
      "Chuck",
      2,
      "notreal@gmail.com",
      "gitprofile"
    );
    expect(newEngineer.getRole()).toBe("Engineer");
  });
});
