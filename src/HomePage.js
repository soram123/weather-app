import React from "react";
import { useNavigate } from "react-router-dom";
import "./myStyle.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{color:"orange"}}> Welcome to my weather application ! </h1>
      
        <button className="btn" 
                onClick={() => navigate("/search")}>Search For Your City</button><br /><br/>
        <button className ="btn"
                onClick={() => navigate("/weather")}>Find Weather For Your City</button>
      
    </div>
  );
}

export default HomePage;
