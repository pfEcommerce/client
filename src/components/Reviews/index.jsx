import StyledDetails from "../styles/styled_details/styledDetails";
import { useParams } from "react-router-dom";
import { getDetail, reviewAction } from "../../Redux/actions/detailActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StyledReviews from "../styles/styled_reviews/styledReviews";
import StyledButton from "../styles/styled_button/styledButton";
import { StyledRating } from "../styles/styled_rating/styledRating.js";
import Review from "../Review";
import { getRatings } from "../../Redux/actions/opinionsActions";

export default function Reviews({ handleRating, rating, setRating,params}) {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.rootReducer.detailProduct);
  const user = useSelector((state) => state.rootReducer.user);
  const [valueText, setValueText] = useState("");
  const [review, setReview] = useState({
    content: "",
    revRating: 1,
    prodId: params.id,
    name: "",
  });

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, [dispatch, params.id, rating]);

  useEffect(() => {
    console.log(review);
    console.log(rating);
  }, [dispatch, review, rating]);

  const handleChange = (e) => {
    e.preventDefault();
    setValueText(e.target.value);
    setReview({
      ...review,
      content: e.target.value,
      name: user.firstName,
      revRating: rating,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const exist = details.opinions.find((o) => o.userEmail === user.email);
    if (user.email) {
      if (!exist) {
        dispatch(reviewAction(review, user.email));
        dispatch(getRatings(rating))
        setValueText("");
        setRating(1);
      } else {
        alert("ya existe una review");
      }
    } else {
      alert("Please Log In")
    }
  };

  return (
    <>
      <StyledReviews>
        <div className="content">
          <div className="title">
            <h2>Add review</h2>
            <hr />
          </div>
          <div className="information">
            <div className="user">
              {user.firstName ? <p> {user.firstName} </p> : <p>Guest User</p>}
              <StyledRating onClick={handleRating} ratingValue={rating} />
            </div>
            <div className="text">
              <form action="" onSubmit={handleSubmit}>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write here..."
                  onChange={handleChange}
                  value={valueText}
                ></textarea>
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="title">
            <h2>Reviews</h2>
            <hr />
          </div>
          <div className="information">
            <div className="user"></div>
            {details.opinions ? (
              details.opinions.map((rev) => (
                <Review
                  name={rev.name}
                  rating={rev.revRating}
                  content={rev.content}
                />
              ))
            ) : (
              <p> non-existent reviews </p>
            )}
          </div>
        </div>
      </StyledReviews>
    </>
  );
}
