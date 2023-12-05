import React,{useState,useEffect} from 'react';
import SearchGrains from './SearchGrains';
import data from './grains.json'

export default function Grains(){
 
    const [filter,setFilter]=useState([...data]);
    const [grainTitle, setGrainTitle]=useState('All Malts');

   
    return(
        <>

        <div className="container">
            <SearchGrains getFilterVal={getFilterVal} grainTitle = {grainTitle}/>
       {
             filter && filter.length>0 && filter.map((item)=>
                <div className="card" key={crypto.randomUUID()}>
                    <div>
                        <span className='hopBold text-blue'>{item.Grain}</span>
                        <span className='hopItem'>{item.Maltster}</span> -
                        <span className='hopItem'>{item.Region}</span>
                    </div>
                    <div><span className='hopBold'>Flavor/Description:</span> <span className='hopItem text-grey'>{item.Flavor} </span></div>
                    <div><span className='hopBold'>Type:</span> {item.Type}</div>
                    <div><span className='hopBold'>Lovibond:</span> {item.Lovibond}</div>
                </div>
            )
           }
          </div>
        </>
    )

    function getFilterVal(malt){
        if(malt==="RESET FILTER"){
            setFilter(data)
            setGrainTitle('All Malts')
            return
        }
        setGrainTitle(malt)
        const Datapool = [...data]
            let filtered = Datapool.filter((item)=>{
            return item.Type === malt
        })
        setFilter(filtered)
        //const menu = document.querySelector("#filterGrains")
    }
}