import Button from "../Button";

type TimeframeProps = {
  setTime: React.Dispatch<React.SetStateAction<string>>;
  time: string;
};

//Selectable timeframes for API calls
const TIMEFRAMES = [
  { child: "4 weeks", query: "short_term" },
  { child: "6 months", query: "medium_term" },
  { child: "1+ year", query: "long_term" },
];

const Timeframe = ({ time, setTime }: TimeframeProps) => {
  return (
    <div>
      {TIMEFRAMES.map((timeframe, i) => (
        <Button
          className={time === timeframe.query ? "selected" : ""}
          onClick={() => setTime(timeframe.query)}
          key={i}
        >
          {timeframe.child}
        </Button>
      ))}
    </div>
  );
};

export default Timeframe;
