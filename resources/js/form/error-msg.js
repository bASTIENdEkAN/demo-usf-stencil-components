const lang = document.documentElement.lang;
const fr = lang == 'fr';

const messages = {
    missingValue : {
        checkbox: fr ? "Ce champ est requis.": "Dit veld is verplicht.",
        radio: fr ? "Veuillez sélectionner une valeur.": "Selecteer een waarde.",
        selectMultiple: fr ? "Veuillez sélectionner au moins une valeur.": "Selecteer ten minste één waarde.",
        default: fr ? "Veuillez remplir ce champ.": "Vul alstublieft dit veld in."
    },
    patternMismatch: {
        email: fr ? "S'il vous plaît, mettez une adresse email valide.":"Vul een geldig e-mailadres in.",
        phone: fr ? "Le format 04xx xx xx xx n’est pas respecté.":"Het formaat 04xx xx xx xx wordt niet gerespecteerd.",
        url: fr ? "Veuillez saisir une URL.":"Voer een URL in.",
        number: fr ? "Veuillez saisir un nombre":"Voer alstublieft een nummer in",
        color: fr ? "Veuillez respecter le format suivant: #rrggbb":"Pas het volgende formaat aan: #rrggbb",
        date: fr ? "Veuillez utiliser le format JJ-MM-AAA":"Gebruik het formaat DD-MM-JJJJ",
        time: fr ? "Veuillez utiliser le format de l'heure sur 24 heures. Ex. 23h00":"Gebruik het 24-uurs tijdformaat. Ex. 23:00",
        month: fr ? "Veuillez utiliser le format MM-AAAA":"Gebruik het formaat MM-JJJJ",
        match: fr ? "Veuillez répéter votre mot de passe":"Herhaal uw wachtwoord",
        default: fr ? "Veuillez correspondre au format demandé.":"Pas het gevraagde formaat aan."
    },
    outOfRange: {
        over: fr ? "Veuillez sélectionner une valeur qui ne dépasse pas {max}.":"Selecteer een waarde die niet meer is dan {max}",
        under: fr ? "Veuillez sélectionner une valeur qui n'est pas inférieure à {min}.":"Selecteer een waarde die niet lager is dan {min}"
    },
    wrongLength: {
        over: fr ? "Veuillez raccourcir ce texte à un maximum de {maxLength} caractères. Vous utilisez actuellement {length} caractères.":"Kort deze tekst in tot niet meer dan {maxLength} tekens. U gebruikt momenteel {length} tekens.",
        under: fr ? "Veuillez allonger ce texte à {minLength} caractères ou plus. Vous utilisez actuellement {length} caractères.":"Verleng deze tekst tot {minLength} tekens of meer. U gebruikt momenteel {length} tekens."
    },
    fallback: fr ? "Une erreur s'est produite dans ce champ.":"Er is een fout opgetreden met dit veld."
}

const defaultErrorMsg = (field, message) => {
    
    // console.log('field:', field)
    // console.log('message:', message)
    const customMessage = field.getAttribute('data-error-msg');
    return customMessage ? customMessage : message
}
    

export {defaultErrorMsg, messages};