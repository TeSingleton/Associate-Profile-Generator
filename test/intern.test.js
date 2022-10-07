const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("getRole", () => {
    it("should pass through the entered name when getName is called", () => {
      const intern = new Intern(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );

      const internRole = intern.getRole();

      expect(internRole).toEqual("Intern");
    });
  });

  describe("getName", () => {
    it("should pass the ID when getID is called", () => {
      const intern = new Intern(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );

      const interName = intern.getName();

      expect(interName).toEqual("Svante");
    });
  });

  describe("getID", () => {
    it("should pass through the stored ID when getID is called", () => {
      const intern = new Intern(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );

      const internID = intern.getID();

      expect(internID).toEqual("111011");
    });
  });

  describe("getEmail", () => {
    it("should pass through the stored email when the getEmail method is called", () => {
      const intern = new Intern(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );

      const internEmail = intern.getEmail();

      expect(internEmail).toEqual("worksingletonmcdaniel@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("should pass through the stored email when method getSchool is called", () => {
      const intern = new Intern(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com",
        "UNLV"
      );

      const internSchool = intern.getSchool();

      expect(internSchool).toEqual("UNLV");
    });
  });
});
