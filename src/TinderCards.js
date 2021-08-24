import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://fitsmallbusiness.com/wp-content/uploads/2019/10/elon_musk_headshot.jpg",
        },
        {
            name: 'Jeff Bezos',
            url: "https://techcentral.co.za/wp-content/uploads/2017/05/jeff-bezos-2156-1120.jpg",
        }
    ]);

    const swiped = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const outOfFrame = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className="tinderCards">

            <div className="tinderCards__cardContainer">

                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))
                }

            </div>




        </div>
    );
}

export default TinderCards;
