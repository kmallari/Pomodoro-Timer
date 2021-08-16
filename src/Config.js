import { TiMediaPauseOutline } from "react-icons/ti";
import { TiMediaPlayOutline } from "react-icons/ti";
import { TiRefresh } from "react-icons/ti";

const Config = ({
  rest,
  work,
  incrementTimer,
  decrementTimer,
  handleStartStop,
  started,
  handleReset,
}) => {
  return (
    <div>
      <div id="break-label">
        <button id="break-increment" label="rest" onClick={incrementTimer}>
          ^
        </button>
        <div id="break-length">Rest {rest}</div>
        <button id="break-decrement" label="rest" onClick={decrementTimer}>
          v
        </button>
      </div>
      <div id="session-label">
        <button id="session-increment" onClick={incrementTimer}>
          ^
        </button>
        <div id="work-length">Work {work}</div>
        <button id="session-decrement" onClick={decrementTimer}>
          v
        </button>
      </div>
      <div>
        <button id="start_stop" onClick={handleStartStop}>
          {/* insert conditional statement here for pause and play */}
          {!started ? <TiMediaPlayOutline /> : <TiMediaPauseOutline />}
        </button>
        <button id="reset" onClick={handleReset}>
          <TiRefresh />
        </button>
      </div>
    </div>
  );
};

export default Config;
