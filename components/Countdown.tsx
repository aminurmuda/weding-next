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
}
const ShowCounter = (props: CounterProps) => {
  const { days, hours, minutes, seconds, isDanger } = props;
  return (
    <div className="show-counter">
      <div className="center">
        <DateTimeDisplay value={days} type={"Hari"} isDanger={isDanger} />
        <span style={{ width: "17px" }}></span>
        <DateTimeDisplay value={hours} type={"Jam"} isDanger={isDanger} />
        <span style={{ width: "17px" }}></span>
        <DateTimeDisplay value={minutes} type={"Menit"} isDanger={isDanger} />
        <span style={{ width: "17px" }}></span>
        <DateTimeDisplay value={seconds} type={"Detik"} isDanger={isDanger} />
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
      days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 60 && seconds > 0
    );
  };
  if (days + hours + minutes + seconds <= 0) {
    // return <ExpiredNotice />;
    return (
      <ShowCounter
        isDanger={shouldFlash()}
        days={0}
        hours={0}
        minutes={0}
        seconds={0}
      />
    );
  } else {
    return (
      <ShowCounter
        isDanger={shouldFlash()}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default Countdown;
