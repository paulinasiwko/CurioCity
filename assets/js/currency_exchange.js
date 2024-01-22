const exchangeRateApiKey = '6f63f45a62064b29b8c724f0'; // Replace with your ExchangeRate API key

// Mapping of country names to currency codes
const countryCurrencyMapping = {
  "USA": "USD",
  "UK": "GBP",
  "Austria": "EUR",
  "Belgium": "EUR",
  "Cyprus": "EUR",
  "Estonia": "EUR",
  "Finland": "EUR",
  "France": "EUR",
  "Germany": "EUR",
  "Greece": "EUR",
  "Ireland": "EUR",
  "Italy": "EUR",
  "Latvia": "EUR",
  "Lithuania": "EUR",
  "Luxembourg": "EUR",
  "Malta": "EUR",
  "Netherlands": "EUR",
  "Portugal": "EUR",
  "Slovakia": "EUR",
  "Slovenia": "EUR",
  "Spain": "EUR",
  "Switzerland": "CHF",
  "Norway": "NOK",
  "Sweden": "SEK",
  "Canada": "CAD",
  "Mexico": "MXN",
  "Japan": "JPY",
  "China": "CNY",
  "India": "INR",
  "Russia": "RUB",
  "South Korea": "KRW",
  "Saudi Arabia": "SAR",
  "Israel": "ILS",
  "Brazil": "BRL",
  "Argentina": "ARS",
  "South Africa": "ZAR",
  "Nigeria": "NGN",
  "Australia": "AUD",
  "New Zealand": "NZD",
  "Turkey": "TRY",
  "Poland": "PLN",
  "Czech Republic": "CZK",
  "Hungary": "HUF",
  "Thailand": "THB",
  "Singapore": "SGD",
  "Malaysia": "MYR",
  "Philippines": "PHP",
  "Indonesia": "IDR",
  "Vietnam": "VND",
  "Egypt": "EGP",
  "Pakistan": "PKR",
  "Bangladesh": "BDT",
  "Colombia": "COP",
  "Chile": "CLP",
  "Peru": "PEN",
  "Venezuela": "VES",
  "Qatar": "QAR",
  "United Arab Emirates": "AED",
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

