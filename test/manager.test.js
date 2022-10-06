const Manager = require("../lib/manager");

describe("Intern",()=>{
    describe("gerRole",()=>{
        it("should pass through the entered name when getName is called",()=>{
            const manager = new Manager(
               " Svante",
        "111011",
        "worksingletonmcdaniel@gmail.com"
            );
             const managerRole = manager.getRole();

             expect(managerRole).toEqual("Manager");
        })
    })

    describe("getName",()=>{
        it("should pass the ID when getID is called ", ()=> {
            const manager = new Manager(
                " Svante",
         "111011",
         "worksingletonmcdaniel@gmail.com"
             );
            const managerName = manager.getName();

            expect(managerName).toEqual("Svante")
        })
    })
})