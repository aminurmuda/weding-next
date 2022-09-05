import React from "react";
interface DateTimeDisplayProps {
  value: number;
  type: string;
  isDanger: boolean;
}
const DateTimeDisplay = (props: DateTimeDisplayProps) => {
  const { value, type, isDanger } = props;
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p className="bold font-size-3">{value}</p>
      <span className="bold font-size-1">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
