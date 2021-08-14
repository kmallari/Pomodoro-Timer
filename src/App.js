import { useState } from "react";
import Config from "./Config";
import Timer from "./Timer";
import "./App.css";

function App() {
  const [rest, setRest] = useState(5);
  const [work, setWork] = useState(25);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState({ minutes: work, seconds: 0 });

  // for incrementing/decremting the rest/work timer
  const incrementRest = () => {
    if (rest < 60 && !started) {
      setRest((rest) => rest + 1);
      setTime({...time, seconds: 0})
    }
  };
  const incrementWork = () => {
    if (work < 60 && !started) {
      setWork((work) => work + 1);
      setTime({...time, seconds: 0})
    }
  };
  const decrementRest = () => {
    if (rest > 0 && !started) {
      setRest((rest) => rest - 1);
      setTime({...time, seconds: 0})
    }
  };
  const decrementWork = () => {
    if (work > 0 && !started) {
      setWork((work) => work - 1);
      setTime({...time, seconds: 0})
    }
  };

  // buttton control
  const handleStart = () => {
    setStarted(!started);
  };

  const handleReset = () => {
    setStarted(false);
    setTime({minutes: 25, seconds: 0})
    setRest(5);
    setWork(25);
  }

  var timer = accurateInterval(function() {
    console.log("MESSAGE EVERY SECOND")
  }, 1000)

  return (
    <div>
      <Config
        rest={rest}
        work={work}
        incrementRest={incrementRest}
        incrementWork={incrementWork}
        decrementRest={decrementRest}
        decrementWork={decrementWork}
        handleStart={handleStart}
        started={started}
        handleReset={handleReset}
      />
      <Timer work={work} rest={rest} started={started} time={time} setTime={setTime} />
    </div>
  );
}

export default App;
