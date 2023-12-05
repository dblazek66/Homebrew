import React,{useState,useEffect} from 'react';
import Select from 'react-select';
import data from './water.json';
import options from './profileOptions.json'

export default function WaterProfile(){
    const [filter,setFilter]=useState([])
       const handleProfile = (e)=>{
        const result = data.find((item)=>{
          return item.Name==e.value
         })
         setFilter([result])
      }
    return(
        <>
        <div className="flex-container">
          <div className='card'>
            <label>Select Water Profile</label>
            <div className="flex-container">
              <Select 
              onChange={(e)=>handleProfile(e)} 
              options={options} 
              className='control-slimmed' />
            </div>
          </div>  
        </div>

        <div className="flex-container">
        {
            filter && filter.length>0 && filter.map((item)=>
              <div className="card" key={crypto.randomUUID()}>
                  <div><h2> {item.Name}</h2></div>
                  <div className='element-display'>
                    <div className="salt">
                      {item.Profile[0].split("=")[0]}
                      <span className='salt-amt'>{item.Profile[0].split("=")[1]}</span>
                    </div>
                    <div className="salt">
                      {item.Profile[1].split("=")[0]}
                      <span className='salt-amt'>{item.Profile[1].split("=")[1]}</span>
                    </div>                    
                    <div className="salt">
                      {item.Profile[2].split("=")[0]}
                      <span className='salt-amt'>{item.Profile[2].split("=")[1]}</span>
                    </div>   
                    <div className="salt">
                      {item.Profile[3].split("=")[0]}
                      <span className='salt-amt'>{item.Profile[3].split("=")[1]}</span>
                    </div>   
                    <div className="salt">
                      {item.Profile[4].split("=")[0]}
                      <span className='salt-amt'>{item.Profile[4].split("=")[1]}</span>
                    </div>   
                  </div>
                  <div><span className='hopBold'>Description:</span> {item.Description}</div>
                  <div>
                    <span className='hopBold'>Styles:</span> 
                    <div className='styleList'>
                      {item.Recipes.split(", ").map((i)=>
                        <div  key={crypto.randomUUID()}> {i} </div>                    
                      )}
                    </div>
                  </div>
              </div>
            )
           }
          </div>
        </>
    )
}