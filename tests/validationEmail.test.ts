import { validateEmail } from "../src/validationEmail"

describe("validateEmail", () => {

    describe("Contient au moins 1 @", () => {
        it("devrait rejeter un email qui ne contient pas de @", () => {
            //Arrange
            const email = "test123.gmail"
            
            //Act
            const result = validateEmail(email);

            //Assert
            expect(result).toBe(false);
        })

    })
})