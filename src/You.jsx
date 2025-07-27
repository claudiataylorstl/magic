import React, { useState, useEffect, useRef } from 'react';
import CornerSVG from './components/corner.svg';

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
    "If you're going through hell, keep going"
  ];

  const [randomText, setRandomText] = useState('');
  const [fontSize, setFontSize] = useState(1.0);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const textContainerRef = useRef(null);

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * textPool.length);
    return textPool[randomIndex];
  };

  const createGoldenWordGroups = (text) => {
    const words = text.split(' ');
    const phi = 1.618;
    const groups = [];

    let wordIndex = 0;
    let lineWordCount = 2;

    while (wordIndex < words.length) {
      const wordsForThisLine = Math.min(
        Math.round(lineWordCount),
        words.length - wordIndex
      );

      const lineWords = words.slice(wordIndex, wordIndex + wordsForThisLine);
      groups.push(lineWords);

      wordIndex += wordsForThisLine;
      lineWordCount *= phi;

      if (lineWordCount > 8) {
        lineWordCount = 2;
      }
    }

    return groups;
  };

  const handleReload = () => {
    const text = getRandomText();
    setRandomText(text);

    const length = text.length;
    let sizeFactor;
    let containerScale;

    const phi = 1.618;

    if (length < 30) {
      sizeFactor = phi * phi;
      containerScale = phi;
    } else if (length < 60) {
      sizeFactor = phi;
      containerScale = phi / 1.2;
    } else if (length < 90) {
      sizeFactor = 1;
      containerScale = 1;
    } else if (length < 120) {
      sizeFactor = 1 / phi;
      containerScale = 1 / 1.2;
    } else {
      sizeFactor = 1 / (phi * phi);
      containerScale = 1 / phi;
    }

    setFontSize(sizeFactor);

    if (textContainerRef.current) {
      textContainerRef.current.style.setProperty('--container-scale', containerScale);
    }
  };

  useEffect(() => {
    handleReload();
    // Track container resize
    const resizeObserver = new ResizeObserver(() => {
      if (textContainerRef.current) {
        const { width, height } = textContainerRef.current.getBoundingClientRect();
        setContainerDimensions({ width, height });
      }
    });
    resizeObserver.observe(textContainerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const wordGroups = randomText ? createGoldenWordGroups(randomText) : [];

  const { width, height } = containerDimensions;

  return (
    <div
      style={{
        color: 'white',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(284deg,#db5461,#4c6085,#772d8b,#f5b800)',
        backgroundSize: '240% 240%',
        animation: 'gradient-animation 12s ease infinite'
      }}
      onClick={handleReload}
    >
      <div
        ref={textContainerRef}
        style={{
          position: 'relative',
          width: 'calc(clamp(70%, 5vw + 75%, 95%) * var(--container-scale, 1))',
          maxWidth: 'calc(clamp(1000px, 61.8vw, 1800px) * var(--container-scale, 1))',
          minHeight: 'calc(clamp(247px, 24.7vh, 618px) * var(--container-scale, 1))',
          padding: 'calc(clamp(37px, 3.7vw, 74px) * var(--container-scale, 1))',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 3,
          transition: 'all 0.5s ease'
        }}
      >
        {/* Top-Left corner positioning based on container size */}
        <img
          src={CornerSVG}
          alt=""
          style={{
            position: 'absolute',
            top: `-${height * 0.27}px`, // 5% of container height
            left: `-${width * 0.14}px`, // 5% of container width
            width: '500px', // Fixed size of 200px
            height: '500px', // Fixed size of 200px
            transform: 'rotate(90deg) scaleX(-1)',
            transition: 'all 0.5s ease',
            zIndex: 10
          }}
        />
        {/* Bottom-Right corner positioning based on container size */}
        <img
          src={CornerSVG}
          alt=""
          style={{
            position: 'absolute',
            bottom: `-${height * 0.27}px`, // 5% of container height
            right: `-${width * 0.15}px`, // 5% of container width
            width: '500px', // Fixed size of 200px
            height: '500px', // Fixed size of 200px
            transform: 'rotate(90deg) scaleY(-1)',
            transition: 'all 0.5s ease',
            zIndex: 10
          }}
        />
        <div
          style={{
            fontFamily: '"Libertinus Math", system-ui',
            fontWeight: 400,
            letterSpacing: '0.02em',
            lineHeight: 1.5,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {wordGroups.map((lineWords, lineIndex) => (
            <div
              key={lineIndex}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '0.8rem',
                width: '100%'
              }}
            >
              {lineWords.map((word, wordIndex) => (
                <span
                  key={`${lineIndex}-${wordIndex}`}
                  style={{
                    display: 'inline-block',
                    marginRight: '1.2rem',
                    marginBottom: '0.8rem',
                    textShadow: '2px 2px 8px rgba(255, 175, 204, 0.5)',
                    color: 'white',
                    fontSize: `calc(clamp(${3/1.618}rem, 0.5rem + ${12/1.618}vw, ${7/1.618}rem) * ${fontSize})`
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

export default You;
