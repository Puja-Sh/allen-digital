import React from 'react';
import styled from "styled-components";

const shapes = {
    heart: '♥️',
    diamond: '♦️',
    club: '♠️',
    spade: '♣️'
}

const Wrapper = styled.div`
  border: 1px solid #a8a8a8;
  height: 130px;
  width: 80px;
  max-width: 80px;
  margin: 10px;
  border-radius: 8px;
  padding: 10px;
  justify-content: space-between;
`;

const Emoji = styled.div`
  font-size: 40px;
  text-align: center;
`;

const Label = styled.h1`
  color: ${ props => props.color };
  margin-top: 0;
`;

const Card = ({ cardDetails }) => {
    const { label, color, shape } = cardDetails;

    return (
        <Wrapper className='card-wrapper'>
            <Label color={ color }> { label } </Label>
            <Emoji> { shapes[shape] } </Emoji>
        </Wrapper>
    );
};

export default Card;