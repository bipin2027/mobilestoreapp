import React from 'react'
import './product.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { updateName } from '../../Actions/Actions'
import { updateProducts } from '../../Actions/Actions'
import { selectItem } from '../../Actions/Actions'
import { addItem } from '../../Actions/Actions'
import {sortItems} from '../../Actions/Actions'
import  Pagination from './Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import {
  Input,
} from "reactstrap";

const Product = props => {
  const [defaulSort, setSort] = useState('Best Match')
  const [currentPage, setCurrentPage]= useState(1);
  const [productPerPage]=useState(9);
  console.log(props);

  useEffect(() => {
    props.updateProducts()
  }, [])

  var filteredProducts = props.products.filter(product=>{
    return product.Name.toLowerCase().indexOf('') !== -1;
  })
  const indexOfLastProduct= currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;  
  const currentProducts = filteredProducts.slice(indexOfFirstProduct,indexOfLastProduct)

  //ADD TO CART FUNCTION 
  function addToCart(item) {
    const product = { Name: item.Name, description: item.description, img: item.img, price: item.price, id: item.id, units: 1 }
    props.addItem({ product })
  }

  //TAKE USER TO PDP PAGE
  function ShowDetails(item) {
    props.selectItem(item)
    props.history.push(`/productDetails/${item}`)
  }

  //FOR SORT THE PAGE
  function sortProducts(event){
    event.preventDefault();
    setSort(event.target.value)
    props.sortItems(event.target.value)
  }

  //change page
  const paginate=(pageNumber) => setCurrentPage(pageNumber);

  function searchProducts(event){
    event.preventDefault();
    
    const Test = props.products.filter(product=>{
      return product.Name.toLowerCase().indexOf(event.target.value) !== -1;
    })
    if(Test.length){
      filteredProducts=Test
    }
    console.log(Test)
  }

  return (
    <div className="container mt-2">
      <div className="row">
        <div class="hidden-xs col-md-3">
          <div class="pull-left">
            <div class="pagination-bar-results">
              <div class="total-wrapper">
                {/* <span>334
                Results
                      </span> */}
                <div className="col">
                  <Input label="Search Country" icon="search" onChange={e=>{searchProducts(e)}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-9 pagination-wrapper print-hide pull-right">
          <div className="pull-right sort-wrapper">
            <div className="form-group sort-group">
              <form >
                <label>
                  Sort By: 
                  <select value={defaulSort} onChange={e => { sortProducts(e) }}>
                    <option value="relevance" selected="selected">Best Match</option>
                    <option value="RETAIL-PRICE-ASC-C">Price Low to High</option>
                    <option value="RETAIL-PRICE-DESC-C">Price High to Low</option>
                  </select>
                </label>
              </form>
            </div>
          </div>

        </div>
      </div>



      <div class="container">
        <div class="grid">
          {currentProducts.map(item => (
            <div class="card-container">
              <h2 class="card-price"><span class="currency">₹</span>{item.price}</h2>
              <h1 class="card-title">{item.Name}</h1>

              <div class="card-image-container">
                <img src={item.img} alt="" />
              </div>
              <div className="cart-btn">
                <FontAwesomeIcon icon={faCartPlus} color="black" onClick={() => { addToCart(item) }} />
              </div>
              <div class="details-btn" >
                <p onClick={() => { ShowDetails(item) }}>click to view</p>
              </div>
            </div>
          ))}

        </div>
      </div>
          <Pagination productPerPage={productPerPage} totalProducts={filteredProducts.length} paginate={paginate}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myName: state.user.name,
    products: state.products,
    cart: state.items,
    selectedItem: state.selectedItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => { dispatch(updateName(name)) },
    addItem: (item) => { dispatch(addItem(item)) },
    updateProducts: () => { dispatch(updateProducts()) },
    selectItem: (item) => { dispatch(selectItem(item)) },
    sortItems:(sortType)=>{dispatch(sortItems(sortType))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);