import React, { Component } from 'react'
import ProductItem from './ProductItem'
import data from './data.json'

export default class ProductList extends Component {

  render() {
    const show = this.props.show
    console.log(show)
    return (
      <div className='container'>
        <h2 className='text-center'>Shoe Shop</h2>
        <div className="row align-items-center justify-content-center">
          {
            data.map((product) => {
              return (
                <div className="col-4 mb-2" key={product.id}>
                  <ProductItem item={product} setStateModal = {this.props.setStateModal}/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
