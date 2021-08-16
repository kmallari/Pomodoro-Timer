const Timer = ({ timer }) => {
  return (
    <div id="timer-label" className="flex">
      <h1 id="time-left" className="text-9xl font-bold text-gray-700">
        {Math.floor(timer / 60)}:{ !(timer % 60 < 10) ? timer % 60 : `0${timer % 60}` }
      </h1>
    </div>
  );
};
export default Timer;
