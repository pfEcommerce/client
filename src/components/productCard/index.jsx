import { StyledProductCard } from "../styles/styled_productCard/styledCard";
import StyledButton from '../styles/styled_button/styledButton.js'
import { toast , Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaUser as UserIcon, FaShoppingCart as CartIcon } from 'react-icons/fa';

toast.configure()

export default function ProductCard({ p }) {

    const notify = () => {
        console.log('asd')
        toast.success('Agregado al carrito!', {
            position: "top-right",
            transition: Slide,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme:'dark',
            progress: undefined,
        });
    }

    return (
        <StyledProductCard>
            <div>
                <img src={p.image} alt="" />
            </div>
            <div>
                <div>
                    <h4>{p.name}</h4>
                </div>
                <div className="price">
                    <h4>${p.price}</h4>
                </div>
                <div>
                    <StyledButton onClick={() => notify()}>Agregar al carrito  <CartIcon /></StyledButton>
                </div>
            </div>

        </StyledProductCard>
    )
}