const Employee = require("../lib/employee");

describe("Employee", () => {

        describe("getRole",()=>{
            // testing object properties after constructing a new instance
            it("should pass thru a role when the method getRole is called",()=>{
                    // arrange, create a new employee object
                const employee = new Employee("Svante", "111011", "worksingletonmcdaniel@gmail.com")
                // Act...Call the getRole method and store the result
                const employeeName = employee.getRole();

                // Assert.. The result is equal to an expected value
                expect(employeeName).toEqual("Employee")
            })

        })
    
});
