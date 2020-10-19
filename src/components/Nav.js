import React from 'react'
import {Link} from "react-router-dom";

export const Nav = () => {

  const links = [{to:"/",text:"Home"},{to:"/starred",text:"Starred"}]

  return (
    <div>
      <ul>
        {links.map((link,key)=><li key={key}><Link to={link.to}>{link.text}</Link></li>)}
      </ul>
    </div>
  )
}
