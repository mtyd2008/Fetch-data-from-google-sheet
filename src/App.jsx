import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data , setData] = useState([])

  const SHEET_ID = "1_m1r4uqhlNMosyy5GQBg0XgqqKGCqfJWyydwnIARAxg";
  const RANGE = "B3:D50";
  const API_KEY = "AIzaSyAujRd62kDheKBWAGbydc1YglJE6KDD8v8";
  const api =  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`

  useEffect(() => {
    axios.get(api)
      .then(response => {
        console.log(response.data.values);
        setData(response.data.values || []);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });
  }, []);

// console.log(data);


  return (
    <>
    <h1 className='text-center text-3xl my-3'>Fetch data from Google sheet</h1>
    
    <div className='flex justify-center items-center flex-wrap'>
    {data.map((product , index)=>{
      <div className="card bg-base-100 w-96 shadow-sm" key={index}>
      <figure>
        <img
          src={product[1]}
          alt={product[0]} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product[0]}</h2>
        <p>{product[2]}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    })}
    </div>
    
    </>
  )
}

export default App