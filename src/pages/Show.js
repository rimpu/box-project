import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import { getAllResults } from '../misc/config'

const Show = () => {
  const {id} = useParams();
  const [result,setResult] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    let isMounted = true;

    getAllResults(`/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(
      result => 
      {
        setTimeout(()=>{
          if(isMounted){
            setResult(result);
          setIsLoading(false);
          }
        },2000)
        setIsLoading(true)
      }
      ).catch(e=>{
        if(isMounted){
          setError(e.message);
          setIsLoading(false)
        }
        
      });

      return ()=>{
        isMounted = false;
      }
  },[id])
  if(isLoading){
    return <div>Data is being loaded...</div>
  }
  else if(error){
  return <div>{error}</div>
  }
  return (
    <div>
      Show
    </div>
  )
}

export default Show;
