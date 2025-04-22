import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data , setData] = useState([])

  const SHEET_ID = "1_m1r4uqhlNMosyy5GQBg0XgqqKGCqfJWyydwnIARAxg";
  const RANGE = "B3:D50";
  const API_KEY = "AIzaSyAujRd62kDheKBWAGbydc1YglJE6KDD8v8";
  
  useEffect(() => {
    const api =  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
    axios.get(api)
      .then(response => {
        const res = response.data.values
        setData(res);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });
  }, []);

console.log(data);


return (
  <>
  <div style={{
    textAlign:"center",
    backgroundColor:'black',
    color:'white'
  }}>
  <h1>Fetch data from Google sheet</h1>
  </div>
  
  <div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    gap:'40px',
  }}>
  {data.map((product , index)=>(
    <div key={index} style={{
      border:'1px solid black',
      padding:'15px',
      borderRadius:'15px'
    }}>
      <figure>
      <img width={'250px'} src={product[1]} alt={product[0]} />
    </figure>
    <div>
      <h3>{product[0]}</h3>
      <p><b>Price: Rs</b> {product[2]}</p>
    </div>
    </div>

  ))}
  </div>
  
  </>
)
}

export default App 
