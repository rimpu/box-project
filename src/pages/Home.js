import React,{useState} from 'react'
import {MainPageLayout} from "../components/MainPageLayout";
import {getAllResults} from "../misc/config";

export const Home = () => {

  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const onHandleChange = (event)=>{
    setInput(event.target.value)
  }

  const onKeyDown = (event)=>{
    if(event.keyCode === 13){
      setInput(input);
      getAllResults(`/search/shows?q=${input}`)
      .then(result => setResult(result))
    }
  }

  const onHandleClick = () => {
    getAllResults(`/search/shows?q=${input}`)
    .then(result => setResult(result))
  }

  const showResults = () => {
    if(result && result.length ===0){
      return <div>No results to show</div>
    }
    else if(result && result.length > 0){
    return <div>{result.map(elem=> <div key={elem.show.id}>{elem.show.name}</div>)}</div>
    }
    return null
  }

  return (
    <MainPageLayout>
      <input type="text" value={input} onChange={onHandleChange} onKeyDown={onKeyDown}/>
      <button type="click" onClick={onHandleClick}>Search</button>
      {showResults()}
    </MainPageLayout>
  )
}
