import React from 'react'
import { CardHeader, CardWrapper, CardListItem, CardList, CardText   } from '../../UI.styled';
import { CardContent, generateId } from '../../constants';


const Card: React.FC<CardContent> = ({header, options, text}) => {

  const  trimHeader = header?.length >= 20 ? `${header.slice(0, 19)}...` : header;
  const  trimText = text?.length >= 65 ? `${text.slice(0, 64)}...` : text;

  return (
    <CardWrapper>
      <CardHeader>{trimHeader}</CardHeader>
      <CardList>
        {options?.length && options.slice(0, 3).map((option) => (
          <CardListItem key={generateId()}>{option}</CardListItem>
        ))}
        {options?.length > 3 && <CardListItem color={'blue'}> + {options?.length - 3} ...</CardListItem>}
      </CardList>
      <CardText>{trimText}</CardText>
    </CardWrapper>
  )
}

export default Card;
