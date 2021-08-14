import { useEffect, useState } from "react";

const Timer = ({ work, rest, started, time, setTime }) => {
  const [timeType, setTimeType] = useState(work)

  useEffect(() => {
    setTime({ ...time, minutes: work });
  }, [work]);

  useEffect(() => {
    if (started) {
      if (time.seconds > 0) {
        console.log(time.seconds);
        setTimeout(() => setTime({ ...time, seconds: time.seconds - 1 }), 1000);
      } else if (time.seconds === 0 && time.minutes === 0) {
        console.log("IT'S OVER!!");
      } else if (time.seconds === 0) {
        console.log(time.seconds);
        setTimeout(
          () => setTime({ minutes: time.minutes - 1, seconds: 59 }),
          1000
        );
      }
    }
  });

  return (
    <div id="timer-label">
      <h1 id="time-left">
        {time.minutes}:{time.seconds}
      </h1>
    </div>
  );
};
export default Timer;
