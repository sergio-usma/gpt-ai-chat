import BetButton from './BetButton.tsx';

type Props = {
  betDirection: string;
  setBetDirection: any;
};

function BetBox({ betDirection, setBetDirection }: Props) {
  return (
    <div className="mt-10">
      <div className="border py-2">LAYER 1</div>
      <div className="flex flex-row justify-between border py-2">
        <BetButton direction="down" betDirection={betDirection} setBetDirection={setBetDirection} />
        <BetButton direction="up" betDirection={betDirection} setBetDirection={setBetDirection} />
      </div>
      <div className="border py-2">LAYER 3</div>
    </div>
  );
}

export default BetBox;
