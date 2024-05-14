import React from "react";
 export default function Card(props){
  return(
    <div className="Card">
        <div className="Block">
            <img className="Card_Img" src={props.Image}></img>
            <span className="Rating">
                <br></br>
                <img className="Fav" src="/image/favourites.png"></img>
                <p className="Rating_p">
                    {props.Rate}
                </p>
            </span>
            <p className="Block_Abt">{props.About}</p>
        <p className="Price">
            <h5> {props.Price}</h5>
        </p>
        <button  className="info-btn">{props.Button} </button>

        </div>
    </div>
  )
 }