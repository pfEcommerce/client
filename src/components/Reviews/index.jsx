import StyledDetails from "../styles/styled_details/styledDetails";
import { useParams } from "react-router-dom";
import { getDetail, reviewAction } from "../../Redux/actions/detailActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StyledReviews from "../styles/styled_reviews/styledReviews";
import StyledButton from "../styles/styled_button/styledButton";
import StyledRating from "../styles/styled_rating/styledRating";


export default function Reviews({handleRating,rating,setRating}) {
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.rootReducer.detailProduct);
  const email = useSelector(state => state.rootReducer.user.email)
  const [review, setReview] = useState({
    content: '', 
    revRating: 3,
    prodId: params.id
  })

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, [dispatch, params.id]);

  const handleChange = (e) => {
    e.preventDefault()
    setReview({
      ...review,
      content: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(reviewAction(review, email))
  }

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
                <p>Guest User #13456</p>
                <StyledRating onClick={handleRating} ratingValue={rating}/>
            </div>
            <div className="text">
              <form action="" onSubmit={handleSubmit}>
                <textarea name="" id="" cols="30" rows="10" placeholder="Write here..." onChange={handleChange}></textarea>
                <input type="submit" value='Send'/>
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
            <div className="text_1">
                <p>non-existent reviews</p>
            </div>
          </div>
        </div>
      </StyledReviews>
    </>
  );
}
