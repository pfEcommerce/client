import StyledDetails from "../styles/styled_details/styledDetails";
import { useParams } from "react-router-dom";
import { getDetail } from "../../Redux/actions/detailActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import StyledButton from "../styles/styled_button/styledButton";
import Requirements from "../Requirements";
import Reviews from "../Reviews"

export default function Details() {
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detailProduct);
  console.log(params.id);

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, [dispatch, params.id]);


  return (
    <>
      <StyledDetails>
        <div className="title">
          <h2>Detail</h2>
          <hr />
        </div>
        <div className="content_img_details">
          <div className="content_img">
            <img src={details.image} alt="" />
          </div>
          <div className="content_details">
            <h2>{details.name}</h2>
            {details.categories &&
              details.categories.map((category) => (
                <label htmlFor=""> {category.name} </label>
              ))}
            <h3> Rating:</h3>
            <h3> ${details.price}</h3>
            <div className="buttons">
              <StyledButton > Add to Cart </StyledButton>
              <StyledButton> Buy Now </StyledButton>
            </div>

            <hr />
            <div className="content_description">
              <p> {details.description} </p>
            </div>
          </div>
        </div>
      </StyledDetails>
      <Requirements />
      <Reviews />
    </>
  );
}
