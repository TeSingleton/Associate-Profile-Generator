const Manager = require("../lib/manager");

describe("Intern", () => {
  describe("gerRole", () => {
    it("should pass through the entered name when getName is called", () => {
      const manager = new Manager(
        " Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );
      const managerRole = manager.getRole();

      expect(managerRole).toEqual("Manager");
    });
  });

  describe("getName", () => {
    it("should pass the ID when getID is called ", () => {
      const manager = new Manager(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );
      const managerName = manager.getName();

      expect(managerName).toEqual("Svante");
    });
  });

  describe("getID", () => {
    it("should pass through the stored ID when the getID is called", () => {
      const manager = new Manager(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );

      const managerID = manager.getID();

      expect(managerID).toEqual("111011");
    });
  });

  describe("getEmail", () => {
    it("should pass through the stored email when the getEmail method is called ", () => {
      const manager = new Manager(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );
      const managerEmail = manager.getEmail();

      expect(managerEmail).toEqual("worksingletonmcdaniel@gmail.com");
    });
  });

  describe("getOfficeNumber", () => {
    it("should pass through the stored email when the getOfficeNumber method is called", () => {
      const manager = new Manager(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com",
        "281-330-8004"
      );
      const managerPhone = manager.getOfficeNumber();

      expect(managerPhone).toEqual("281-330-8004");
    });
  });
});
