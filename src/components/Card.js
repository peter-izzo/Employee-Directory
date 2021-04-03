import React from 'react';
import Tilt from 'react-tilt';


function Card(props) {
    return(

        <div className="tc bg-light-blue dib br3 ps3 ma2 grow bw2 shadow-5">
            <Tilt classname="Tilt" options={{ max : 35, scale: 1}}>
                <img alt={props.firstName} src={props.picture} width="250" height="300"  />
            </Tilt>
            <>
                <h2>{props.title} {props.firstName} {props.lastName}</h2>
                <p><a href={'mailto:' + props.email}>{props.email}</a></p>
                <p>{props.phone}</p>
            </>

        </div>

    );
}

export default Card;