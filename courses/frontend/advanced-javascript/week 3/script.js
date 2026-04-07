let amountInput = document.getElementById("amount");
let result = document.getElementById("result");
let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");
let rates;

fetch("https://open.er-api.com/v6/latest/DKK")
    .then(response => response.json())
    .then(data => {
        rates = data.rates;

        for (let currency in rates) {
            let optionFrom = document.createElement("option");
            optionFrom.value = currency;
            optionFrom.textContent = currency;
            fromCurrency.appendChild(optionFrom);

            let optionTo = document.createElement("option");
            optionTo.value = currency;
            optionTo.textContent = currency;
            toCurrency.appendChild(optionTo);
        }

        fromCurrency.value = "DKK";
        toCurrency.value = "EUR";

        convert();
    });


function convert() {
    let amount = Number(amountInput.value);


    if (!amount) {
        result.textContent = "0.00";
        return;
    }

    let from = fromCurrency.value;
    let to = toCurrency.value;

    let converted = amount * (rates[to] / rates[from]);

    result.textContent = converted.toFixed(2);
}

convertBtn.addEventListener("click", convert);
