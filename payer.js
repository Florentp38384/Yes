const montant = document.getElementById("montant");
const frais = document.getElementById("frais");
const total = document.getElementById("total");

const taux = 0.0045; // 0.45%

function calcul() {
    let m = parseFloat(montant.value);
    let f = m * taux;
    frais.textContent = f.toFixed(2) + " €";
    total.textContent = (m + f).toFixed(2) + " €";
}

montant.addEventListener("input", calcul);
calcul();
