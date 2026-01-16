/*
    Valide un email selon certains critères
    email : string | l'email a valider
    renvois vrai si valide, faux sinon
*/
export function validateEmail(email: string) : boolean{
    // Doit contenir au moins 1 @
    if (!email.includes("@")) return false;

    // Séparer local (ce qu'il y a avant le @) et domaine (ce qu'il y a après)
    const parts = email.split("@");
    const domaine = parts[parts.length -1];

    // Doit contenir au moins 1 point dans le domaine (et pas en dernier charactère)
    if (!domaine.includes(".") || domaine.endsWith(".")) return false;

    // Ne peut pas contenir d'espace
    if (email.includes(" ")) return false;
    return true;
}