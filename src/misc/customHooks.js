import {useReducer,useEffect} from "react"

function showReducer(prevState,action){
  switch(action.type){
    case 'ADD_ITEM':{
      return [...prevState,action.showId]
    }
    case 'DELETE_ITEM':{
      return prevState.filter((showId) => showId !== action.showId)
    }
    default : return prevState
  }
}

function usePersistedReducer(reducer,initialState,key){
  const [state,dispatch] = useReducer(reducer, initialState, (init)=>{
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : init;
  })

  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(state))
  }, [state,key])

  return [state,dispatch]
}

export function useShows(key ="shows"){
  return usePersistedReducer(showReducer,[],key)
}

export function useLastQuery(key="lastQuery"){
  
}