import React, { useState } from "react";
import styles from "./Rating.module.scss";
import classNames from "classnames";
type RatingPropsType = {
  size: "sm" | "md" | "lg";
};
const Rating = ({ size="lg"}: RatingPropsType) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return ([...Array(5)].map((star, index) => {
    const currentRating = index + 1;

    return (
      <label key={index}>
        <input
          type="radio"
          className={styles.radio}
          name="rating"
          value={currentRating}
          onChange={() => setRating(currentRating)}
        />
        <span
          className={classNames(styles[size],styles.star)}
          style={{
            color: currentRating <= (hover! || rating!) ? "#ffc107" : "#e4e5e9",
          }}
          onMouseEnter={() => setHover(currentRating)}
          onMouseLeave={() => setHover(null)}
        >
          &#9733;
        </span>
      </label>
    );
  }))
};

export default Rating;
