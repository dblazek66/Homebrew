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
          //console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          //console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
      },[])
    return(
        <div className="flex-container">
            <div className="flex-item">
        {
             data && data.length>0 && data.map((item)=>
                <div className="card" key={item.ID}>
                    <div>
                        <span className='hopBold text-blue'>{item.Name}</span>
                        <span className='hopItem'>{item.Manufacturer} </span> 
                        <span className='hopItem'>{item.Type}</span>
                    </div>
                    <div>
                        <img src={`./img/${item.Image}`} height="150px" />
                    </div>
                </div>
            )
           }
           </div>
          </div>
    )
}
