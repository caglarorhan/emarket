import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {auth} from '../../firebase/firebase.utils';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from "./header.style";


const Header = ({currentUser, hidden})=>(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/' >HOME</OptionLink>
            <OptionLink to='/shop' >SHOP</OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin' >SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :<CartDropdown />
        }

    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})



export default connect(mapStateToProps)(Header);
