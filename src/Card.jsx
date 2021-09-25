//props is used in this code. Passing the function argument as a props it a name in convrntion we can use it any name here but this is prefferable. syntax is {props.attribute name} 

import React from 'react';

function Card(props){
    return (
        <>
            <div className = "card-container">
                <div className = "card">
                    <img src ={props.imgsrc} alt="webseriesimg" className = "card-img"></img>
                    <div className = "card-info">
                        <span className = "card-platform">{props.platformname}</span>
                        <h3 className ="card-title">{props.title}</h3><br></br>
                        <a href = {props.link} target ='__blank' ><button>Watch Now</button></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;