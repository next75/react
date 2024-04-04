import React, { useState } from 'react';

function DependentDropdown() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  // Define your country and city data
  const countries = [
    { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago'] },
    { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal'] },
    // Add more countries and their cities as needed
  ];

  // Function to handle country change
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    // Get cities for the selected country
    const selectedCountryObj = countries.find((c) => c.name === country);
    setCities(selectedCountryObj ? selectedCountryObj.cities : []);
    // Reset city selection when country changes
    setSelectedCity('');
  };

  // Function to handle city change
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <label htmlFor="country">Select Country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select</option>
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <label htmlFor="city">Select City:</label>
      <select id="city" value={selectedCity} onChange={handleCityChange}>
        <option value="">Select</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DependentDropdown;