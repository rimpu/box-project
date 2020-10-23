import React from 'react'
import IMG_PLACEHOLDER from "../../images/not-found.png";
import { Star } from '../styled';
import { MainDataWrapper,Headline,TagList } from './ShowMainData.styled';

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <Headline className="text-side">
        <div>
          <h1>{name}</h1>
          <div>
            <Star isStarred={true}/>
            <span>{rating.average || 'N/A'}</span>
          </div>
        </div>
        <div className="summary" dangerouslySetInnerHTML={{ __html: summary }} />
            {/* <div>{summary}</div> */}
        <TagList>
          Tags:{' '}
          <div>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </TagList>
      </Headline>
    </MainDataWrapper>
  );
};

export default ShowMainData
