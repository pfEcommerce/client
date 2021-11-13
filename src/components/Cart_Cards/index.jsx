import StyledCartCard from "../styles/styled_cartCard/styledCartCard";

export default function CartCards({ name, price,id,filterGamesCart }) {
  return (
    <StyledCartCard>
      <div className="Close">
        <button onClick={filterGamesCart} id= {id}> x </button>
      </div>
      <h3>{name}</h3>
      <div className = "details">
        <p>${price}</p>
        <div >
            <p>1</p>
            <button> + </button>
            <button> - </button>
        </div>
      </div>
    </StyledCartCard>
  );
}
