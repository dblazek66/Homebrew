import React,{useState,useEffect} from 'react';

export default function Yeast(){
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('yeasts.json',
        {
          headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
            }
        })
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
      },[])

    return(
      <div className="flex-container">

          {
              data && data.length>0 && data.map((item)=>
                  <div className="card flex-item" key={item.ID}>
                      <div className='space-wrap'>
                        <span className='yeastName text-blue'>{item.Name}</span>
                        <span className='yeastMnf'>{item.Manufacturer} </span> 
                        
                      </div>
                      <div className='row'>
                        <div>
                          <img src={`./img/${item.Image}`} height="150px" />
                        </div>
                        <div>
                          <div className='yeastItem'>Type: {item.Type}</div>
                          <div className='yeastItem'>Attenuation: {item.Attenuation}</div>
                          <div className='yeastItem'>Flocculation: {item.Flocculation}</div>
                          <div className='yeastItem'>Optimum Temp:{item.Optimum_Temp}</div>
                          <div className='yeastItem'>Similar Strains:{item.Compare_To}</div>
                        </div>
                          
                      </div>

                  </div>
              )
           }

      </div>
    )
}
