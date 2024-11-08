import css from "./Options.module.css";

const Options = ({
  updateFeedback,
  totalFeedbackOptions,
  resetFeedbackOptions,
}) => {
  return (
    <div className={css.divBtn}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedbackOptions > 0 && (
        <button onClick={resetFeedbackOptions}>Reset</button>
      )}
    </div>
  );
};

export default Options;
