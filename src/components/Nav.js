import React from 'react'
import {NavList,LinkStyled} from "./Navs.styled";
import {useLocation} from "react-router-dom";

export const Nav = () => {

  const location = useLocation();

  const links = [{to:"/",text:"Home"},{to:"/starred",text:"Starred"}]

  return (
    <div>
      <NavList>
        {links.map((link,key)=><li key={key} ><LinkStyled to={link.to} className={link.to === location.pathname ?'active' :''}>{link.text}</LinkStyled></li>)}
      </NavList>
    </div>
  )
}
