import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selector";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {CheckOutPageContainer, CheckOutHeaderDiv, CheckOutHeaderBlock, TotalContainer, TestWarningContainer} from './checkout.style';

const CheckoutPage = ({cartItems, total})=>(
    <CheckOutPageContainer>
        <CheckOutHeaderDiv>
            <CheckOutHeaderBlock>
                <span>Product</span>
            </CheckOutHeaderBlock>
            <CheckOutHeaderBlock>
                <span>Description</span>
            </CheckOutHeaderBlock>
            <CheckOutHeaderBlock>
                <span>Quantity</span>
            </CheckOutHeaderBlock>
            <CheckOutHeaderBlock>
                <span>Price</span>
            </CheckOutHeaderBlock>
            <CheckOutHeaderBlock>
                <span>Remove</span>
            </CheckOutHeaderBlock>
        </CheckOutHeaderDiv>
        {
            cartItems.map(cartItem=> (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <TotalContainer>
            <span>TOTAL:{total}$</span>
        </TotalContainer>
        <TestWarningContainer>
            *Please use the test credit car for payment.
            4242 4242 4242 4242 - Exp: 01/21 CV:123
        </TestWarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckOutPageContainer>

)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
