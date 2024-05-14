import React from "react";

export const Home = (props) => {
  return (
    <div>
      <img src={props.img}/>
      <p > 
        {props.name}
        {props.price
        }
      </p>
    </div>
  );
};
