const exchangeRateApiKey = '6f63f45a62064b29b8c724f0'; // Replace with your ExchangeRate API key

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
    "AE": "AED"
};

// Assuming the function getCountryNameFromWeatherAPI(city) exists and returns the country name based on the city.
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
  console.log(countryName);
  return countryCurrencyMapping[countryName];
}



// Funkcja do konwersji walut
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

// Function to convert currencies
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

// Main function to initialize currency conversion
async function initializeCurrencyExchange() {
  const params = new URLSearchParams(window.location.search);
  const city = params.get('city');
  if (!city) return;

  const countryName = await getCountryNameFromWeatherAPI(city); // Assuming this function exists
  if (!countryName) return;

  const currencyCode = getCurrencyCode(countryName);
  if (!currencyCode) return;

  const userAmount = 100; // Example amount
  const userCurrency = 'USD'; // Example user currency

  const convertedAmount = await convertCurrency(userAmount, userCurrency, currencyCode);

  const resultContainer = document.getElementById("main-card");
  if (resultContainer) {
      resultContainer.innerHTML = `City ${city} is in ${countryName}. They use ${currencyCode} currency! Here is simple currency exchanger - 100 ${userCurrency} will give you ${convertedAmount} ${currencyCode}!`;
  }
}

document.addEventListener('DOMContentLoaded', initializeCurrencyExchange);

