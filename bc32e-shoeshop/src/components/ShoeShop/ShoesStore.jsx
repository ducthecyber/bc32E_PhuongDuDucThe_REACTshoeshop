import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'

export default class ShoesStore extends Component {
  state = {
    show: false,
    productDetail: {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }
  }

  setStateModal = (shoe) => {
    this.setState({
      show: true,
      productDetail: shoe
    })
  }
  
  render() {
    console.log(this.state.show)    
    return (
      <div className='container'>
        <ProductList show={this.state.show} setStateModal={this.setStateModal} />
        <Modal isShow={this.state.show} content={this.state.productDetail} />
      </div>
    )
  }
}
