const shuffle = (cards) => {
    let len = cards.length;

    for(let i=len-1; i>0; i--){
        const index = Math.floor(Math.random() * (i+1));
        [cards[i], cards[index]] = [cards[index], cards[i]];
    }

    return cards;
}


export const shuffledCards = () => {
    const allCards = [];

    for(let i=1; i<=13; i++){
        allCards.push({label: i, color: 'red', shape: 'heart'});
        allCards.push({label: i, color: 'red', shape: 'diamond'});
        allCards.push({label: i, color: 'black', shape: 'spade'});
        allCards.push({label: i, color: 'black', shape: 'club'});
    }

    return shuffle(allCards);
}