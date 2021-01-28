import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const numberOfPeeps = people.length - 1;
  const nextIndex = () => {
    if (index >= numberOfPeeps) {
      return setIndex(0);
    } else {
      return setIndex(index + 1);
    }
  };
  const prevIndex = () => {
    if (index <= 0) {
      return setIndex(numberOfPeeps);
    } else {
      return setIndex(index - 1);
    }
  };
  const surpriseMe = () => {
    const randomPerson = Math.floor(Math.random() * (4 - 1)) + 1;
    setIndex(randomPerson);
    console.log(randomPerson);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="qote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevIndex}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextIndex}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={surpriseMe}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
