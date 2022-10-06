const Engineer = require("../lib/employee");

describe("Engineer", () => {
  describe("getRole", () => {
    it("should pass thriugh the name inputted when get name is called", () => {
      const engineer = new Engineer(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );
      const employeeRole = engineer.getRole();

      expect(employeeRole).toEqual("Engineer");
    });
  });

  describe("getName", () => {
    it("should pass through the ID when getID is called", () => {
      const engineer = new Engineer(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );

      const employeeName = engineer.getName();

      expect(employeeName).toEqual("Svante");
    });
  });

  describe("getID", () => {
    const engineer = new Engineer(
      "Svante",
      "111011",
      "worksingletonmcdaniel@gmail.com"
    );

    const engineerID = engineer.getID();

    expect(engineerID).toEqual("111011");
  });

  describe("getEmail", () => {
    it("should pass through the stored email when the method getEmail is called ", () => {
      const engineer = new Engineer(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );
      const engineerEmail = engineer.getEmail();

      expect(engineerEmail).toEqual("worksingletonmcdaniel@gmail.com");
    });
  });

  describe("getGithub", () => {
    it("should pass through the stored email when the method getGithub is called", () => {
      const engineer = new Engineer(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );
      const engineerGhub = engineer.getGithub();

      expect(engineerGhub).toEqual("worksingletonmcdaniel@gmail.com");
    });
  });
});
