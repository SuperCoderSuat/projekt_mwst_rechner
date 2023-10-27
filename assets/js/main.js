function rechnen() {

    // input variables
    const aufschlagen = document.body.querySelector("#aufschlagen");
    const abziehen = document.body.querySelector("#abziehen");
    const input_zahl = document.body.querySelector("#input_zahl");
    const pr_19 = document.body.querySelector("#prozent_19");
    const pr_7 = document.body.querySelector("#prozent_7");

    // output variables
    const output1 = document.body.querySelector("#output1");
    const output2 = document.body.querySelector("#output2");

    if (aufschlagen.checked && pr_19.checked) {

        output1.textContent = parseFloat((input_zahl.value * 1.19) - input_zahl.value).toFixed(2);
        output2.textContent = parseFloat(input_zahl.value * 1.19).toFixed(2);

    } else if (aufschlagen.checked && pr_7.checked) {

        output1.textContent = parseFloat((input_zahl.value * 1.07) - input_zahl.value).toFixed(2);
        output2.textContent = parseFloat(input_zahl.value * 1.07).toFixed(2);

    } else if (abziehen.checked && pr_19) {

        output1.textContent = parseFloat(input_zahl.value - (input_zahl.value - (input_zahl.value * (19 / 100)).toFixed(2)));
        output2.textContent = parseFloat(input_zahl.value - (input_zahl.value * (19 / 100)).toFixed(2));
        // output1.textContent = parseFloat((input_zahl.value * 0.81) - input_zahl.value).toFixed(2);
        // output2.textContent = parseFloat(input_zahl.value * 0.81).toFixed(2);

    } else if (abziehen.checked && pr_7) {

        output1.textContent = parseFloat(input_zahl.value - (input_zahl.value - (input_zahl.value * (7 / 100)).toFixed(2)));
        output2.textContent = parseFloat(input_zahl.value - (input_zahl.value * (7 / 100)).toFixed(2));

    } else {

        window.alert("Das Formular ist nicht korrekt ausgefüllt. Bitte schauen Sie erneut.");
        
    }
}
