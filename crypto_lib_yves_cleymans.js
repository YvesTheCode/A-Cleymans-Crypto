////////PARTIE 1/////////

function what_are_words_worth(){

    let message = "Jvais te dire le nombre de caractère que tu vas taper" //On demande gentillement une chaine de caractère

    let valeur_entree = prompt(message); 
    
    confirm(valeur_entree.length+", alors impressioner ?") //Message quand il a trouvé

    return valeur_entree.length //Pour eviter l'erreur je retourne une valeur

}

////////PARTIE 2/////////

function count_words(string_of_words){

let count = 0 //Compteur d'espace

for (let index = 0; index < string_of_words.length; index++) { //Boucle aussi longue que la chaine de caractères
    
    if (string_of_words.charAt(index)===" ") {
        ++count
    }
 
}
return count+1 //On part du principe que ya un mot avant le première espace
}

////////PARTIE 3/////////

function count_words_by(string_of_words, letter){

let count2 = 0 //Compteur de lettre proffesionnel, demi-frère du compteur d'espace

if (string_of_words === undefined) { //Prévention si paramètre indéfinies
    string_of_words = 0
}

for (let index = 0; index < string_of_words.length; index++) { //Boucle aussi longue que la chaine de caractères, non j'ai pas copié-collé
    
    if (string_of_words.charAt(index)===letter) {
            ++count2
    }
     
}
if(letter != null && letter != ""){ // Compter la lettre du paramètre si y'en a un
    count2 = count2+1
}

return count2
}