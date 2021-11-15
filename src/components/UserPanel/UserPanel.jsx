import { useSelector } from "react-redux";
import { useState } from 'react';


export default function UserPanel () {
    const user = useSelector((state) => state.user);

    const [prodUser, setProdUser] = useState({
        productos: user.orders.map(e=> (
            {
                id: e.id,
                price: e.price,
                productImage: e.product.image,
                productName: e.product.name
            }
        ))
    });

    console.log(prodUser)

    return (
        <div style={{justifyContent:'center', justifyItems:'center',textAlign:'center'}}>
            {prodUser.productos.map(e=>
                <div>
                    <h3 style={{color:'#fff'}}>Product Name</h3>
                    <h4 style={{color:'#fff'}}>{e.productName}</h4>
                    <h5 style={{color:'#fff'}}>Order ID</h5>
                    <h6 style={{color:'#fff'}}>{e.id}</h6>
                    <img src={e.productImage} style={{width:'200px'}}/>
                </div>
            )}
        </div>
    )
};