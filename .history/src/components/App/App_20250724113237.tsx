import { useState } from "react";
import css from "./App.module.css"; // ✅ стили
import CafeInfo from "../CafeInfo/CafeInfo";
import type { Votes, VoteType } from "../../types/votes";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css.app}>
      <CafeInfo />

      <div className={css.buttons}>
        <button className={css.button} onClick={() => handleVote("good")}>
          👍 Good
        </button>
        <button className={css.button} onClick={() => handleVote("neutral")}>
          😐 Neutral
        </button>
        <button className={css.button} onClick={() => handleVote("bad")}>
          👎 Bad
        </button>
        <button className={css.button} onClick={resetVotes}>
          🔁 Reset
        </button>
      </div>

      <pre className={css.result}>{JSON.stringify(votes, null, 2)}</pre>
    </div>
  );
}
