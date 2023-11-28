import React from "react";
interface DateTimeDisplayProps {
  value: number;
  type: string;
  isDanger: boolean;
  shouldFlash?: boolean;
}
const DateTimeDisplay = (props: DateTimeDisplayProps) => {
  const { value, type, isDanger, shouldFlash = false} = props;
  const styles = [];
  if (shouldFlash) {
    styles.push("flash");
  }
  if (isDanger) {
    styles.push("danger");
  }
  const styleAdditional = styles.join(" ");
  return (
    <div>
      <p className={`bold font-size-3 ${styleAdditional}`}>{value}</p>
      <span className={`bold font-size-1 ${isDanger && "danger"}`}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
