describe("Todo App UI Test Suite",()=>{
    it("should navigate to the todo application",()=>{
        cy.visit("http://localhost:3000/")
    })

    it("should click Add Todo button",()=>{
        cy.contains('Add Todo').click()
    })

    it("should click Active button",()=>{
        cy.contains('Active').click()
    })

    it("should click Completed button",()=>{
        cy.contains('Completed').click()
    })

    it("should click All button",()=>{
        cy.contains('All').click()
    })

    it("should add a todo",()=>{
        cy.get('input')
	  .type('eating a lunch')
	cy.contains('Add Todo').click()
    })

    it("should confirm a todo is under Active",()=>{
        cy.contains('Active').click()
    })
    
    it("should confirm a todo is NOT under Completed",()=>{
        cy.contains('Completed').click()
    })

    it("should click All button to go to the main",()=>{
        cy.contains('All').click()
    })
    
    it("should click on the todo to move to Completed section",()=>{
        cy.contains('eating a lunch').click()
    })

    it("should confirm a todo is NOT under Active",()=>{
        cy.contains('Active').click()
    })
    
    it("should confirm a todo is under Completed",()=>{
        cy.contains('Completed').click()
    })

    it("should click All button to go to the main",()=>{
        cy.contains('All').click()
    })

    it("should add another todo",()=>{
        cy.get('input')
	  .type('going to the gym')
	cy.contains('Add Todo').click()
    })

    it("should confirm one todo is under Active",()=>{
        cy.contains('Active').click()
    })
    
    it("should confirm one todo is under Completed",()=>{
        cy.contains('Completed').click()
    })

    it("should click All button to go to the main",()=>{
        cy.contains('All').click()
    })

    it("should click on the first todo to move back to Active section",()=>{
        cy.contains('eating a lunch').click()
    })

    it("should confirm both todos are under Active",()=>{
        cy.contains('Active').click()
    })

    it("should confirm no todo is under Completed",()=>{
        cy.contains('Completed').click()
    })

    it("should click All button to go to the main",()=>{
        cy.contains('All').click()
    })

    it("should click on the first todo to move to Completed section",()=>{
        cy.contains('eating a lunch').click()
    })

    it("should click on the second todo to move to Completed section",()=>{
        cy.contains('going to the gym').click()
    })

    it("should confirm both todos are under Completed",()=>{
        cy.contains('Completed').click()
    })

    it("should confirm no todos are under Active",()=>{
        cy.contains('Active').click()
    })

    it("should click All button to go to the main",()=>{
        cy.contains('All').click()
    })
})

