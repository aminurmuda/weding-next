import React from "react";
import DateTimeDisplay from "../utils/DateTimeDisplay";
import { useCountdown } from "../utils/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};
interface CounterProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isDanger: boolean;
  shouldFlash: boolean;
}
const ShowCounter = (props: CounterProps) => {
  const { days, hours, minutes, seconds, isDanger, shouldFlash } = props;
  return (
    <div className="show-counter slide-down">
      <div className="center space-between px-1">
        <DateTimeDisplay
          value={days}
          type={"Hari"}
          isDanger={isDanger}
          shouldFlash={shouldFlash}
        />
        <span style={{ width: "17px" }}></span>
        <DateTimeDisplay
          value={hours}
          type={"Jam"}
          isDanger={isDanger}
          shouldFlash={shouldFlash}
        />
        <span style={{ width: "17px" }}></span>
        <DateTimeDisplay
          value={minutes}
          type={"Menit"}
          isDanger={isDanger}
          shouldFlash={shouldFlash}
        />
        <span style={{ width: "17px" }}></span>
        <DateTimeDisplay
          value={seconds}
          type={"Detik"}
          isDanger={isDanger}
          shouldFlash={shouldFlash}
        />
      </div>
    </div>
  );
};
interface CountdownProps {
  targetDate: number;
}
const Countdown = (props: CountdownProps) => {
  const { targetDate } = props;
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const shouldFlash = () => {
    return (
      days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 10 && seconds > 0
    );
  };
  const isDanger = () => {
    return days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 60;
  };
  if (days + hours + minutes + seconds <= 0) {
    // return <ExpiredNotice />;
    return (
      <ShowCounter
        isDanger={isDanger()}
        shouldFlash={shouldFlash()}
        days={0}
        hours={0}
        minutes={0}
        seconds={0}
      />
    );
  } else {
    return (
      <ShowCounter
        isDanger={isDanger()}
        shouldFlash={shouldFlash()}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default Countdown;
