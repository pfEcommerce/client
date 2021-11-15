import { useSelector } from "react-redux";
import { StyledUserPanel } from "../styles/styled_userPanel/styledUserPanel";
import StyledButton from "../styles/styled_button/styledButton";
import StyledOption from "../styles/styled_ProfileOptions/styledOption";
import { Link } from "react-router-dom";

export default function UserPanel() {

    const user = useSelector((state) => state.user);
    const prodUser = {
        productos: user.orders.map(e => (
            {
                id: e.id,
                price: e.price,
                productImage: e.product.image,
                productName: e.product.name,
                date: e.createdAt
            }
        ))
    };

    return (

        <StyledUserPanel>
            <div className="container">
                <div className="buttons">
                    <StyledButton>Editar usuario</StyledButton>
                    <StyledButton>Historial de compra</StyledButton>
                    <StyledButton>Ayuda</StyledButton>
                </div>
                <div className="container-option">

                    {prodUser.productos.map(e =>
                        <StyledOption>
                            <Link to={`/detail/${e.id}`} style={{textDecoration:'none'}}>
                                <div className="titleInfo">
                                    <h4 style={{ color: '#fff' }}>{e.productName}</h4>
                                    <div className="gameIMG">
                                        <img src={e.productImage} alt="gameImage" />
                                    </div>
                                </div>
                            </Link>


                            <div className="orderInfo">
                                <div>
                                    <h5>Order ID</h5>
                                </div>
                                <div>
                                    <h6>{e.id}</h6>
                                </div>
                            </div >

                            <div className="orderInfo">
                                <h4>Fecha de compra</h4>
                                <h4>{e.date.slice(0, -14).split('-').reverse().join('/')}</h4>
                            </div>

                            <div className="orderInfo">
                                <h4>Precio</h4>
                                <h4>${e.price}</h4>
                            </div>



                        </StyledOption>
                    )}

                </div>
            </div>
        </StyledUserPanel>
    )
};