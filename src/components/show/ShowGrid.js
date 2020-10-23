import React from 'react'
import ShowCard from './ShowCard'
import IMAGE_NOT_FOUND from "../../images/not-found.png"
import {FlexGrid} from "../styled";
import { useShows } from '../../misc/customHooks';


const ShowGrid = ({data}) => {

  const [starredShows, dispatch] = useShows();

  return (
    <FlexGrid>
      {
      data.map(({show})=> {

        const isStarred = starredShows.includes(show.id);
        const handleStarClick = () =>{
          if(!isStarred){
            dispatch({
              type : 'ADD_ITEM',
              showId : show.id
            })
          }
          else{
            dispatch({
              type : 'DELETE_ITEM',
              showId : show.id
            })
          }
        }

        return (
          <ShowCard 
        key={show.id} 
        id={show.id} 
        name={show.name} 
        image={show.image ? show.image.medium: IMAGE_NOT_FOUND} 
        isStarred = {isStarred}
        starOnClick = {handleStarClick} />
        )
      })
    }
    </FlexGrid>
  )
}

export default ShowGrid;
