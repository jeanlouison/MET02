$(document).ready(function () {
    
    $("#main-form-btn").on("click", function (event) {
        submitMainForm(event);
        event.preventDefault();
    });

    $("#main-form").on("submit", function (event) {
        alert("formulaire envoyé 🆗");
    });
});

function submitMainForm(event) {

    var canSubmit = true;

    // Présence du nom
    if ($("input[name='lastname']").val() == '') {
        alert("Veuillez entrer votre nom.");
        canSubmit = false;
    }
    // Présence du prénom
    if ($("input[name='firstname']").val() == '') {
        alert("Veuillez entrer votre prénom.");
        canSubmit = false;
    }
    // Présence du nom d'utilisateur
    if ($("input[name='login']").val() == '') {
        alert("Veuillez entrer un nom d'utilisateur.");
        canSubmit = false;
    }
    // Présence du mot de passe
    if ($("input[name='password']").val() == '') {
        alert("Veuillez entrer un mot de passe.");
        canSubmit = false;
    }
    // Correspondance du mot de passe
    if ($("input[name='password']").val() !== $("input[name='confirmpassword']").val()) {
        alert("Les deux mots de passe ne correspondent pas.");
        canSubmit = false;
    }
    // Contrôle du code postal
    if ($("input[name='postcode']").val().length() > 0
        && ($("input[name='postcode']").val().length() > 5
            || $("input[name='postcode']").val().isNumeric() == false)) {
        alert("Veuillez entrer un code postal composé de 5 maximum chiffres.");
        canSubmit = false;
    }
    // Soumission du formulaire s'il est valide
    if (canSubmit) {
        $("#main-form").submit();
    }
    
}