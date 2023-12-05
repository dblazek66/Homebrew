import React from "react";

export default function OnTapItem({item,count}){

    return(
        <div className="ontap-container">
            <div className="beerName">
            
                <div className="beerImage">
                    <img height="70px" src={`./img/${item.color}.png`}></img>
                </div>
                <div>
                    {item.beerName}
                </div>
                <div className="beerAbv">{item.abv} %</div>
            </div>
            <div className="ontap-item">
                <div className="beerStyle">
                    {item.beerStyle}
                </div>
                <span className="seperator"> - </span>
                <div className="beerIbus">
                    {item.ibu} ibus 
                </div>                
            </div>
            <div className="ontap-item">
                <div className="beerDesc">
                    {item.description}
                </div>
             </div>             
        </div>
    )
}