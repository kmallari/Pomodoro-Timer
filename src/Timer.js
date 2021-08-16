const Timer = ({ timer }) => {
  return (
    <div id="timer-label">
      <h1 id="time-left">
        {Math.floor(timer / 60)}: { !(timer % 60 < 10) ? timer % 60 : `0${timer % 60}` }
      </h1>
    </div>
  );
};
export default Timer;
