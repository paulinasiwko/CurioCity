const exchangeRateApiKey = '6f63f45a62064b29b8c724f0';

// Mapping of country names to currency codes
const countryCurrencyMapping = {
    "US": "USD",
    "GB": "GBP",
    "AT": "EUR",
    "BE": "EUR",
    "CY": "EUR",
    "EE": "EUR",
    "FI": "EUR",
    "FR": "EUR",
    "DE": "EUR",
    "GR": "EUR",
    "IE": "EUR",
    "IT": "EUR",
    "LV": "EUR",
    "LT": "EUR",
    "LU": "EUR",
    "MT": "EUR",
    "NL": "EUR",
    "PT": "EUR",
    "SK": "EUR",
    "SI": "EUR",
    "ES": "EUR",
    "CH": "CHF",
    "NO": "NOK",
    "SE": "SEK",
    "CA": "CAD",
    "MX": "MXN",
    "JP": "JPY",
    "CN": "CNY",
    "IN": "INR",
    "RU": "RUB",
    "KR": "KRW",
    "SA": "SAR",
    "IL": "ILS",
    "BR": "BRL",
    "AR": "ARS",
    "ZA": "ZAR",
    "NG": "NGN",
    "AU": "AUD",
    "NZ": "NZD",
    "TR": "TRY",
    "PL": "PLN",
    "CZ": "CZK",
    "HU": "HUF",
    "TH": "THB",
    "SG": "SGD",
    "MY": "MYR",
    "PH": "PHP",
    "ID": "IDR",
    "VN": "VND",
    "EG": "EGP",
    "PK": "PKR",
    "BD": "BDT",
    "CO": "COP",
    "CL": "CLP",
    "PE": "PEN",
    "VE": "VES",
    "QA": "QAR",
    "AE": "AED",
    "AL": "ALL",
    "AM": "AMD",
    "AZ": "AZN",
    "BY": "BYN",
    "BA": "BAM",
    "BG": "BGN",
    "HR": "HRK",
    "DK": "DKK",
    "FO": "DKK",
    "GE": "GEL",
    "GI": "GIP",
    "GL": "DKK",
    "GG": "GBP",
    "IS": "ISK",
    "IM": "GBP",
    "JE": "GBP",
    "XK": "EUR",
    "LI": "CHF",
    "MK": "MKD",
    "MD": "MDL",
    "MC": "EUR",
    "ME": "EUR",
    "NO": "NOK",
    "RO": "RON",
    "SM": "EUR",
    "RS": "RSD",
    "SJ": "NOK",
    "SE": "SEK",
    "CH": "CHF",
    "TR": "TRY",
    "UA": "UAH",
    "VA": "EUR"
};

const countryCodeToNameMapping = {
    "US": "United States",
    "GB": "United Kingdom",
    "AT": "Austria",
    "BE": "Belgium",
    "CY": "Cyprus",
    "EE": "Estonia",
    "FI": "Finland",
    "FR": "France",
    "DE": "Germany",
    "GR": "Greece",
    "IE": "Ireland",
    "IT": "Italy",
    "LV": "Latvia",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MT": "Malta",
    "NL": "Netherlands",
    "PT": "Portugal",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "ES": "Spain",
    "CH": "Switzerland",
    "NO": "Norway",
    "SE": "Sweden",
    "CA": "Canada",
    "MX": "Mexico",
    "JP": "Japan",
    "CN": "China",
    "IN": "India",
    "RU": "Russia",
    "KR": "South Korea",
    "SA": "Saudi Arabia",
    "IL": "Israel",
    "BR": "Brazil",
    "AR": "Argentina",
    "ZA": "South Africa",
    "NG": "Nigeria",
    "AU": "Australia",
    "NZ": "New Zealand",
    "TR": "Turkey",
    "PL": "Poland",
    "CZ": "Czech Republic",
    "HU": "Hungary",
    "TH": "Thailand",
    "SG": "Singapore",
    "MY": "Malaysia",
    "PH": "Philippines",
    "ID": "Indonesia",
    "VN": "Vietnam",
    "EG": "Egypt",
    "PK": "Pakistan",
    "BD": "Bangladesh",
    "CO": "Colombia",
    "CL": "Chile",
    "PE": "Peru",
    "VE": "Venezuela",
    "QA": "Qatar",
    "AE": "United Arab Emirates",
    "AL": "Albania",
    "AM": "Armenia",
    "AZ": "Azerbaijan",
    "BY": "Belarus",
    "BA": "Bosnia and Herzegovina",
    "BG": "Bulgaria",
    "HR": "Croatia",
    "DK": "Denmark",
    "FO": "Faroe Islands",
    "GE": "Georgia",
    "GI": "Gibraltar",
    "GL": "Greenland",
    "GG": "Guernsey",
    "IS": "Iceland",
    "IM": "Isle of Man",
    "JE": "Jersey",
    "XK": "Kosovo",
    "LI": "Liechtenstein",
    "MK": "North Macedonia",
    "MD": "Moldova",
    "MC": "Monaco",
    "ME": "Montenegro",
    "RO": "Romania",
    "SM": "San Marino",
    "RS": "Serbia",
    "SJ": "Svalbard and Jan Mayen",
    "UA": "Ukraine",
    "VA": "Vatican City"
};

const currencyCodeToNameMapping = {
    "USD": "United States Dollar",
    "GBP": "British Pound",
    "EUR": "Euro",
    "CHF": "Swiss Franc",
    "NOK": "Norwegian Krone",
    "SEK": "Swedish Krona",
    "CAD": "Canadian Dollar",
    "MXN": "Mexican Peso",
    "JPY": "Japanese Yen",
    "CNY": "Chinese Yuan",
    "INR": "Indian Rupee",
    "RUB": "Russian Ruble",
    "KRW": "South Korean Won",
    "SAR": "Saudi Riyal",
    "ILS": "Israeli New Shekel",
    "BRL": "Brazilian Real",
    "ARS": "Argentine Peso",
    "ZAR": "South African Rand",
    "NGN": "Nigerian Naira",
    "AUD": "Australian Dollar",
    "NZD": "New Zealand Dollar",
    "TRY": "Turkish Lira",
    "PLN": "Polish Zloty",
    "CZK": "Czech Koruna",
    "HUF": "Hungarian Forint",
    "THB": "Thai Baht",
    "SGD": "Singapore Dollar",
    "MYR": "Malaysian Ringgit",
    "PHP": "Philippine Peso",
    "IDR": "Indonesian Rupiah",
    "VND": "Vietnamese Dong",
    "EGP": "Egyptian Pound",
    "PKR": "Pakistani Rupee",
    "BDT": "Bangladeshi Taka",
    "COP": "Colombian Peso",
    "CLP": "Chilean Peso",
    "PEN": "Peruvian Sol",
    "VES": "Venezuelan Bolívar",
    "QAR": "Qatari Rial",
    "AED": "United Arab Emirates Dirham",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "AZN": "Azerbaijani Manat",
    "BYN": "Belarusian Ruble",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BGN": "Bulgarian Lev",
    "HRK": "Croatian Kuna",
    "DKK": "Danish Krone",
    "GEL": "Georgian Lari",
    "GIP": "Gibraltar Pound",
    "ISK": "Icelandic Króna",
    "MKD": "Macedonian Denar",
    "MDL": "Moldovan Leu",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "UAH": "Ukrainian Hryvnia"
};

async function getCountryNameFromWeatherAPI(cityName) {
  try {
      await getWeatherData(cityName); // Function from weather.js, which sets the global variable countryID
      return window.countryID; // Returns the variable countryID set by weather.js
  } catch (error) {
      console.error("Error getting country name:", error);
  }
}

// Function to get the currency code based on the country name
function getCurrencyCode(countryName) {
  return countryCurrencyMapping[countryName];
}

// Function to add currency selection option
function createUserCurrencySelector() {
    const select = document.createElement('select');
    select.id = 'userCurrencySelect';

    for (const [code, name] of Object.entries(currencyCodeToNameMapping)) {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = name;
        select.appendChild(option);
    }

    // Add the select to the appropriate place in the DOM, for example:
    const currencySelectorContainer = document.getElementById('currencySelectorContainer');
    if (currencySelectorContainer) {
        currencySelectorContainer.appendChild(select);
    }
}

// Function for currency conversion
async function convertCurrency(amount, fromCurrency, toCurrency) {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        return (amount * rate).toFixed(2);
    } catch (error) {
        console.error("Error converting currency:", error);
    }
}

// Main function for initializing currency conversion
async function initializeCurrencyExchange() {
    createUserCurrencySelector(); // Creating a currency selector

    const params = new URLSearchParams(window.location.search);
    let city = params.get('city');
    city = city.charAt(0).toUpperCase() + city.slice(1);
    if (!city) return;

    const countryName = await getCountryNameFromWeatherAPI(city); 
    if (!countryName) return;

    const currencyCode = getCurrencyCode(countryName);
    if (!currencyCode) return;

    // Retrieving the user's chosen currency
    const userCurrencySelect = document.getElementById('userCurrencySelect');
    const userCurrency = userCurrencySelect ? userCurrencySelect.value : 'USD';

    const userAmount = 100; // Example amount
    const convertedAmount = await convertCurrency(userAmount, userCurrency, currencyCode);

    const resultContainer = document.getElementById("currency-exchange");
    if (resultContainer) {
        resultContainer.innerHTML = `
            <h5 class="card-title">How much money will i get?</h5>
            ${city} is in ${countryCodeToNameMapping[countryName]}. They use ${currencyCodeToNameMapping[currencyCode]} (${currencyCode})! Here is a simple currency exchanger - 100 ${currencyCodeToNameMapping[userCurrency]} will give you ${convertedAmount} ${currencyCodeToNameMapping[currencyCode]}!
        `;
    }
}

document.addEventListener('DOMContentLoaded', initializeCurrencyExchange);
