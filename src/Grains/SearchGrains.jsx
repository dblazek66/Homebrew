import "../css/dropdown.css"
import { FaFilter } from "react-icons/fa";
import React, { useState } from "react";


export default function SearchGrains({getFilterVal,grainTitle}){
   
    const malts = [
        {"id":"0","type":"RESET FILTER"},
        {"id":"M1" ,"type":"Base Malts"},
        {"id":"M2" ,"type":"Base Malts, Lightly Kilned and Toasted"},
        {"id":"M3" ,"type":"Caramel & Crystal Malted Grains"},
        {"id":"M4" ,"type":"Domestic Base Malt"},
        {"id":"M5" ,"type":"Flaked & Unmalted Adjunct Grains"},
        {"id":"M6" ,"type":"Lightly Kilned and Toasted"},
        {"id":"M7" ,"type":"Roasted Malts"},
    ]


    return(
        <div className="card">
            <div className="dropdown">
                <button className="dropbtn"><FaFilter /> Filter Malt Types
                </button>
                <div id="filterGrains" className="dropdown-content">
                    { malts.map((malt)=>(
                        <a href="#" key={malt.id}
                            onClick={(e)=>getFilterVal(e.target.innerText)}
                        >
                           {malt.type}
                        </a>
                        )
                    )}

                </div>
            </div>
            <h3>{grainTitle}</h3>
        </div>
    )
}