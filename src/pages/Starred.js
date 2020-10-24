import React,{useState, useEffect} from 'react'
import {MainPageLayout} from "../components/MainPageLayout";
import { useShows } from '../misc/customHooks';
import {getAllResults} from "../misc/config";
import ShowGrid from "../components/show/ShowGrid.js";

export const Starred = () => {

  const [starred] = useShows();

  const [shows,setShows] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    if(starred && starred.length>0){
      const promises = starred.map(showId => getAllResults(`/shows/${showId}`));
      Promise.all(promises)
      .then(apiData => apiData.map(show => ({show})))
      .then(results => {
        setShows(results);
        setIsLoading(false);
      }).catch(error => {
        setError(error);
        setIsLoading(false);
      })

    }
    else{
      setIsLoading(false); //Incase there are no starred cards
    }
  },[starred])

  return (
    <MainPageLayout>
      {isLoading && <div>Shows are still loaded</div>}
      {error && <div>Error occurred</div>}
      {!isLoading && shows && shows.length===0 && <div>No shows were starred</div>}
      {!isLoading && shows && shows.length > 0 && <ShowGrid data={shows}/>}
    </MainPageLayout>
  )
}
