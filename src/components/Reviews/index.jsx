import StyledDetails from "../styles/styled_details/styledDetails";
import { useParams } from "react-router-dom";
import { getDetail } from "../../Redux/actions/detailActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import StyledReviews from "../styles/styled_reviews/styledReviews";
import StyledButton from "../styles/styled_button/styledButton";

export default function Reviews() {
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detailProduct);

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, [dispatch, params.id]);

  console.log(details);

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
                <p>Rating: </p>
            </div>
            <div className="text">
              <textarea name="" id="" cols="30" rows="10" placeholder="Write here..."></textarea>
              <button> Send </button>
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
