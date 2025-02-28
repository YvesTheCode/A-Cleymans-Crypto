////////PARTIE 1/////////

function what_are_words_worth() {

    let message = "Jvais te dire le nombre de caractère que tu vas taper" //On demande gentillement une chaine de caractère

    let valeur_entree = prompt(message);

    confirm(valeur_entree.length + ", alors impressioner ?") //Message quand il a trouvé

    return valeur_entree.length //Pour eviter l'erreur je retourne une valeur

}

////////PARTIE 2/////////

function count_words(string_of_words) {

    let count = 0 //Compteur d'espace

    for (let index = 0; index < string_of_words.length; index++) { //Boucle aussi longue que la chaine de caractères

        if (string_of_words.charAt(index) === " ") {
            ++count
        }

    }
    return count + 1 //On part du principe que ya un mot avant le première espace
}

////////PARTIE 3/////////

function count_words_by(string_of_words, letter) {

    let count = 0 //Compteur de lettre proffesionnel, demi-frère du compteur d'espace

    if (string_of_words === undefined) { //Prévention si paramètre indéfinies
        string_of_words = 0
    }

    for (let index = 0; index < string_of_words.length; index++) { //Boucle aussi longue que la chaine de caractères, non j'ai pas copié-collé

        if (string_of_words.charAt(index) === letter) {
            ++count
        }

    }
    if (letter != null && letter != "") { // Compter la lettre du paramètre si y'en a un
        count = count + 1
    }

    return count
}

////////PARTIE 4/////////

let vowels = ['a', 'e', 'i', 'u', 'o', 'y', 'A', 'E', 'I', 'U', 'O', 'Y']; // Ici c'est mieux (pour moi au moins)

function is_a_vowel(letter) {
    for (let index = 0; index < vowels.length; index++) { //Boucle aussi longue que le tableau
        if (letter === vowels[index]) { //Si la lettre se trouve dans le tableau
            return true
        }

    }
    return false;
}

function count_vowels(string_of_words) {

    if (string_of_words === undefined) { //Prévention si paramètre indéfinies
        return 0
    }

    let count = 0 //Compteur de voyelle, aucun lien avec les 2 précédents compteurs
    for (let index = 0; index < string_of_words.length; index++) { //Boucle aussi longue que la chaine de caractères, non j'ai pas copié-collé

        letter = string_of_words.charAt(index) // La lettre qu'on envois à la seconde fonction comme paramètre est la lettre actuelle de la boucle



        if (is_a_vowel(letter) === true) {
            ++count
        }

    }
    return count
}

////////PARTIE 5/////////

function count_consonants(string_of_words) {
    if (string_of_words === undefined) { //Prévention si paramètre indéfinies
        string_of_words = ""
    }
    return string_of_words.length - count_vowels(string_of_words) - count_words(string_of_words) + 1 //Longueur de la chaine - le voyelle - les espaces - 1 = consonnes
}

////////PARTIE 6/////////

function remove(string_of_words, caracter){

    if (string_of_words === undefined) { //Prévention si paramètre indéfinies
        return 0
    }

    let memoire = "" //C'est lui qui va retenir notre chaine de caractère modifié
    for (let index = 0; index < string_of_words.length; index++) {
        
        if (string_of_words.charAt(index)!=caracter) { //Si la lettre actuel n'est pas la même que celle banni on l'ajoute sinon il se passe rien
            memoire = memoire+string_of_words.charAt(index)
        }
  
    }
    return memoire
}

////////PARTIE 7/////////

function remove_strings(string_of_words, caracter){

    if (string_of_words === undefined) { //Prévention si paramètre indéfinies
        return 0
    }

    let memoire = "" //C'est lui qui va encore retenir notre chaine de caractère modifié mais cette fois si sous la supervision d'un juge
    for (let index = 0; index < string_of_words.length; index++) {
        let nuhuh = false //Juge si une lettre va finir pouvoir être garder par mémoire

        for (let index2 = 0; index2 < caracter.length; index2++) {
            
            if (string_of_words.charAt(index)===caracter.charAt(index2)) { //Si la lettre actuel est banni le juge se réveil
                nuhuh = true
            }
          
        }
        if(nuhuh!=true){ //Si le juge est n'est pas réveillé on peut continuer tranquillement
            memoire = memoire+string_of_words.charAt(index)
        }

    }
    return memoire
}

////////PARTIE 8/////////

let alphabet = 'abcdefghijklmnopqrstuvwxyz'; //Ici c'est mieux, pour moi
let alphabet_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function crypto(a_string, a_number) {
    let memoire = "" //C'est lui qui va retenir notre chaine de caractère crypté
    a_number = a_number % 26 //Pour ééviter qu'il dépasse 26
   for (let index = 0; index < a_string.length; index++) {
    let messager = a_string.charAt(index) //Il va apporter nos lettre crypté à memoire
    for (let index2 = 0; index2 < alphabet.length; index2++) {
        
        if (a_string.charAt(index)===alphabet.charAt(index2)) { //Pour éviter supprimer les espaces ou autre caractère spéciaux

            if (index2+a_number >= 26) { //Detecte si la lettre a crypter va aller au délà de l'alphabet
                messager=alphabet.charAt((index2+a_number)-26) //On revient au debut de l'alphabat quand on arrive au bout
            }

            else{messager=alphabet.charAt(index2+a_number)} //Sinon ça va
            

        }
        
    }
    memoire=memoire+messager //Metting de la plus haute importance
   }
   return memoire
}

