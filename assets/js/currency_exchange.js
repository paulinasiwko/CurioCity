const exchangeRateApiKey = '6f63f45a62064b29b8c724f0'; // Replace with your API key for currency exchange

console.log("Starting currency_exchange.js");

// Fetches currency code for a given country
async function getCurrencyCode(countryCode) {
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    try {
        console.log("Fetching currency code for country:", countryCode);
        const response = await fetch(url);
        const data = await response.json();
        console.log("Received currency data:", data);
        return data[0].currencies[Object.keys(data[0].currencies)[0]].code;
    } catch (error) {
        console.error("Error fetching currency code:", error);
    }
}

// Converts currency
async function convertCurrency(amount, fromCurrency, toCurrency) {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    try {
        console.log(`Converting from ${fromCurrency} to ${toCurrency}`);
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        console.log(`Conversion rate from ${fromCurrency} to ${toCurrency}:`, rate);
        return (amount * rate).toFixed(2);
    } catch (error) {
        console.error("Error converting currency:", error);
    }
}

// Main function to initiate currency conversion
async function initializeCurrencyExchange() {
    const params = new URLSearchParams(window.location.search);
    const city = params.get('city');
    if (!city) return;

    console.log("City selected:", city);

    const countryID = await window.getCountryID();
    if (!countryID) return;

    console.log("Country ID:", countryID);

    const currencyCode = await getCurrencyCode(countryID);
    if (!currencyCode) return;

    console.log("Currency code:", currencyCode);

    // Temporarily setting a constant amount and user currency
    const userAmount = 100; // Can be changed to a user-entered value
    const userCurrency = 'USD'; // Can be changed to a selected user currency

    const convertedAmount = await convertCurrency(userAmount, userCurrency, currencyCode);

    console.log(`Converted amount: ${convertedAmount} ${currencyCode}`);

    const resultContainer = document.getElementById('currency-exchange-result');
    if (resultContainer) {
        resultContainer.innerHTML = `City ${city} is in country ${countryID}. They are having ${currencyCode} currency! Here is simple currency exchanger - 100 ${userCurrency} will give you ${convertedAmount} ${currencyCode}!`;
    }
}

document.addEventListener('DOMContentLoaded', initializeCurrencyExchange);
