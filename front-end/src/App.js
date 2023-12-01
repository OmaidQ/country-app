import React, { useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = () => {
    if (searchQuery) {
      fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ country: searchQuery })
      }).then(response => response.json())
        .then(data => {
          setBackendData(data);
          console.log(data);
        });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <h1>Country Search</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          value={searchQuery} 
          onChange={(event) => setSearchQuery(event.target.value)} 
          className="search-input" 
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {Object.keys(backendData).length > 1 && (
        <div className="country-container">
          <div className="country-details">
            <div className="country-image-container">
              <img src={backendData.flags?.png} alt="Flag" className="country-flag" />
              <p className="coat-of-arms-label">Coat of Arms</p>
              <img 
                src={backendData.coatOfArms?.png || 'NULL'} 
                alt="Coat of Arms" 
                className="country-coat-of-arms" 
              />
            </div>
          </div>
          <div className="country-info">
            <p>Name: <span>{backendData.name?.common || 'N/A'}</span></p>
            <p>Official Name: <span>{backendData.name?.official || 'N/A'}</span></p>
            <p>Capital: <span>{backendData.capital || 'N/A'}</span></p>
            <p>Region: <span>{backendData.region || 'N/A'}</span></p>
            <p>Subregion: <span>{backendData.subregion || 'N/A'}</span></p>
            <p>Continents: <span>{backendData.continents?.join(', ') || 'N/A'}</span></p>
            <p>Languages: <span>{Object.values(backendData.languages || {}).join(', ')}</span></p>
            <p>Area: <span>{backendData.area || 'N/A'} km²</span></p>
            <p>Population: <span>{backendData.population || 'N/A'}</span></p>
            <p>Latitude and Longitude: <span>({backendData.latlng?.join(', ') || 'N/A'})</span></p>
            <p>Borders: <span>{backendData.borders?.join(', ') || 'N/A'}</span></p>
            <p>Timezones: <span>{backendData.timezones?.join(', ') || 'N/A'}</span></p>
            <p>Currencies: <span>{Object.keys(backendData.currencies || {}).join(', ')}</span></p>
            <p>Alternate Spellings: <span>{backendData.altSpellings?.join(', ') || 'N/A'}</span></p>
            <p>tld: <span>{backendData.tld || 'N/A'}</span></p>
            <p>Status: <span>{backendData.status || 'N/A'}</span></p>
            <p>Independent: <span>{backendData.independent ? 'Yes' : 'No'}</span></p>
            <p>Landlocked: <span>{backendData.landlocked ? 'Yes' : 'No'}</span></p>
            <p>UN Member: <span>{backendData.unMember ? 'Yes' : 'No'}</span></p>
            <a 
              href={backendData.maps?.googleMaps} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
