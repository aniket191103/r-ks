import React from "react"

export default function Contact(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img className="cat" src={props.image} />
            <h3>{props.name}</h3>
            <div className="info-group">
                {/* <img src="./image/phone-icon.png" /> */}
                <p>{props.phoneNumber}</p>
            </div>
            <div className="info-group">
                {/* <img src="./image/mail-icon.png" /> */}
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )
}