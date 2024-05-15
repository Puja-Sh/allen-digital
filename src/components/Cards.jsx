import React, { useEffect, useState } from 'react';
import { shuffledCards } from "../utils/cards";
import Card from "./Card";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;

  h4 {
    text-align: center;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


const Cards = ({ cards, shownCardsCount }) => {
    const [shownCards, setShownCards] = useState([]);

    useEffect(() => {
        if (shownCardsCount <= 0) return;

        setShownCards((prev) => {
            const updatedCards = [];

            for (let i = shownCardsCount - 5; i < shownCardsCount; i++) {
                updatedCards.push(cards[i]);
            }

            if (shownCardsCount >= 52) {
                return [...prev, [cards[50], cards[51]]];
            }
            return [...prev, updatedCards]
        });
    }, [shownCardsCount])

    return (
        <Wrapper>

            {
                shownCards.map((cards, index) => {
                    return (
                        <CardsWrapper key={ index + Math.random() } className='cards'>
                            {
                                cards.map(card => <Card key={ index + `${ card.label }` } cardDetails={ card }/>)
                            }
                        </CardsWrapper>
                    )
                })
            }

            {
                shownCardsCount >= 52 ? <h4> No more cards</h4> : null
            }
        </Wrapper>
    );
};

export default Cards;