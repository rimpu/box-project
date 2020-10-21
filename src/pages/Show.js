import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import { getAllResults } from '../misc/config'

const Show = () => {
  const {id} = useParams();
  const [result,setResult] = useState(null);
  useEffect(()=>{
    getAllResults(`/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(result => setResult(result));
  },[id])
  return (
    <div>
      This is show page
    </div>
  )
}

export default Show
