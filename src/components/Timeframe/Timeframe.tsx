import { Term } from "../../types";
import Button from "../Button";

type TimeframeProps = {
  setTime: React.Dispatch<React.SetStateAction<Term>>;
  time: string;
};

//Selectable timeframes for API calls
const TIMEFRAMES = [
  { child: "4 weeks", query: "short_term" as Term },
  { child: "6 months", query: "medium_term" as Term },
  { child: "1+ year", query: "long_term" as Term },
];

const Timeframe = ({ time, setTime }: TimeframeProps) => {
  const handleClick = (query: Term) => {
    setTime(query);
  };

  return (
    <div>
      {TIMEFRAMES.map((timeframe, i) => (
        <Button
          className={time === timeframe.query ? "selected" : ""}
          onClick={() => handleClick(timeframe.query)}
          key={i}
        >
          {timeframe.child}
        </Button>
      ))}
    </div>
  );
};

export default Timeframe;
