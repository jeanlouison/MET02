$(document).ready(function () {
    
    $("#main-form").on("submit", function (event) {
        if (!canSubmitMainForm()) {
            event.preventDefault();
        };
    });
});

/**
 * Vérifie la validité du formulaire
 * @returns vrai si le formulaire est valide.
 */
function canSubmitMainForm() {

    var canSubmit = true;

    // Correspondance du mot de passe
    if ($("input[name='password']").val() !== $("input[name='confirmpassword']").val()) {
        alert("Les deux mots de passe ne correspondent pas.");
        canSubmit = false;
    }
    
    return canSubmit;
}