import axios from 'axios';
import React, {useEffect, useState } from 'react'

export default function ApiDemo () 
{ 
    const [data,setData]=useState([])
    const [error,setError]=useState("")
  
 
    const displayData=async()=>{
        try
        {
           const response= await axios.get("https://dummy-json.mock.beeceptor.com/companies")
           setData(response.data)
        }
        catch(error)
        {
           setError(error.message)
        }
    }

    useEffect(() => {
        
       displayData()
    }, []);

  return (
    <div>
     {
        error ? <b> {error}</b> : data.length==0 ? <b>Loading... </b> : 
        <table border={1} cellPadding={10} bgcolor='beige' > 
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>ZIP</th>
            <th>COUNTRY</th>
            
          </tr>
          {
                data.map((company,index)=>(
                     
                <tr key={index} >
                    <td>{company.id} </td>
                    <td>{company.name} </td>
                    <td>{company.address} </td>
                     <td>{company.zip} </td>
                      <td>{company.country} </td>   
                </tr>
                ))
            }
        </table>
      }
      <hr/>
    </div>
  )
}