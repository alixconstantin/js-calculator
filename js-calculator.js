var operateur;
var premiersNombre;
var deuxièmeNombre;

        // Les fonctions qui correspondent aux opérateurs avec une valeur A et B obtenue par le 2 iem et 3 iem prompt.
        // Une condition pour la division, car seul les méchants divise une valeur par 0.
function addition(nombre1, nombre2) {
    let result = nombre1 + nombre2;
    return result;
}

function multiplication(nombre1, nombre2) {
    let result = nombre1 * nombre2;
    return result;
}

function soustraction(nombre1, nombre2) {
    let result = nombre1 - nombre2;
    return result;
}

function division(nombre1, nombre2) {

    if (nombre2 != "0") { // Petite condition pour cette fonction, car diviser par 0 c'est mal ;__; ( != différent de )

        let result = nombre1 / nombre2;
        return result;

    } else {             // Le message d'erreur, si la personne tente une opération débile
        alert("On ne divise jamais par 0, Vous, vous avez une idée derrière la main, j'en mettrais ma tête au feu!");
    }
}




                            
do {    // Recupération du prompt opérateur, valeur1, valeur2
    var operateur = window.prompt("Que souhaitez vous faire : \n\n 1 - Addition \n\n 2 - Multiplication \n\n 3 - Soustraction \n\n 4 - Division ");
    var premiersNombre = window.prompt("Votre premier nombre");
    var deuxièmeNombre = window.prompt("Votre deuxième nombre");//
        // Conversion du type des valeurs string en number ( pour éviter le 1 + 1 = 11, merci la concaténation)
    premiersNombre = Number(premiersNombre);
    deuxièmeNombre = Number(deuxièmeNombre);
        // Evite que le client envoie une valeur qui ne correspond pas aux opérateurs ( 1-4 )
    if (operateur != 1 && operateur != 2 && operateur != 3 && operateur != 4) {
        alert("Il faut écrire 1, 2, 3 ou 4 et vous avez entré : " + operateur + " pour l'opérateur");
        break;
        // Evite que le client rentre des lettres a la place de chiffre (Number) pour la valeur1 et valeur2
    } else if (isNaN(premiersNombre) || isNaN(deuxièmeNombre)) {
        alert("Il faut écrire des nombres et pas des lettres et vous avez rentré au nombre 1 : " + premiersNombre + " et au nombre 2 : " + deuxièmeNombre);
        break;
    } else { // Ici le " If " est utilisé pour les potentiels "erreurs", le else est donc la suite de l'algo si tout va bien

        switch (operateur) { // Switch en fonction du 1 ers prompt de l'opérateur, case en string et pas number car prompt = string 
            case "1":
                var resultat = addition(premiersNombre, deuxièmeNombre); // applique une fonction correspondant a la valeur du 1 ers prompt  => case correspondante, ici prompt 1 => addition(valeur prompt2 et prompt3 en paramètre de fonction)
                alert("le resultat de votre addition est : " + resultat); // alerte du resultat en string + var
                break;

            case "2":
                var resultat = multiplication(premiersNombre, deuxièmeNombre); // etc
                alert("le resultat de votre multiplication est : " + resultat);
                break;

            case "3":
                var resultat = soustraction(premiersNombre, deuxièmeNombre);
                alert("le resultat de votre soustraction est : " + resultat);
                break;

            case "4":
                var resultat = division(premiersNombre, deuxièmeNombre);
                if (resultat != undefined){                                 // si le resultat possède une valeur, elle marche comme les autres fonctions
                alert("le resultat de votre division est : " + resultat);    
                }
                else {                                                      // sinon une réplique de Kameloot ( c'est mieux que rien, la fonction comprend déja une alerte d'erreur :P )
                alert("Si on faisait le coup du bouclier humain ? ... Par exemple, Sire, Léodagan et moi, on fait semblant de vous prendre en otage : on vous met une dague sous le cou et on traverse le camp adverse en gueulant : 'Bougez pas, bougez pas ou on bute le roi!' ... ");
                }
                break;

            default:
                alert("Une erreur est survenue.. TT___TT ");          // Petite sécurité supplémentaire, on est jamais a l'abris d'une exeption non prévue..
        }

    }




}
while (operateur == "" || operateur == null); // Continue le "do" tant que l'opérateur est vide ou null 

// *TD* : un changement du symbole "," par "." automatique pour le prompt2 et 3 (les deux valeurs numérique)
// Pour ceux qui souhaite calculer des nombres a virgule
// Pourquoi pas avec une fonction intégrer par js du style replace(), si j'ai la foie, un jours. 
// *TD* : trouver des erreurs possibles pour intégrer des sécurités supplémentaires
// *TD* : Transposer le projet comme base d'un autre Repos, en remplacant les informations du prompt par du DOM(Events->Clic) pour une meilleurs UE ( calculette virtuel comme proposé par Google )
// *TD* : Pousser mon code sur Git plus souvent plutôt que garder mes projets en local... 
// *TD* : Mettre plus de réplique de Kaameloott et de photo de chat, c'est trop mignon les chats... 
// *TD* : Nettoyer mes TD 