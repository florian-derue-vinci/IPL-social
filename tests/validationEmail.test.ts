import { validateEmail } from "../src/validationEmail"

describe("validateEmail", () => {

    describe("Il doit contenir au moins un @", () => {
        it("devrait rejeter un email qui ne contient pas de @", () => {
            //Arrange
            const email = "test123.gmail"
            
            //Act
            const result = validateEmail(email);

            //Assert
            expect(result).toBe(false);
        });

    });

    describe("Il doit contenir au moins un point dans le nom de domaine (et pas le dernier caractère)", () => {

        it("devrait rejeter un email qui ne contient pas de point", () => {
            //Arrange
            const email = "test123gmail"
            
            //Act
            const result = validateEmail(email);

            //Assert
            expect(result).toBe(false);
        });

        it("devrait rejeter un email qui contient un point en dernier charactère", () => {
            //Arrange
            const email = "test123gmail."
            
            //Act
            const result = validateEmail(email);

            //Assert
            expect(result).toBe(false);
        });

    });
})