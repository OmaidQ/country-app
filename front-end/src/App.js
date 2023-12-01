import React, { useState } from 'react'

function App(){
  const [backendData, setBackendData] = useState([{}])
  const [searchQuery, setSearchQuery] = useState('');
  
  const linkStyle = {
    position: 'absolute',
    top: '20px',
    right: '10px',
  };
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
    <form onSubmit={handleSearch} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>
      <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} style={{marginBottom: '50px', padding: '12px', borderRadius: '4px', border: '1px solid gray', marginRight: '8px', width: '200px'}} />
      <button type="submit" style={{marginBottom: '50px', padding: '12px', borderRadius: '12px', border: '1px solid gray', backgroundColor: 'lightblue', color: 'black'}}>Search</button>
    </form>
    {Object.keys(backendData).length > 1 && (
      <div>
        <div style={{ padding: '10px', display: 'flex', justifyContent: 'left'}}>
          <img src={backendData.flags?.png} alt="Flag" style={{ border: '2px solid black', width: '400px' }} />
        </div>
      <div>
       <div style={{ float: 'right', textAlign : 'right', marginTop : '-320px', padding: '3px'}}>
       <img src={backendData.coatOfArms?.png || 'NULL'} alt="Coat of Arms" style={{ width: '300px' , height: 'auto', border: '2px solid black' }} />
       </div>
      </div>
      <p style={{ fontWeight: 'bold', textAlign : 'right', marginTop : '-350px', padding: '5px'}}>Coat of Arms</p>
        <div style={{ padding: '20px', marginLeft: '520px', marginTop: '0px', fontWeight : 'bold', fontSize : '17px'}}>
        <p> Name:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.name?.common || 'NULL'}</span></p> 
        <p> Official name:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.name?.official || 'NULL'}</span></p>
        <p> Capital:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.capital || 'NULL'}</span></p>
        <p> Region:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.region || 'NULL'}</span></p>
        <p> Subregion:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.subregion || 'NULL'}</span></p>
        <p> Continents:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {Object.values(backendData.continents).join(', ') || 'NULL'}</span></p>
        <p> Languages:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {Object.values(backendData.languages).join(', ') || 'NULL'}</span></p>
        <p> Area:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.area || 'NULL'}m</span></p>
        <p> Population:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.population || 'NULL'}</span></p>
        <p> Latitude and Longitude:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> ({backendData.latlng?.[0] || 'NULL'}, {backendData.latlng?.[1] || 'NULL'})</span></p>
        <p> Borders:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.borders?.join(' , ') || 'NULL'}</span></p>
        <p> Timezones:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {Object.values(backendData.timezones).join(', ') || 'NULL'}</span></p>
        <p> Currencies:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {Object.keys(backendData.currencies).join(', ') || 'NULL'}</span></p>
        <p> Alternate Spellings:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.altSpellings?.join(' , ') || 'NULL'}</span></p>
        <p> tld:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.tld || 'NULL'}</span></p>
        <p> Status:{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.status || 'NULL'}</span></p>
        <p> Independent?{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}> {backendData.independent ? 'Yes' : 'No' || 'NULL'}</span></p>
        <p> Landlocked?{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}>{backendData.landlocked ? 'Yes' : 'No' || 'NULL'}</span></p>
        {/* <p> UN Member? {backendData.unMember ? 'Yes' : 'No'}</p> */}
        <p>UN Member?{' '}<span style={{ color: 'darkblue', textDecoration: 'underline' }}>{backendData.unMember ? 'Yes' : 'No'}</span></p>
        <a href={backendData.maps.googleMaps} target="_blank" rel="noopener noreferrer" style={linkStyle}>View on Google Maps</a>
        </div>
      </div>
    )
   }
    </div>
  );
}

export default App