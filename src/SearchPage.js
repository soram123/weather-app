import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./myStyle.css";
import { RollbackOutlined } from '@ant-design/icons'


function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  

  return (
    <div>
      <h1 style={{color:"darkorange"}}> Search For Your City </h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
        placeholder="Search for your city"
      />
      <input
        type="button"
        value="Search"
        onClick={() => {
          const options = {
            method: "GET",
            url: "https://weatherapi-com.p.rapidapi.com/search.json",
            params: { q: searchQuery },
            headers: {
              "X-RapidAPI-Key":
                "f9b8f2034cmshb80b214ebe70b8bp1f83bdjsnc65527c6673b",
              "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
            }
          };
          axios.request(options).then((response) => {
            setSearchResults(response.data);
          });
        }}
      />
      {searchResults.length > 0 && (
        <div>
          <h4> Total {searchResults.length} results found! </h4>
          <table className="results-table">
            <thead>
              <th> City Name </th>
              <th> Region </th>
              <th> Country </th>
              <th> Lat </th>
              <th> Long </th>
            </thead>
            <tbody>
              {searchResults.map((result) => {
                return (
                  <tr>
                    <td style={{cursor:"pointer"}} onClick={() => navigate(`/weather/` + result.name)}>
                      {result.name}
                    </td>
                    <td> {result.region} </td>
                    <td> {result.country} </td>
                    <td> {result.lat} </td>
                    <td> {result.lon} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p style={{cursor:"pointer",color:"blue"}} onClick={() => navigate(`/`)}> <RollbackOutlined  /> Home</p>
           </div>
      )}
        
    </div>
    
  );
}

export default SearchPage;
