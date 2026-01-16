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
        
        // Bonus ajouté : max 1 @ dans l'email
        it("devrait rejeter un email qui contient plusieurs @", () => {
            //Arrange
            const email = "test@email.123@"
            
            //Act
            const result = validateEmail(email);

            //Assert
            expect(result).toBe(false);
        });

    });

    describe("Il doit contenir au moins un point dans le nom de domaine (et pas le dernier caractère)", () => {
        it("devrait rejeter un email qui ne contient pas de point", () => {
            //Arrange
            const email = "test123@gmail"
            
            //Act
            const result = validateEmail(email);

            //Assert
            expect(result).toBe(false);
        });

        it("devrait rejeter un email qui contient un point en dernier charactère", () => {
            //Arrange
            const email = "test123@gmail."
            
            //Act
            const result = validateEmail(email);

            //Assert
            expect(result).toBe(false);
        });

    });

    describe("Il ne peut contenir aucun espace", () => {
        it("devrait rejeter un email qui contient un espace", () => {
            //Arrange
            const email = "test123@gma il.com"
            
            //Act
            const result = validateEmail(email);

            //Assert
            expect(result).toBe(false);
        });
    });

    describe("Il doit avoir du texte avant et après le @", () => {
        it("devrait rejeter un email qui ne contient rien avant le @", () => {
            //Arrange
            const email = "@gmail.com"
            
            //Act
            const result = validateEmail(email);

            //Assert
            expect(result).toBe(false);
        });

        it("devrait rejeter un email qui ne contient rien avant le @", () => {
            //Arrange
            const email = "test123@"
            
            //Act
            const result = validateEmail(email);

            //Assert
            expect(result).toBe(false);
        });
    });
})