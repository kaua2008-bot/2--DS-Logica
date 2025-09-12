function calcularTabuada() {
    let numero = document.getElementById("numero").value;
    let resultadoDiv = document.getElementById("resultado");

    if (numero === "") {
        resultadoDiv.innerHTML = "<p styles='color:red'>digite um numero valido!</p>";
    } else {
        let resultadoHTML = "<h3> tabuada do " + numero + ":</h3";
        let i = 1;



        while (i<=10) {
            resultadoHTML += "<p>" + numero +"x" + i + "=" + (numero * i) + "</p>";
            i++;
        }

        resultadoDiv.innerHTML = resultadoHTML;
    }
}
