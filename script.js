function convertCurrency() {
  var amount = parseFloat(document.getElementById("amount").value);
  var fromCurrency = document.getElementById("fromCurrency").value;
  var toCurrency = document.getElementById("toCurrency").value;

  var apiUrl = "https://api.exchangerate-api.com/v4/latest/" + fromCurrency;

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var exchangeRate = data.rates[toCurrency];
      var convertedAmount = amount * exchangeRate;
      document.getElementById("result").innerHTML =
        convertedAmount.toFixed(2) + " " + toCurrency;
    })
    .catch(function (error) {
      console.log(error);
    });
}
