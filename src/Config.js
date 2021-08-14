import { TiMediaPauseOutline } from "react-icons/ti";
import { TiMediaPlayOutline } from "react-icons/ti";
import { TiRefresh } from "react-icons/ti";

const Config = ({
  rest,
  work,
  incrementRest,
  incrementWork,
  decrementRest,
  decrementWork,
  handleStart,
  started,
  handleReset
}) => {
  return (
    <div>
      <div id="break-label">
        <button id="break-increment" onClick={incrementRest}>
          ^
        </button>
        <div id="break-length">Rest {rest}</div>
        <button id="break-decrement" onClick={decrementRest}>
          v
        </button>
      </div>
      <div id="session-label">
        <button id="session-increment" onClick={incrementWork}>
          ^
        </button>
        <div id="work-length">Work {work}</div>
        <button id="session-decrement" onClick={decrementWork}>
          v
        </button>
      </div>
      <div>
        <button id="start_stop" onClick={handleStart}>
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
