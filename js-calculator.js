var operateur;
var premiersNombre;
var deuxièmeNombre;

    function addition(nombre1, nombre2) {
               let result = nombre1 + nombre2 ;
               return result;
               }
           
            function multiplication(nombre1, nombre2) {
                let result = nombre1 * nombre2 ;
                return result;
                }
     
            function soustraction(nombre1, nombre2) {
                    let result = nombre1 - nombre2 ;
                    return result;
                 }
       
            function division(nombre1, nombre2) {
                    let result = nombre1 / nombre2 ;
                    return result;
                   
                 }

do {
var operateur = window.prompt("Que souhaitez vous faire : \n\n 1 - Addition \n\n 2 - Multiplication \n\n 3 - Soustraction \n\n 4 - Division ");
var premiersNombre = window.prompt("Votre premier nombre");
var deuxièmeNombre = window.prompt("Votre deuxième nombre");
premiersNombre = Number(premiersNombre);
deuxièmeNombre = Number(deuxièmeNombre);

if ( operateur != 1 && operateur != 2 && operateur != 3 && operateur != 4 ) {
    alert("Il faut écrire 1, 2, 3 ou 4 et vous avez entré : " + operateur + " pour l'opérateur");
    break;
    
}
else if (isNaN(premiersNombre) || isNaN(deuxièmeNombre)){
    alert("Il faut écrire des nombres et pas des lettres et vous avez rentré au nombre 1 : " + premiersNombre + " et au nombre 2 : " + deuxièmeNombre );
    break;
}

else {
   
    switch(operateur){
        case "1" :
            var resultat = addition(premiersNombre, deuxièmeNombre);
            alert("le resultat de votre addition est : " + resultat);
            break;

        case "2" :
            var resultat = multiplication(premiersNombre, deuxièmeNombre);
            alert("le resultat de votre multiplication est : " + resultat);
            break;
        
        case "3" :
            var resultat = soustraction(premiersNombre, deuxièmeNombre);
            alert("le resultat de votre soustraction est : " + resultat);
            break;
        
        case "4" :
            var resultat = division(premiersNombre, deuxièmeNombre);
            alert("le resultat de votre division est : " + resultat);
            break;
    }

    }
    
    
    

}
while  (operateur == "" || operateur == null);