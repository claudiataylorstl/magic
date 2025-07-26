
import React, { useState, useEffect } from 'react';

function You() {
    // Pool of strings to choose from
    const textPool = [
        "You light up the room!",
        "You significantly bring up the average of human goodness.",
        "Your kindness is contagious.",
        "You make the world better just by being in it.",
        "You are effortlessly brilliant.",
        "Trust that you are in the right place at the right time, doing the right things.",
        "Are you good enough?\n Fuck yes you are!",
        "You must do the things you think you cannot do",
        "If you really think small, your world will be small. If you think big, your world will be big",
        "Write it on your heart that every day is the best day in the year",
        "There is nothing either good or bad, but thinking makes it so",
        "Strive not to be a success, but rather to be of value.",
        "If you're going thru hell, keep going"
    ];

    const [randomText, setRandomText] = useState('');

    // Function to get random text from pool
    const getRandomText = () => {
        const randomIndex = Math.floor(Math.random() * textPool.length);
        return textPool[randomIndex];
    };

    // Set random text when component loads
    useEffect(() => {
        setRandomText(getRandomText());
    }, []);


     return (
        <div className="text-white vh-100 d-flex justify-content-center align-items-center text-center" style={{ fontSize: '8rem' }}>
            {randomText}
        </div>
     )


}
export default You;