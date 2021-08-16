import { useEffect, useState } from "react";
import Config from "./Config";
import Timer from "./Timer";
import Heartbeat from "./Heartbeat";
import "./App.css";

function App() {
  // console.clear();
  const [rest, setRest] = useState(5);
  const [work, setWork] = useState(25);
  const [sessionType, setSessionType] = useState("work");
  const [timer, setTimer] = useState(work * 60);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setTimer(work * 60);
  }, [work]);

  // for incrementing and decrementing timer
  const incrementTimer = (e) => {
    if (started) return;
    if (e.currentTarget.id === "session-increment") {
      if (work >= 60) return
      setWork((work) => work + 1);
    } else if (e.currentTarget.id === "break-increment") {
      if (rest >= 60) return
      setRest((rest) => rest + 1);
    }
  };

  const decrementTimer = (e) => {
    if (started) return;
    if (e.currentTarget.id === "session-decrement") {
      if (work <= 1) return
      setWork((work) => work - 1);
    } else if (e.currentTarget.id === "break-decrement") {
      if (rest <= 1) return
      setRest((rest) => rest - 1);
    }
  };

  // buttton control
  const handleStartStop = () => {
    setStarted(!started);
  };

  const handleReset = () => {
    setWork(25);
    setRest(5);
    setStarted(false);
    setTimer(work * 60);
  };

  const countdown = () => {
    setTimer((timer) => timer - 1);
    if (timer === 0) {
      if (sessionType === "work") {
        setSessionType("rest");
        setTimer(rest * 60);
      } else {
        setSessionType("work");
        setTimer(work * 60);
      }
    }
  };

  const timerHeartbeat = !started ? null : (
    <Heartbeat heartbeatFunction={countdown} />
  );

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      {timerHeartbeat}
      <Timer timer={timer} />
      <Config
        rest={rest}
        work={work}
        incrementTimer={incrementTimer}
        decrementTimer={decrementTimer}
        handleStartStop={handleStartStop}
        started={started}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;
