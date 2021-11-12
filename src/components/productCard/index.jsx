import { StyledProductCard } from "../styles/styled_productCard/styledCard";



export default function ProductCard ({p}){

    console.log(p)

    return(
        <StyledProductCard>
            <div>
                <img src={p.image} alt="" />
            </div>
        </StyledProductCard>
    )
}