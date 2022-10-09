import React, { useEffect } from 'react';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';

// DISPATCH MOVIE ID TO -> fetchMovieDetails in index.js
const Details = () => {

   console.log('in MovieDetails.jsx')

   const details = useSelector(store=>store.details);
   const history = useHistory();
   const {id} = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
    dispatch ({ type: 'FETCH_MOVIE_DETAILS', payload: id})
   }, [id]);
   
   return(
    <>
        <div key={details.id}>
            <h1>{id}</h1>
            <h3>{details.title}</h3>
            <img src={details.poster} alt={details.title}/>
            <h6>{details.description}</h6>
            <button onClick = {() => history.push('/')}>Back to list</button>
        </div>
    </>
   )
}

export default Details;