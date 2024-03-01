import React, { useEffect, useState } from 'react'
import CountDown from './CountDown';
import { cardDocId, databaseId, databases } from './appWrite-config';
import { ID, Query } from 'appwrite';
import { doc } from 'firebase/firestore';

function GameArea() {

    var deckOfCards = [{ "code": "2C", "image": "https://deckofcardsapi.com/static/img/2C.png", "images": { "svg": "https://deckofcardsapi.com/static/img/2C.svg", "png": "https://deckofcardsapi.com/static/img/2C.png" }, "value": "2", "suit": "CLUBS" }, { "code": "5C", "image": "https://deckofcardsapi.com/static/img/5C.png", "images": { "svg": "https://deckofcardsapi.com/static/img/5C.svg", "png": "https://deckofcardsapi.com/static/img/5C.png" }, "value": "5", "suit": "CLUBS" }, { "code": "0C", "image": "https://deckofcardsapi.com/static/img/0C.png", "images": { "svg": "https://deckofcardsapi.com/static/img/0C.svg", "png": "https://deckofcardsapi.com/static/img/0C.png" }, "value": "10", "suit": "CLUBS" }, { "code": "KD", "image": "https://deckofcardsapi.com/static/img/KD.png", "images": { "svg": "https://deckofcardsapi.com/static/img/KD.svg", "png": "https://deckofcardsapi.com/static/img/KD.png" }, "value": "13", "suit": "DIAMONDS" }, { "code": "8S", "image": "https://deckofcardsapi.com/static/img/8S.png", "images": { "svg": "https://deckofcardsapi.com/static/img/8S.svg", "png": "https://deckofcardsapi.com/static/img/8S.png" }, "value": "8", "suit": "SPADES" }, { "code": "6S", "image": "https://deckofcardsapi.com/static/img/6S.png", "images": { "svg": "https://deckofcardsapi.com/static/img/6S.svg", "png": "https://deckofcardsapi.com/static/img/6S.png" }, "value": "6", "suit": "SPADES" }, { "code": "QS", "image": "https://deckofcardsapi.com/static/img/QS.png", "images": { "svg": "https://deckofcardsapi.com/static/img/QS.svg", "png": "https://deckofcardsapi.com/static/img/QS.png" }, "value": "12", "suit": "SPADES" }, { "code": "7H", "image": "https://deckofcardsapi.com/static/img/7H.png", "images": { "svg": "https://deckofcardsapi.com/static/img/7H.svg", "png": "https://deckofcardsapi.com/static/img/7H.png" }, "value": "7", "suit": "HEARTS" }, { "code": "0D", "image": "https://deckofcardsapi.com/static/img/0D.png", "images": { "svg": "https://deckofcardsapi.com/static/img/0D.svg", "png": "https://deckofcardsapi.com/static/img/0D.png" }, "value": "10", "suit": "DIAMONDS" }, { "code": "JH", "image": "https://deckofcardsapi.com/static/img/JH.png", "images": { "svg": "https://deckofcardsapi.com/static/img/JH.svg", "png": "https://deckofcardsapi.com/static/img/JH.png" }, "value": "11", "suit": "HEARTS" }, { "code": "KS", "image": "https://deckofcardsapi.com/static/img/KS.png", "images": { "svg": "https://deckofcardsapi.com/static/img/KS.svg", "png": "https://deckofcardsapi.com/static/img/KS.png" }, "value": "13", "suit": "SPADES" }, { "code": "0S", "image": "https://deckofcardsapi.com/static/img/0S.png", "images": { "svg": "https://deckofcardsapi.com/static/img/0S.svg", "png": "https://deckofcardsapi.com/static/img/0S.png" }, "value": "10", "suit": "SPADES" }, { "code": "QC", "image": "https://deckofcardsapi.com/static/img/QC.png", "images": { "svg": "https://deckofcardsapi.com/static/img/QC.svg", "png": "https://deckofcardsapi.com/static/img/QC.png" }, "value": "12", "suit": "CLUBS" }, { "code": "4C", "image": "https://deckofcardsapi.com/static/img/4C.png", "images": { "svg": "https://deckofcardsapi.com/static/img/4C.svg", "png": "https://deckofcardsapi.com/static/img/4C.png" }, "value": "4", "suit": "CLUBS" }, { "code": "AD", "image": "https://deckofcardsapi.com/static/img/aceDiamonds.png", "images": { "svg": "https://deckofcardsapi.com/static/img/aceDiamonds.svg", "png": "https://deckofcardsapi.com/static/img/aceDiamonds.png" }, "value": "ACE", "suit": "DIAMONDS" }, { "code": "7C", "image": "https://deckofcardsapi.com/static/img/7C.png", "images": { "svg": "https://deckofcardsapi.com/static/img/7C.svg", "png": "https://deckofcardsapi.com/static/img/7C.png" }, "value": "7", "suit": "CLUBS" }, { "code": "AS", "image": "https://deckofcardsapi.com/static/img/AS.png", "images": { "svg": "https://deckofcardsapi.com/static/img/AS.svg", "png": "https://deckofcardsapi.com/static/img/AS.png" }, "value": "ACE", "suit": "SPADES" }, { "code": "QD", "image": "https://deckofcardsapi.com/static/img/QD.png", "images": { "svg": "https://deckofcardsapi.com/static/img/QD.svg", "png": "https://deckofcardsapi.com/static/img/QD.png" }, "value": "12", "suit": "DIAMONDS" }, { "code": "2D", "image": "https://deckofcardsapi.com/static/img/2D.png", "images": { "svg": "https://deckofcardsapi.com/static/img/2D.svg", "png": "https://deckofcardsapi.com/static/img/2D.png" }, "value": "2", "suit": "DIAMONDS" }, { "code": "6H", "image": "https://deckofcardsapi.com/static/img/6H.png", "images": { "svg": "https://deckofcardsapi.com/static/img/6H.svg", "png": "https://deckofcardsapi.com/static/img/6H.png" }, "value": "6", "suit": "HEARTS" }, { "code": "6C", "image": "https://deckofcardsapi.com/static/img/6C.png", "images": { "svg": "https://deckofcardsapi.com/static/img/6C.svg", "png": "https://deckofcardsapi.com/static/img/6C.png" }, "value": "6", "suit": "CLUBS" }, { "code": "KC", "image": "https://deckofcardsapi.com/static/img/KC.png", "images": { "svg": "https://deckofcardsapi.com/static/img/KC.svg", "png": "https://deckofcardsapi.com/static/img/KC.png" }, "value": "13", "suit": "CLUBS" }, { "code": "3H", "image": "https://deckofcardsapi.com/static/img/3H.png", "images": { "svg": "https://deckofcardsapi.com/static/img/3H.svg", "png": "https://deckofcardsapi.com/static/img/3H.png" }, "value": "3", "suit": "HEARTS" }, { "code": "4D", "image": "https://deckofcardsapi.com/static/img/4D.png", "images": { "svg": "https://deckofcardsapi.com/static/img/4D.svg", "png": "https://deckofcardsapi.com/static/img/4D.png" }, "value": "4", "suit": "DIAMONDS" }, { "code": "AC", "image": "https://deckofcardsapi.com/static/img/AC.png", "images": { "svg": "https://deckofcardsapi.com/static/img/AC.svg", "png": "https://deckofcardsapi.com/static/img/AC.png" }, "value": "ACE", "suit": "CLUBS" }, { "code": "AH", "image": "https://deckofcardsapi.com/static/img/AH.png", "images": { "svg": "https://deckofcardsapi.com/static/img/AH.svg", "png": "https://deckofcardsapi.com/static/img/AH.png" }, "value": "ACE", "suit": "HEARTS" }, { "code": "6D", "image": "https://deckofcardsapi.com/static/img/6D.png", "images": { "svg": "https://deckofcardsapi.com/static/img/6D.svg", "png": "https://deckofcardsapi.com/static/img/6D.png" }, "value": "6", "suit": "DIAMONDS" }, { "code": "3D", "image": "https://deckofcardsapi.com/static/img/3D.png", "images": { "svg": "https://deckofcardsapi.com/static/img/3D.svg", "png": "https://deckofcardsapi.com/static/img/3D.png" }, "value": "3", "suit": "DIAMONDS" }, { "code": "2H", "image": "https://deckofcardsapi.com/static/img/2H.png", "images": { "svg": "https://deckofcardsapi.com/static/img/2H.svg", "png": "https://deckofcardsapi.com/static/img/2H.png" }, "value": "2", "suit": "HEARTS" }, { "code": "5D", "image": "https://deckofcardsapi.com/static/img/5D.png", "images": { "svg": "https://deckofcardsapi.com/static/img/5D.svg", "png": "https://deckofcardsapi.com/static/img/5D.png" }, "value": "5", "suit": "DIAMONDS" }, { "code": "3S", "image": "https://deckofcardsapi.com/static/img/3S.png", "images": { "svg": "https://deckofcardsapi.com/static/img/3S.svg", "png": "https://deckofcardsapi.com/static/img/3S.png" }, "value": "3", "suit": "SPADES" }, { "code": "0H", "image": "https://deckofcardsapi.com/static/img/0H.png", "images": { "svg": "https://deckofcardsapi.com/static/img/0H.svg", "png": "https://deckofcardsapi.com/static/img/0H.png" }, "value": "10", "suit": "HEARTS" }, { "code": "5S", "image": "https://deckofcardsapi.com/static/img/5S.png", "images": { "svg": "https://deckofcardsapi.com/static/img/5S.svg", "png": "https://deckofcardsapi.com/static/img/5S.png" }, "value": "5", "suit": "SPADES" }, { "code": "9C", "image": "https://deckofcardsapi.com/static/img/9C.png", "images": { "svg": "https://deckofcardsapi.com/static/img/9C.svg", "png": "https://deckofcardsapi.com/static/img/9C.png" }, "value": "9", "suit": "CLUBS" }, { "code": "9S", "image": "https://deckofcardsapi.com/static/img/9S.png", "images": { "svg": "https://deckofcardsapi.com/static/img/9S.svg", "png": "https://deckofcardsapi.com/static/img/9S.png" }, "value": "9", "suit": "SPADES" }, { "code": "QH", "image": "https://deckofcardsapi.com/static/img/QH.png", "images": { "svg": "https://deckofcardsapi.com/static/img/QH.svg", "png": "https://deckofcardsapi.com/static/img/QH.png" }, "value": "12", "suit": "HEARTS" }, { "code": "JD", "image": "https://deckofcardsapi.com/static/img/JD.png", "images": { "svg": "https://deckofcardsapi.com/static/img/JD.svg", "png": "https://deckofcardsapi.com/static/img/JD.png" }, "value": "11", "suit": "DIAMONDS" }, { "code": "5H", "image": "https://deckofcardsapi.com/static/img/5H.png", "images": { "svg": "https://deckofcardsapi.com/static/img/5H.svg", "png": "https://deckofcardsapi.com/static/img/5H.png" }, "value": "5", "suit": "HEARTS" }, { "code": "KH", "image": "https://deckofcardsapi.com/static/img/KH.png", "images": { "svg": "https://deckofcardsapi.com/static/img/KH.svg", "png": "https://deckofcardsapi.com/static/img/KH.png" }, "value": "13", "suit": "HEARTS" }, { "code": "JS", "image": "https://deckofcardsapi.com/static/img/JS.png", "images": { "svg": "https://deckofcardsapi.com/static/img/JS.svg", "png": "https://deckofcardsapi.com/static/img/JS.png" }, "value": "11", "suit": "SPADES" }, { "code": "3C", "image": "https://deckofcardsapi.com/static/img/3C.png", "images": { "svg": "https://deckofcardsapi.com/static/img/3C.svg", "png": "https://deckofcardsapi.com/static/img/3C.png" }, "value": "3", "suit": "CLUBS" }, { "code": "JC", "image": "https://deckofcardsapi.com/static/img/JC.png", "images": { "svg": "https://deckofcardsapi.com/static/img/JC.svg", "png": "https://deckofcardsapi.com/static/img/JC.png" }, "value": "11", "suit": "CLUBS" }, { "code": "2S", "image": "https://deckofcardsapi.com/static/img/2S.png", "images": { "svg": "https://deckofcardsapi.com/static/img/2S.svg", "png": "https://deckofcardsapi.com/static/img/2S.png" }, "value": "2", "suit": "SPADES" }, { "code": "7D", "image": "https://deckofcardsapi.com/static/img/7D.png", "images": { "svg": "https://deckofcardsapi.com/static/img/7D.svg", "png": "https://deckofcardsapi.com/static/img/7D.png" }, "value": "7", "suit": "DIAMONDS" }, { "code": "9H", "image": "https://deckofcardsapi.com/static/img/9H.png", "images": { "svg": "https://deckofcardsapi.com/static/img/9H.svg", "png": "https://deckofcardsapi.com/static/img/9H.png" }, "value": "9", "suit": "HEARTS" }, { "code": "7S", "image": "https://deckofcardsapi.com/static/img/7S.png", "images": { "svg": "https://deckofcardsapi.com/static/img/7S.svg", "png": "https://deckofcardsapi.com/static/img/7S.png" }, "value": "7", "suit": "SPADES" }, { "code": "8C", "image": "https://deckofcardsapi.com/static/img/8C.png", "images": { "svg": "https://deckofcardsapi.com/static/img/8C.svg", "png": "https://deckofcardsapi.com/static/img/8C.png" }, "value": "8", "suit": "CLUBS" }, { "code": "8H", "image": "https://deckofcardsapi.com/static/img/8H.png", "images": { "svg": "https://deckofcardsapi.com/static/img/8H.svg", "png": "https://deckofcardsapi.com/static/img/8H.png" }, "value": "8", "suit": "HEARTS" }, { "code": "4S", "image": "https://deckofcardsapi.com/static/img/4S.png", "images": { "svg": "https://deckofcardsapi.com/static/img/4S.svg", "png": "https://deckofcardsapi.com/static/img/4S.png" }, "value": "4", "suit": "SPADES" }, { "code": "8D", "image": "https://deckofcardsapi.com/static/img/8D.png", "images": { "svg": "https://deckofcardsapi.com/static/img/8D.svg", "png": "https://deckofcardsapi.com/static/img/8D.png" }, "value": "8", "suit": "DIAMONDS" }];

    const [playerACard, setPlayerACard] = useState([]);
    const [playerBCard, setPlayerBCard] = useState([]);
    const [callCount, setCallCount] = useState(0);
    var collectionId = null;
    let counter = 0;






    const handleChildClick = async () => {
        // Reset call counter
        setCallCount(0);
        let counter = 0;
        // Start calling the function every 3 seconds
        const intervalId = setInterval(() => {
            let cardN = ""

            switch (counter) {
                case 0: {
                    cardN = "pACard1";
                    break;
                }
                case 1: {
                    cardN = "pBCard1";
                    break;
                } case 2: {
                    cardN = "pACard2";
                    break;
                } case 3: {
                    cardN = "pBCard2";
                    break;
                } case 4: {
                    cardN = "pACard3";
                    break;
                }
                case 5: {
                    cardN = "pBCard3";
                    break;
                }
                default: {

                }
            }
            fetchCardDetails(cardN);
            counter++;
            if (counter === 6) {
                clearInterval(intervalId);
                gameOverHandler();
            }
        }, 3000);
    };

    const gameOverHandler = async () => {
        //var res = await databases.updateDocument(databaseId, cardDocId, collectionId, { isGameOver: true });
    }

    // Function to determine the value of a card
    function getCardValue(card) {
        return Math.max(...card.map(obj => obj.value));
        //  parseInt(card.value);
    }

    // Function to check if all cards have the same suit (Flush)
    function isFlush(cards) {
        return cards.every(card => card.suit === cards[0].suit);
    }

    // Function to check if all cards have the same suit (Flush)
    function isTrio(cards) {
        return cards.every(card => card.value === cards[0].value);
    }

    // Function to check if cards form a sequence
    function isSequence(cards) {
        cards.sort((a, b) => a.value - b.value);
        for (let i = 0; i < cards.length - 1; i++) {
            if (cards[i + 1].value - cards[i].value !== 1) {
                return false;
            }
        }
        return true;
    }


    // Function to check if cards form a pair
    function isPair(cards) {
        const values = cards.map(card => card.value);
        values.sort();
        if (values[0] == values[1] || values[1] == values[2])
            return true;
        return false;
    }

    function getPairMaxvalue(cards) {
        const values = cards.map(card => card.value);
        values.sort();
        if (values[0] == values[1])
            return values[0];
        else if (values[1] == values[2])
            return values[1]
        //return false;
    }

    // Function to determine the hand type and value
    function evaluateHand(cards) {
        var cardOp = [];
        var cardval = getCardValue(cards);
        if (isTrio(cards)) {
            cardOp.push({ type: 'Pure Sequence', maxValue: cardval, priority: 1 });
        }
        if (isFlush(cards) && isSequence(cards)) {
            cardOp.push({ type: 'Pure Sequence', maxValue: cardval, priority: 2 });
        }
        if (isSequence(cards)) {
            cardOp.push({ type: 'Sequence', maxValue: cardval, priority: 3 });
        }
        if (isFlush(cards)) {
            cardOp.push({ type: 'Color', maxValue: cardval, priority: 4 });
        }
        if (isPair(cards)) {
            cardOp.push({ type: 'Pair', maxValue: getPairMaxvalue(cards), priority: 5 }); // pair
        }
        cardOp.push({ type: 'High Card', maxValue: cardval, priority: 6 }); // Highest card

        return cardOp;
    }

    // Function to determine the winner between two players
    function determineWinner(player1Cards, player2Cards) {

        //console.log(player1Cards);
        const player1Hand = evaluateHand(player1Cards);
        //console.log(player1Hand);
        //console.log(player2Cards)
        const player2Hand = evaluateHand(player2Cards);
        //console.log(player2Hand);

        return { pAOp: player1Hand, pBOp: player2Hand }


    }

    const getWinner = (p1, p2) => {
        // Determine the winner
        const {pAOp, pBOp} = determineWinner(p1, p2);
        let pW1 = Math.min(...pAOp.map(obj => obj.priority));
        let pW2 = Math.min(...pBOp.map(obj => obj.priority));

        if(pW1 < pW2){
            console.log("Winner is pA")
            alert("a");
        }
        else if( pW2 < pW1){
            console.log("Winner is pB")
            alert("b");
        }
        if(pW1 === pW2){
            
        }

        console.log(p1);
        console.log(p2);


        // Output the result
        // if (result < 0) {
        //     console.log('Player 1 wins!');
        // } else if (result > 0) {
        //     console.log('Player 2 wins!');
        // } else {
        //     console.log('It\'s a tie!');
        // }
    }


    const fetchCardDetails = async (cardN) => {
        // var res = await databases.listDocuments(databaseId, cardDocId,
        //     [
        //         Query.equal('isGameOver', false),
        //         Query.limit(1),
        //         Query.select([cardN, '$id'])
        //     ])
        // var data = res.documents[0];
        // collectionId = data.$id;
        // console.log(collectionId);
        // //console.log(data)
        // if (cardN.includes("pA"))
        //     setPlayerACard(prevItems => [...prevItems, JSON.parse(data[cardN])]);
        // else
        //     setPlayerBCard(prevItems => [...prevItems, JSON.parse(data[cardN])]);

        // console.log(JSON.parse(data[cardN]))
    }

    const startNewgameHandler = () => {
        setPlayerACard([]);
        setPlayerBCard([]);
    }

    const selectRandomCards = () => {
        const selectedCards = [];
        const usedIndices = new Set();
        while (selectedCards.length < 6) {
            const randomIndex = Math.floor(Math.random() * deckOfCards.length);
            if (!usedIndices.has(randomIndex)) {
                var selData = deckOfCards[randomIndex];
                var obj = {
                    code: selData.code,
                    image: selData.image,
                    value: selData.value,
                    suit: selData.suit
                }
                selectedCards.push(obj);
                usedIndices.add(randomIndex);
            }
        }
        return selectedCards;
    };

    const secondChangeHandler = () => {
        var cardD = selectRandomCards();
        // var cardD = [
        //     {value: 5, suit:'SPADES'},
        //     {value: 6, suit:'SPADES'},
        //     {value: 7, suit:'SPADES'},
        //     {value: 3, suit:'DIAMOND'},
        //     {value: 3, suit:'DIAMOND'},
        //     {value: 3, suit:'DIAMOND'},
        // ]
        setPlayerACard(cardD.slice(0, 3));
        setPlayerBCard(cardD.slice(3, 6));
        getWinner(cardD.slice(0, 3), cardD.slice(3, 6));
    }

    return (
        <div className='game-area box-shadow-div'>
            <div className='leftGdiv text-shadow'>
                <div className="cardc">
                    {playerACard[0] != undefined && <span className='card-no' style={{ color: playerACard[0].suit == "HEARTS" || playerACard[0].suit == "DIAMONDS" ? 'white' : 'white' }}>{playerACard[0].code}</span>}
                    {playerACard[0] == undefined && <div className="cardNumberText">A1</div>}
                    {playerACard[0] != undefined && <img style={{ height: "100%", width: "100%" }} src={playerACard[0].image} alt="" />}
                </div>
                <div className="cardc">
                    {playerACard[1] != undefined && <span className='card-no' style={{ color: playerACard[1].suit == "HEARTS" || playerACard[1].suit == "DIAMONDS" ? 'white' : 'white' }}>{playerACard[1].code}</span>}
                    {playerACard[1] == undefined && <div className="cardNumberText">A2</div>}
                    {playerACard[1] != undefined && <img style={{ height: "100%", width: "100%" }} src={playerACard[1].image} alt="" />}

                    {/* {showCard2 && showCard && <img style={{ height: "100%", width: "100%" }} src={deckimg[1]} alt="" />} */}
                </div>
                <div className="cardc">
                    {playerACard[2] != undefined && <span className='card-no' style={{ color: playerACard[2].suit == "HEARTS" || playerACard[2].suit == "DIAMONDS" ? 'white' : 'white' }}>{playerACard[2].code}</span>}

                    {playerACard[2] == undefined && <div className="cardNumberText">A3</div>}
                    {playerACard[2] != undefined && <img style={{ height: "100%", width: "100%" }} src={playerACard[2].image} alt="" />}

                </div>
            </div>
            <div className='timerC'>
                <CountDown timerReach={() => handleChildClick()} startNewgame={() => startNewgameHandler()} secondChange={() => secondChangeHandler()} />
            </div>
            <div className='text-shadow rightGdiv'>
                <div className="cardc">
                    {playerBCard[0] != undefined && <span className='card-no' style={{ color: playerBCard[0].suit == "HEARTS" || playerBCard[0].suit == "DIAMONDS" ? 'white' : 'white' }}>{playerBCard[0].code}</span>}

                    {playerBCard[0] == undefined && <div className="cardNumberText">B1</div>}
                    {playerBCard[0] != undefined && <img style={{ height: "100%", width: "100%" }} src={playerBCard[0].image} alt="" />}

                    {/* {showCard1 && showCard && <img style={{ height: "100%", width: "100%" }} src={deckimg[0]} alt="" />} */}
                </div>
                <div className="cardc">
                    {playerBCard[1] != undefined && <span className='card-no' style={{ color: playerBCard[1].suit == "HEARTS" || playerBCard[1].suit == "DIAMONDS" ? 'white' : 'white' }}>{playerBCard[1].code}</span>}

                    {playerBCard[1] == undefined && <div className="cardNumberText">B2</div>}
                    {playerBCard[1] != undefined && <img style={{ height: "100%", width: "100%" }} src={playerBCard[1].image} alt="" />}

                    {/* {showCard2 && showCard && <img style={{ height: "100%", width: "100%" }} src={deckimg[1]} alt="" />} */}
                </div>
                <div className="cardc">
                    {playerBCard[2] != undefined && <span className='card-no' style={{ color: playerBCard[2].suit == "HEARTS" || playerBCard[2].suit == "DIAMONDS" ? 'white' : 'white' }}>{playerBCard[2].code}</span>}

                    {playerBCard[2] == undefined && <div className="cardNumberText">B3</div>}
                    {playerBCard[2] != undefined && <img style={{ height: "100%", width: "100%" }} src={playerBCard[2].image} alt="" />}

                    {/* {showCard3 && showCard && <img style={{ height: "100%", width: "100%" }} src={deckimg[2]} alt="" />} */}
                </div>
            </div>
        </div>
    )
}

export default GameArea