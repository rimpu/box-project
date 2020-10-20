import React,{useState} from 'react'
import {MainPageLayout} from "../components/MainPageLayout";
import {getAllResults} from "../misc/config";

export const Home = () => {

  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [searchOption,setSearchOption] = useState("shows");
  const isShowSearch = (searchOption === "shows");


  const onHandleChange = (event) => {
    setInput(event.target.value)
  }

  const searchItem = () =>{
    getAllResults(`/search/${searchOption}?q=${input}`)
    .then(result => setResult(result))
  }

  const onKeyDown = (event)=>{
    if(event.keyCode === 13){
      setInput(input);
      searchItem();
    }
  }

  const onHandleClick = () => {
    searchItem();
  }

  const showResults = () => {
    if(result && result.length ===0){
      return <div>No results to show</div>;
    }
    else if(result && result.length > 0){
    return result[0].show ? 
           result.map(elem=> <div key={elem.show.id}>{elem.show.name}</div>) 
           : result.map(elem=> <div key={elem.person.id}>{elem.person.name}</div>);
    }
    return null;
  }

  const onRadioChange = (event) =>{
    setSearchOption(event.target.value);
  }

  return (
    <MainPageLayout>
      <input 
      type="text" 
      value={input} 
      onChange={onHandleChange} 
      onKeyDown={onKeyDown}/>
      <div>
        <label htmlFor="shows-search">
          Shows
          <input 
          id = "shows-search" 
          type = "radio"
          value = "shows"
          checked = {isShowSearch}
          onChange = {onRadioChange}/>
        </label>
        <label htmlFor="actors-search">
          Actors
          <input id="actors-search" 
          type="radio"
          value = "people"
          checked = {!isShowSearch}
          onChange = {onRadioChange}
          />
        </label>
      </div>
      <button 
      type="click" 
      onClick={onHandleClick}>
      Search</button>
      {showResults()}
    </MainPageLayout>
  )
}
