import { useEffect } from "react";
import { StyledRatingView } from "../styles/styled_rating/styledRating";
import StyledAllReview from "../styles/styled_reviewCard/styledReviewCard";

export default function Review({ name, rating, content }) {

  useEffect(() => {
    console.log(name)
  },[name])

  return (
    <StyledAllReview>
      <hr />
      <div>
        <p>{name}</p>
        <StyledRatingView ratingValue={rating} />
      </div>
      <p> {content}</p>
      <hr />
    </StyledAllReview>
  );
}
