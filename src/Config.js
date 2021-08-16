import { TiArrowUp, TiMediaPauseOutline } from "react-icons/ti";
import { TiMediaPlayOutline } from "react-icons/ti";
import { TiRefresh } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

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
    <div className="flex flex-col">
      <div
        id="break-label"
        className="flex items-center w-72 p-4 pl-6 pr-6 shadow-xl justify-between m-4 tracking-widest rounded-xl font-medium text-gray-600"
      >
        <h2 className="text-sm">BREAK LENGTH</h2>
        <div className="flex flex-row">
          <button id="break-increment" onClick={incrementTimer}>
            <TiArrowSortedUp />
          </button>
          <div id="break-length" className="ml-2 mr-2">{rest}</div>
          <button id="break-decrement" onClick={decrementTimer}>
            <TiArrowSortedDown />
          </button>
        </div>
      </div>
      <div
        id="session-label"
        className="flex items-center w-72 p-4 pl-6 pr-6 shadow-xl justify-between m-4 tracking-widest rounded-xl font-medium text-gray-600"
      >
        <h2 className="text-sm">SESSION LENGTH</h2>
        <div className="flex flex-row">
          <button id="session-increment" onClick={incrementTimer}>
            <TiArrowSortedUp />
          </button>
          <div id="work-length" className="ml-2 mr-2">{work}</div>
          <button id="session-decrement" onClick={decrementTimer}>
            <TiArrowSortedDown />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button id="start_stop" onClick={handleStartStop} className="text-4xl text-gray-600 shadow-xl m-4 p-2 rounded-xl">
          {!started ? <TiMediaPlayOutline /> : <TiMediaPauseOutline />}
        </button>
        <button id="reset" onClick={handleReset} className="text-4xl text-gray-600 shadow-xl m-4 p-2 rounded-xl">
          <TiRefresh />
        </button>
      </div>
    </div>
  );
};

export default Config;
