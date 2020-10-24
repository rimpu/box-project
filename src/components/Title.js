import React from 'react'
import {TitleWrapper} from "./Title.styled"

const Title = ({title,subTitle}) => {
  return (
    <TitleWrapper>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </TitleWrapper>
  )
}

export default Title
