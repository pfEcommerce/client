import { PaymentElement } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { paying } from '../../Redux/actions/utilityActions';

const CheckoutForm = () => {
    const games = useSelector(state => state.rootReducer.orders);
    const dispatch = useDispatch()
    const prices = games.map(e => e.price)  
    let acc = prices.reduce((a,b) => a + b, 0);
    console.log(acc)

    const handleClick= async() => {
        await dispatch(paying(acc))
        console.log('hola')
    }
    return(
        <form>
        <PaymentElement />
        <button onClick={() => handleClick()}>Checkout</button>
        </form>
    );
  
};

export default CheckoutForm