import React from "react";
interface DateTimeDisplayProps {
  value: number;
  type: string;
  isDanger: boolean;
}
const DateTimeDisplay = (props: DateTimeDisplayProps) => {
  const { value, type, isDanger } = props;
  const styleAdditional = isDanger ? "flash" : "";
  return (
    <div>
      <p
        className={`bold font-size-3 ${styleAdditional} ${
          value === 0 && "danger"
        }`}
      >
        {value}
      </p>
      <span className={`bold font-size-1 ${value === 0 && "danger"}`}>
        {type}
      </span>
    </div>
  );
};

export default DateTimeDisplay;
