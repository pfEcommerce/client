/* import React from 'react';
import { useSelector } from 'react-redux';
import { paying } from '../../Redux/actions/utilityActions';
export default function Payment(){
    
    const gamesPrice = useSelector(state => state.rootReducer.games.price)
    console.log(gamesPrice)
    const handleClick = () => {
        paying(gamesPrice)
    }
    return(
        <>
            <button onClick={() => handleClick()}>Checkout</button>
        </>
    )
} */
import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './Form';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Jz6qgJHBteWHI6WwGYkzSS53e3waaXWKydcszxqAvUDzjaQFVonHF4EbPwkonyva5o8YZVlheZLtWF2QXqj9NIc00sNviDTwb');

function Checkout() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51Jz6qgJHBteWHI6WC9CLRjcvKoppQ07ydww3aWsizNczhW8C8dgDHuERgKV62qpDg5JtNP9sqymiIBpyT6jyDcX700u4DJ6LoI',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm/>
    </Elements>
  );
};

export default Checkout