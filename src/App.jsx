import "./App.css";
import Description from "./components/Description";
import { useState, useEffect } from "react";
import Options from "./components/Options";
import Feedback from "./components/Feedback";

function App() {
  const [counter, setCounter] = useState(() => {
    const saveCounter = window.localStorage.getItem("key");

    if (saveCounter) {
      return JSON.parse(saveCounter);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(counter));
  }, [counter]);

  const updateFeedback = (feedbackType) => {
    setCounter((prev) => {
      return {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
      };
    });
  };

  const resetFeedback = () => {
    setCounter((prev) => {
      return {
        ...prev,
        good: 0,
        neutral: 0,
        bad: 0,
      };
    });
  };

  const totalFeedback = counter.good + counter.neutral + counter.bad;
  const positiveFeedback = Math.round(
    ((counter.good + counter.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedbackOptions={totalFeedback}
        resetFeedbackOptions={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={counter.good}
          neutral={counter.neutral}
          bad={counter.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}

export default App;
