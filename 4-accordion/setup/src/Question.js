import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [isTog, setIsTog] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {isTog ? (
          <AiOutlineMinus className="btn" onClick={() => setIsTog(!isTog)} />
        ) : (
          <AiOutlinePlus className="btn" onClick={() => setIsTog(!isTog)} />
        )}
      </header>
      {isTog && <p>{info}</p>}
    </article>
  );
};

export default Question;
