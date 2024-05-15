import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Cards from "./Cards";
import { shuffledCards } from "../utils/cards";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const DrawCardBtn = styled.button`
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 10px 30px;
  background: dodgerblue;
  color: white;
  width: 60%;
  cursor: pointer;
  font-size: 15px;
  transition: background 0.3s ease-in-out;
  margin: 0 auto;

  &:hover {
    background: #63afff;
  }

  &:disabled {
    background: grey;
  }
`;


const Home = () => {
    const [cards,] = useState(shuffledCards());
    const [shownCardsCount, setShownCardsCount] = useState(0);

    console.log("shuffle cards", cards)

    const drawCardHandler = () => {
        if (shownCardsCount === 50) {
            setShownCardsCount(prev => prev + 2);
            return
        }
        setShownCardsCount(prev => prev + 5);
    }

    return (
        <Wrapper>
            <DrawCardBtn onClick={ drawCardHandler } disabled={ shownCardsCount >= 52 }> Draw Card </DrawCardBtn>

            <Cards cards={ cards } shownCardsCount={ shownCardsCount }/>
        </Wrapper>
    );
};

export default Home;