import React,{useState,useEffect,useReducer} from 'react'
import {useParams} from "react-router-dom"
import { getAllResults } from '../misc/config'

const reducer = (prevState,action) => {
  switch(action.type){
    case 'FETCH_INIT' : {
      return {
        ...prevState,
        isLoading : true,
        result : null,
        error : null
      }
    }
    case 'FETCH_SUCCESS' : {
      return {
        ...prevState,
        isLoading : false,
        result : action.payload,
        error : null
      }
    }
    case 'FETCH_FAILED' : {
      return {
        ...prevState,
        isLoading : false,
        result : null,
        error : action.payload
      }
    }
    default : {
      return prevState
    }
  }
}

const INIT_STATE = {
  result : null,
  isLoading : true,
  error : null
};


const Show = () => {
  const {id} = useParams();
  // const [result,setResult] = useState(null);
  // const [isLoading,setIsLoading] = useState(true);
  // const [error,setError] = useState(null);

  const [state,dispatch] = useReducer(reducer,INIT_STATE);


  useEffect(()=>{
    let isMounted = true;

    getAllResults(`/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(
      result => 
      {
        setTimeout(()=>{
          if(isMounted){
            dispatch({
              type : 'FETCH_SUCCESS',
              payload : result
            })
          //   setResult(result);
          // setIsLoading(false);
          }
        },2000)
        // setIsLoading(true)
        dispatch({
          action : 'FETCH_INIT'
        })
      }
      ).catch(e=>{
        if(isMounted){
          // setError(e.message);
          // setIsLoading(false)
          dispatch({
            type : 'FETCH_FAILED',
            payload : e.message
          })
        }
        
      });

      return ()=>{
        isMounted = false;
      }
  },[id])
  if(state.isLoading){
    return <div>Data is being loaded...</div>
  }
  else if(state.error){
  return <div>{state.error}</div>
  }
  return (
    <div>
      Show
    </div>
  )
}

export default Show;
