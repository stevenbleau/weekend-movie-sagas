import React from 'react';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 


const Details = () => {

   console.log('in MovieDetails.jsx')

   const details = useSelector(store=>store.details);
   const history = useHistory();
   
   return(
    <>
        <div key={details.id}>
            <h3>{details.title}</h3>
            <img src={details.poster} alt={details.title}/>
            <h6>{details.description}</h6>
            <button onClick = {() => history.push('/')}>Back to list</button>
        </div>
    </>
   )
}

export default Details;