import React,{useState} from 'react'
import {MainPageLayout} from "../components/MainPageLayout";

export const Home = () => {

  const [input, setInput] = useState("")

  const onHandleChange = (event)=>{
    setInput(event.target.value)
  }

  const onKeyDown = (event)=>{
    if(event.keyCode === 13){
      setInput(input);
      fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
      .then(res => res.json())
      .then(result => console.log(result), setInput(""))
    }
  }

  const onHandleClick =()=>{
    fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
    .then(res => res.json())
    .then(result => console.log(result), setInput(""))
  }

  return (
    <MainPageLayout>
      <input type="text" value={input} onChange={onHandleChange} onKeyDown={onKeyDown}/>
      <button type="click" onClick={onHandleClick}>Search</button>
    </MainPageLayout>
  )
}
