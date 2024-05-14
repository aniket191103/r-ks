import React from "react";

export default function Header(props){
    return(
        <div className="Header-Container">
            <img className="Header-Img" src={props.Img}/>
            <div className="Header-Seperation">


            <span  className="Header-Location">
                <img className="Location-logo"  src="/images/Location-Logo.png"/>
               <p className="Header-Country" >
                {props.Country}
                </p> 
            </span> 
            <h5 className="Header-name">
                {props.Name}
            </h5>
            <h6 className=" Header-Date"> 
                {props.Date}
            </h6>
            <p className="Header-Description">
                {props.Description}
            </p>
            </div>
        </div>
    )
}