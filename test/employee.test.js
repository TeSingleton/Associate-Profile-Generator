const Employee = require("../lib/employee");

// test the methods from the Employee Class

describe("Employee", () => {
  describe("getRole", () => {
    // testing object properties after constructing a new instance
    it("should pass thru a role when the method getRole is called", () => {
      // arrange, create a new employee object
      const employee = new Employee(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );
      // Act...Call the getRole method and store the result
      const employeeName = employee.getRole();

      // Assert.. The result is equal to an expected value
      expect(employeeName).toEqual("Employee");
    });
  });
  describe("getID", () => {
    it("should pass through the stored ID when getID method is called", () => {
      const employee = new Employee(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );

      const employeeID = employee.getID();

      expect(employeeID).toEqual("111011");
    });
  });

  describe("getEmail", () => {
    it("should pass through the stored email when the method", () => {
      const employee = new Employee(
        "Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
      );

      const employeeEmail = employee.getEmail();

      expect(employeeEmail).toEqual("worksingletonmcdaniel@gmail.com");
    });
  });
});
