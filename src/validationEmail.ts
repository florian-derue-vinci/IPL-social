// Validation d'Email | Examen DevOps 2026 - Version 1.0

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

    // Amélioration : vérifie qu'il n'y a qu'un seul @ dans l'email (pour éviter les problemes avec split)
    if (parts.length !== 2) return false;

    const domaine = parts[1];
    const local = parts[0]

    // Vérifie qu'il y a quelque chose avant et apres le @
    if (local.length == 0 || domaine.length == 0) return false;

    // Doit contenir au moins 1 point dans le domaine (et pas en dernier charactère)
    if (!domaine.includes(".") || domaine.endsWith(".")) return false;

    // Ne peut pas contenir d'espace
    if (email.includes(" ")) return false;
    return true;
}