import React from 'react';

import './contact.css';


export default function Contact (props){

    return (
    <section className="contact">
        <img src={props.photo} alt={`${props.name} avatar`} />
        <h2 className="contact-name">{props.name}</h2>
        <address className="contact-address">{props.address}</address>
    </section>

);
}
