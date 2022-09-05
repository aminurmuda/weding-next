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
}
const ShowCounter = (props: CounterProps) => {
  const { days, hours, minutes, seconds } = props;
  return (
    <div className="show-counter">
      <div className="center">
        <DateTimeDisplay value={days} type={"Hari"} isDanger={days <= 3} />
        <span style={{ width: "17px" }}></span>
        <DateTimeDisplay value={hours} type={"Jam"} isDanger={false} />
        <span style={{ width: "17px" }}></span>
        <DateTimeDisplay value={minutes} type={"Menit"} isDanger={false} />
        <span style={{ width: "17px" }}></span>
        <DateTimeDisplay value={seconds} type={"Detik"} isDanger={false} />
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

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default Countdown;
