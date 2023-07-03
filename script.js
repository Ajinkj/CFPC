document.getElementById("carbonForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get user input values
    var electricityConsumption = parseFloat(document.getElementById("electricityConsumption").value);
    var carDistance = parseFloat(document.getElementById("carDistance").value);
  
    // Conversion factors (for testing purposes)
    var electricityConversionFactor = 0.8; // kg CO2e per kWh
    var carConversionFactor = 0.2; // kg CO2e per km
    
    // Calculate carbon footprint
    var electricityEmissions = electricityConsumption * electricityConversionFactor;
    var carEmissions = carDistance * carConversionFactor;
    
    // Add up all the emissions to get the total carbon footprint
    var totalEmissions = electricityEmissions + carEmissions;
    
    // Redirect to the result page and pass the calculated emissions as a URL parameter
    window.location.href = "result.html?emissions=" + totalEmissions;

     // Retrieve the average carbon footprint emission of a person in India
  var averageEmissionsIndia = 100; // kg CO2e per day (example value)
  
  // Redirect to the result page with the emissions value and average emissions
  window.location.href = "result.html?emissions=" + totalEmissions.toFixed(2) + "&averageEmissionsIndia=" + averageEmissionsIndia.toFixed(2);
  });
