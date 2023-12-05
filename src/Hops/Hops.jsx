import React,{useState,useEffect} from 'react';
import data from './hops.json';

export default function Hops(){
   
    return(
        <div className="container">
        {
             data && data.length>0 && data.map((item)=>
                <div className="card" key={item.id}>
                    <div>
                        <span className='hopBold text-blue'>{item.Name}</span>
                        <span className='hopItem'>{item.AA} AA</span> 
                        <span className='hopItem'>{item.Application}</span>
                    </div>
                    <span className='hopItem text-grey indent'>{item.Description} </span>
                    <div><span className='hopBold'>Substitutes:</span> {item.Substitutes}</div>
                </div>
            )
           }
          </div>
    )
}