// List of available currencies
const availableCurrencies = [
    "USD", "EUR", "GBP", "JPY", "AUD",
    "CAD", "CHF", "CNY", "SEK", "NZD",
    "MXN", "SGD", "HKD", "NOK", "KRW",
    "TRY", "RUB", "INR", "BRL", "ZAR"
  ];
  
  // Function to populate currency selectors
  function populateCurrencySelectors() {
    const fromCurrencySelector = document.getElementById('fromCurrency');
    const toCurrencySelector = document.getElementById('toCurrency');
  
    availableCurrencies.forEach(currency => {
      const fromOption = document.createElement('option');
      const toOption = document.createElement('option');
  
      fromOption.value = toOption.value = currency;
      fromOption.textContent = toOption.textContent = currency;
  
      fromCurrencySelector.appendChild(fromOption);
      toCurrencySelector.appendChild(toOption);
    });
  }
  
  // Function to exchange currencies
  async function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    let apiKey = '6f63f45a62064b29b8c724f0';
  
    let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
  
    try {
      let response = await fetch(url);
      let data = await response.json();
  
      if (data.error) {
        throw new Error(data.error);
      }
  
      let rate = data.rates[toCurrency];
      let result = amount * rate;
      document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toCurrency}`;
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while converting currencies. Check the console for details.');
    }
  }
  
  // Invoke the function to populate the selectors when the page loads
  document.addEventListener('DOMContentLoaded', populateCurrencySelectors);
