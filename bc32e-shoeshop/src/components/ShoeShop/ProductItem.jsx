import React, { Component } from 'react'
import './style.css'
// import { fab } from '@fortawesome/free-brands-svg-icons'

export default class
  ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;
    return (
      <div className='card'>
        <img src={item.image} alt="..." style={{ cursor: 'pointer' }} />
        <div className="card-body">
          <p className='text-left'>{item.name}</p>
          <p className='text-left'>{item.price}$</p>
        </div>
        <div className='w-100 d-flex align-items-center mb-3' style={{
          justifyContent: 'space-evenly'
        }} >
          <button className='btn btn-dark' style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <span>Add to Cart</span>
            <i className="fa-solid fa-cart-arrow-down" aria-hidden="true"></i>
          </button>
          <button className='btn btn-success' data-toggle="modal" data-target="#exampleModal"  onClick={
            () => { setStateModal(item)
                   console.log(item)                  
                  }
          }>Xem chi tiết</button>
        </div>
      </div>
    )

  }
}
