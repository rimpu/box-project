import React,{useState} from 'react'
import {MainPageLayout} from "../components/MainPageLayout";
import {getAllResults} from "../misc/config";
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';
import { SearchInput, RadioInputsWrapper, SearchButtonWrapper } from './Home.styled';
import CustomRadio from '../CustomRadio';

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
    if(result && result.length === 0){
      return <div>No results to show</div>;
    }
    else if(result && result.length > 0)
    {
    return result[0].show ? <ShowGrid data={result}/> : <ActorGrid data={result}/>
    }
    return null;
  }

  const onRadioChange = (event) =>{
    setSearchOption(event.target.value);
  }

  return (
    <MainPageLayout>
      <SearchInput 
      type="text" 
      value={input} 
      onChange={onHandleChange} 
      onKeyDown={onKeyDown}/>
      <RadioInputsWrapper>
        <div>
          <CustomRadio 
          id = "shows-search" 
          value = "shows"
          checked = {isShowSearch}
          onChange = {onRadioChange}
          label = "Shows" />
        </div>
        <div>
        <CustomRadio 
          id = "actors-search" 
          value = "people"
          checked = {!isShowSearch}
          onChange = {onRadioChange}
          label = "Actors" />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
      <button 
      type="click" 
      onClick={onHandleClick}>
      Search</button>
      {showResults()}
      </SearchButtonWrapper>
    </MainPageLayout>
  )
}
