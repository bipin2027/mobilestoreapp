import React from 'react'
import { connect } from 'react-redux'
import {selectItem} from '../../Actions/Actions'
import {addItem} from '../../Actions/Actions'

const productDetails = props => {

    function createMarkup(item) {
        return {__html: item.description};
    }
    
    function addProductToCart(item){
        const product={Name:item.Name, description:item.description, img:item.img, price:item.price,id:item.id, units:1 }
        props.addItem({product})
    }
    return (
        <div class="wrapper">            
            <div class="col-1-2">
                <div class="product-wrap">
                    <div class="product-shot">
                        <img className="pdp-img" src={props.selectedItem.img} alt="" />
                    </div>
                </div>
            </div>
            <div class="col-1-2">
                <div class="product-info">
                <h2>{props.selectedItem.Name}</h2>
                    <div class="desc" dangerouslySetInnerHTML={createMarkup(props.selectedItem)}/>                    
                    <button class="button" onClick={()=>{addProductToCart(props.selectedItem)}}>Add to Cart</button>                   
                </div>
            </div>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        selectedItem: state.selectedItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem:(item)=>{dispatch(addItem(item))},
        selectItem:(item)=>{dispatch(selectItem(item))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(productDetails);