// In this code we are tring to implement cards using props so 
// props means properties we can use it by passing argument in function
// and use it using props.attribute name. Another part is we are creating Carddata.jsx
// file array as an object we can use it i.e Carddata[0].imgsrc 
//with the help os props we reduce our work and use code flexibally and increse reusablity of code avoid same code for the same
//Hera we can write array map method for reduce our works and compact this code syntax is to write map methos is : {Carddata.map(funname)} and write function for this and inside function write card custom html and pass fun val name i.e imgsrc = {val.imgsrc}

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Carddata from './Carddata';
import './index.css';

function database(val){
  return(<>
          <Card
            key = {val.id}
            imgsrc = {val.imgsrc} 
            platformname ={val.platformname}
            title = {val.title}
            link =  {val.link}
          ></Card>
          </>);
}



ReactDOM.render(
  <>
    <h1 className = "heading">List Of Webseries on Amazon primevideo</h1>
    {Carddata.map(database)}
    
    {/*this is using simply array of an obj and access from Carddata.jsx file <Card
      imgsrc = {Carddata[5].imgsrc} 
      platformname ={Carddata[5].platformname}
      title = {Carddata[5].title}
      link =  {Carddata[5].link}
    ></Card>
     */}
  </>,document.getElementById('root')
);