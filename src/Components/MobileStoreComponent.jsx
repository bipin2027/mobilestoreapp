import React from 'react'
import ErrorComponent from './ErrorComponent'
import ProductList from './Product/ProductListComponent'
import Header from './Header/HeaderComponent'
import Footer from './Footer/FooterComponent'
import Login from  './Login/LoginComponent'
import Logout from './Logout/LogoutComponet'
import ProductDetail from './Product/ProductDetailComponet'
import cartComponent from './Cart/cartComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function MobileComponent() {
    return (
        <div className="MobileComponent">
            <Router>
                <>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={ProductList} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/logout" exact component={Logout} />
                        {/* <AuthenticatedRoute path="/logout" exact component={Logout} /> */}
                        {/* <Route path="/welcome/:name" exact component={Welcome} />
                        <Route path="/todos" exact component={ListTodoComponent} /> */}
                        <Route path="/logout" exact component={Logout} />
                        <Route path="/cart" exact component={cartComponent} />
                        <Route path="/productDetails/:product" exact component={ProductDetail} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <Footer />
                </>
            </Router>
        </div>
    )
}

export default MobileComponent