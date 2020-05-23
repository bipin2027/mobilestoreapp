import React from 'react'
import './cartpage.css';
import { connect } from 'react-redux'
import { updateName } from '../../Actions/Actions'
import { addItem } from '../../Actions/Actions'
import {removeSingleItem} from '../../Actions/Actions'
import {removeItem} from '../../Actions/Actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'


const cartComponent = props => {

  function createMarkup(item) {
    return { __html: item.description };
  }

  function removeItem(product){
    props.removeItem({product})
  }
  function removeSingleItem(item){
    const product={Name:item.Name, description:item.description, img:item.img, price:item.price,id:item.id, units:1 }
    props.removeSingleItem({product})
  }
  function addSingleItem(item){
    const product={Name:item.Name, description:item.description, img:item.img, price:item.price,id:item.id, units:1 }
    props.addItem({product})
  }


  return (
    <div>
      <h1>Shopping Cart</h1>

      <div class="shopping-cart">

        <div class="column-labels">
          <label class="product-image">Image</label>
          <label class="product-details">Product</label>
          <label class="product-price">Price</label>
          <label class="product-quantity">Quantity</label>
          <label class="product-removal">Remove</label>
          <label class="product-line-price">Total</label>
        </div>
        {props.cart.items.map(product => (
          <>
            <div class="product">
              <div class="product-image">
                <img src={product.img} />
              </div>
              <div class="product-details">
                <div class="product-title">{product.Name}</div>
                <p class="product-description" dangerouslySetInnerHTML={createMarkup(product)}></p>
              </div>
              <div class="product-price">{product.price}</div>
              <div class="product-quantity">
              <FontAwesomeIcon icon={faMinus} color="#00BCD4" onClick={()=>{removeSingleItem(product)}} /><input className="cartInputTag" type="text" value={product.units} min="1" /><FontAwesomeIcon icon={faPlus} color="#00BCD4" onClick={()=>{addSingleItem(product)}} />
              </div>
              <div class="product-removal">
                <button class="remove-product" onClick={()=>{removeItem(product)}}>
                  Remove
                    </button>
              </div>
              <div class="product-line-price">{product.units * product.price}</div>
            </div>
          </>
        ))}




        <div class="totals">
          <div class="totals-item totals-item-total">
            <label>Grand Total</label>
            <div class="totals-value" id="cart-total">{props.cart.cartTotal}</div>
          </div>
        </div>

        <button class="checkout">Checkout</button>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myName: state.user.name,
    cart: state.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => { dispatch(updateName(name)) },
    addItem: (item) => { dispatch(addItem(item)) },
    removeSingleItem: (item) => { dispatch(removeSingleItem(item)) },
    removeItem:(item) => { dispatch(removeItem(item)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(cartComponent);


