import { StarFilled } from "@ant-design/icons";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";


const StarRating =  () => {
  const [ count, setCount ] = useState(3);
  
  const ratingChanged = (newRating) => {
    setCount(newRating);
  };

  return (
    <ReactStars
      count={count}
      onChange={ratingChanged}
      size={24}
      isHalf={true}
      emptyIcon={<StarFilled />}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
}

export default StarRating;;