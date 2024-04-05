import React, { useState } from "react";

const HierarchicalDropdowns = () => {
    // Sample hierarchical data structure
    const data = {
        USA: {
            California: ["Los Angeles", "San Francisco", "San Diego"],
            Texas: ["Houston", "Dallas"]
        },
        Canada: {
            Ontario: ["Toronto", "Ottawa"],
            Quebec: ["Montreal", "Quebec City"]
        },
        India: {
            Maharashtra: ["Thane", "Pune", "Mumbai"],
            Gujrat: ["Ahmedabd", "Surat"]
        }
    };

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const handleCountryChange = e => {
        setSelectedCountry(e.target.value);
        setSelectedState("");
        setSelectedCity("");
    };

    const handleStateChange = e => {
        setSelectedState(e.target.value);
        setSelectedCity("");
    };

    return (
        <div>
            <label htmlFor="countryDropdown">Country:</label>
            <select
                id="countryDropdown"
                value={selectedCountry}
                onChange={handleCountryChange}
            >
                <option value="">Select Country</option>
                {Object.keys(data).map(country => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>

            <label htmlFor="stateDropdown">State:</label>
            <select
                id="stateDropdown"
                value={selectedState}
                onChange={handleStateChange}
                disabled={!selectedCountry}
            >
                <option value="">Select State</option>
                {selectedCountry &&
                    data[selectedCountry] &&
                    Object.keys(data[selectedCountry]).map(state => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
            </select>

            <label htmlFor="cityDropdown">City:</label>
            <select
                id="cityDropdown"
                value={selectedCity}
                onChange={e => setSelectedCity(e.target.value)}
                disabled={!selectedState}
            >
                <option value="">Select City</option>
                {selectedState &&
                    data[selectedCountry][selectedState].map(city => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default HierarchicalDropdowns;
