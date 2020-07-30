import React from "react";
import {connect} from 'react-redux';

import CustomButton from "../custom-button/custom-button.components";
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from "reselect";

import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />)
                                )
                    :
                    <span className='empty-message'>Cart is Empty</span>
            }
        </div>
        <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);
