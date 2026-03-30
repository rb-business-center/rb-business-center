// JavaScript source code
function commander(nomProduit) {

    let numeros = [
        "22667913463",
        "22671014634"
    ];

    // Message personnalisé
    let message = "Nous sommes le monument des accessoires\n\n";
    message += "Produit : " + nomProduit + "\n";
    message += "Merci de nous contacter pour commander.";

    // On choisit le premier numéro (tu peux changer)
    let numero = numeros[0];

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}