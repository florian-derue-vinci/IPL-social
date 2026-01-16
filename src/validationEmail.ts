
/*
    Valide un email selon certains critères
    email : string | l'email a valider
    renvois vrai si valide, faux sinon
*/
export function validateEmail(email: string) : boolean{
    // Doit contenir au moins 1 @
    if (!email.includes("@")) return false;

    return true;
}