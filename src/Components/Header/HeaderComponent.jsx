import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import AuthService from '../Service/AuthenticationService'
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

// To ensure that header menus are updated whenever the router is called we need to wrap HeaderComponent with a call to withRouter.

const Header = props => {
    const isUserLoggedIn = AuthService.isUserLoggedIn();
    function logout() {
        AuthService.logout();
    }
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link className="navbar-brand" to="/">Home</Link>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>}
                    {isUserLoggedIn && <li className="nav-item">
                        <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>
                    </li>}
                    <li>
                        <div className=".mini-cart-link">
                            <div>
                                <Link className="nav-link" to="/cart" >
                                    <div class="mini-cart-icon"><i class="inherit-line-height"><FontAwesomeIcon icon={faShoppingCart} color="white" /></i></div>
                                    <div class="mini-cart-count js-mini-cart-count"><span class="nav-items-total" >{props.cart.cartTotalItems}</span></div>
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.items
    }
}

export default connect(mapStateToProps)(withRouter(Header));