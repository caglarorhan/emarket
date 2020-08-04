import React from "react";
import StripeCheckout from "react-stripe-checkout";



const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HBtHKBE2crNxvbsUeO80xeQZd6TquBeofWBFmIDZchjcJkC1GgXWP2bIStwhnFlcTLk9A3d8edZ8bBCIrlNPjP800jX6zBxhm';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='EMarket'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        descriptin={`Yout total us $${price}`}
        amount={priceForStripe}
        panelLabel = 'Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
