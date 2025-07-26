
import React, { useState, useEffect } from 'react';
import AnimatedStars from './components/AnimatedStars';
import { useTrail, animated as a } from '@react-spring/web';

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 2, tension: 3000, friction: 200 },
    opacity: open ? 1 : 0,
    transform: open ? 'translate3d(0,0px,0) scale(1) rotate(0deg)' : 'translate3d(0,40px,0) scale(0) rotate(180deg)',
    from: { 
      opacity: 0, 
      transform: 'translate3d(0,40px,0) scale(0) rotate(180deg)' 
    },
    delay: 200,
    trail: 100 // Stagger between each word
  });

  return (
    <>
      {trail.map((style, index) => (
        <a.span 
          key={index} 
          style={{
            ...style,
            display: 'inline-block',
            marginRight: '0.5rem',
            textShadow: '2px 2px 8px rgba(255, 175, 204, 0.5)',
          }}
        >
          {items[index]}
        </a.span>
      ))}
    </>
  );
};

function You() {
    
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
    const [open, setOpen] = useState(false);

    
    const getRandomText = () => {
        const randomIndex = Math.floor(Math.random() * textPool.length);
        return textPool[randomIndex];
    };

    useEffect(() => {
        setRandomText(getRandomText());
        
        setTimeout(() => setOpen(true), 100);
    }, []);

    
    const words = randomText.split(' ');

    return (
        <>
            <AnimatedStars />
            <div className="text-white vh-100 d-flex justify-content-center align-items-center text-center position-relative" 
                 style={{ 
                     fontSize: '3rem', 
                     zIndex: 3,
                     fontWeight: '300'
                 }}>
                <div className="affirmation-text">
                    <Trail open={open}>
                        {words.map((word, i) => (
                            <span
                                key={i}
                                style={{
                                    
                                    display: 'inline-block',
                                    marginRight: '0.5rem',
                                    textShadow: '2px 2px 8px rgba(255, 175, 204, 0.5)',
                                    fontSize: '6rem',
                                    
                                    color: 'white'
                                    
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </Trail>
                </div>
            </div>
        </>
    );
}

export default You;