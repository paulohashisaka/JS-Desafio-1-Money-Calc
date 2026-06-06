const convertButton = document.querySelector(".convert-button");
const currencySelectFrom = document.querySelector(".currency-from-convert");
const currencySelectTo = document.querySelector(".currency-to-convert");

function formatCurrency(value, currency) {
    if (currency == "dolar") {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value);
    }

    if (currency == "euro") {
        return new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(value);
    }

    if (currency == "libra") {
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(value);
    }

    if (currency == "iene") {
        return new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(value);
    }

    if (currency == "won") {
        return new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW"
        }).format(value);
    }

    if (currency == "bitcoin") {
        return `BTC ${Number(value).toFixed(8)}`;
    }

    if (currency == "real") {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value);
    }
}

function convertValues() {
    const inputValueText = document.querySelector(".value-input").value;
    const inputValue = Number(inputValueText.replace(",", "."));

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    if (isNaN(inputValue) || inputValueText === "") {
        alert("Digite um valor válido");
        return;
    }

    const currencyValues = {
        real: 1,
        dolar: 5.2,
        euro: 6.2,
        libra: 7.2,
        iene: 0.05,
        won: 0.0045,
        bitcoin: 250000
    };

    const fromCurrencyValue = currencyValues[currencySelectFrom.value];
    const toCurrencyValue = currencyValues[currencySelectTo.value];

    const valueInReal = inputValue * fromCurrencyValue;
    const convertedValue = valueInReal / toCurrencyValue;

    currencyValueToConvert.innerHTML = formatCurrency(inputValue, currencySelectFrom.value);
    currencyValueConverted.innerHTML = formatCurrency(convertedValue, currencySelectTo.value);
}

function changeCurrencyInfo(currency, nameElement, imageElement) {
    if (currency == "dolar") {
        nameElement.innerHTML = "US$ Dólar Americano";
        imageElement.src = "./assets/usd.png";
    }

    if (currency == "euro") {
        nameElement.innerHTML = "€ Euro";
        imageElement.src = "./assets/euro.png";
    }

    if (currency == "libra") {
        nameElement.innerHTML = "£ Libra Esterlina";
        imageElement.src = "./assets/libra.png";
    }

    if (currency == "iene") {
        nameElement.innerHTML = "¥ Iene Japonês";
        imageElement.src = "./assets/iene.png";
    }

    if (currency == "won") {
        nameElement.innerHTML = "₩ Won Sul-Coreano";
        imageElement.src = "./assets/won.png";
    }

    if (currency == "bitcoin") {
        nameElement.innerHTML = "₿ Bitcoin";
        imageElement.src = "./assets/btc.png";
    }

    if (currency == "real") {
        nameElement.innerHTML = "R$ Real Brasileiro";
        imageElement.src = "./assets/real-brasileiro.png";
    }
}

function changeCurrencyFrom() {
    const currencyName = document.querySelector("#currency-from-convert-name");
    const currencyImg = document.querySelector(".currency-img");

    changeCurrencyInfo(currencySelectFrom.value, currencyName, currencyImg);
    convertValues();
}

function changeCurrencyTo() {
    const currencyName = document.querySelector("#currency-name");
    const currencyImg = document.querySelector(".changed-currency-img");

    changeCurrencyInfo(currencySelectTo.value, currencyName, currencyImg);
    convertValues();
}

currencySelectFrom.addEventListener("change", changeCurrencyFrom);
currencySelectTo.addEventListener("change", changeCurrencyTo);
convertButton.addEventListener("click", convertValues);
