import { useState, useEffect } from 'react';
import Button from './Button.tsx';
import BetBox from './BetBox.tsx';

function Controller() {
  const [hasWon, setHasWon] = useState(false);
  const [betDirection, setBetDirection] = useState('up');
  const handlePlaceBet = () => {
    setHasWon(!hasWon);
  };

  useEffect(() => {
    console.log(hasWon);
  }, [hasWon]);

  return (
    <div className="w-full md:w-[850px] lg:w-[1200px] mx-auto px-5">
      <Button runFunction={handlePlaceBet} />
      <BetBox betDirection={betDirection} setBetDirection={setBetDirection} />
    </div>
  );
}

export default Controller;
