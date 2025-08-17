import React, { useEffect, useRef, useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const ScrambleText = ({ value, fontSize = "1rem" }) => {
  const [scrambled, setScrambled] = useState(value);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setScrambled(value);
  }, [value]);

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let iterations = 0;
    setIsScrambling(true);

    intervalRef.current = setInterval(() => {
      setScrambled((prev) => {
        return value
          .split("")
          .map((char, i) => {
            if (i < iterations) {
              return value[i];
            }
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("");
      });

      if (iterations >= value.length) {
        clearInterval(intervalRef.current);
        setIsScrambling(false);
      }
      iterations += 1 / 3;
    }, 30);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setScrambled(value);
    setIsScrambling(false);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className="scramble-text font-semibold"
      style={{ fontSize, display: "block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {scrambled}
    </span>
  );
};

export default ScrambleText;