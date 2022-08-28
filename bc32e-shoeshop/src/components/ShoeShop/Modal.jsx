import React, { Component } from 'react'
export default class Modal extends Component {
    state = {
        show: this.props.isShow
    }
    render() {
        const { content, isShow } = this.props;
        console.log(content, isShow)
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>
                {
                    isShow && (
                        <div>
                            <div className="modal fade show" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Product Details</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row main-content" style={{
                                                justifyContent: 'space-evenly'
                                            }}>
                                                <div className='col-4 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'seashell' }}>
                                                    <img src={content.image} alt='...' style={{ width: '200px',position:'relative' }} className='rounded' />
                                                    <div className="d-flex" style={{justifyContent:'space-evenly',position:'absolute', bottom:'1rem',right:'1rem',width:'30%'}}>
                                                        <a href='https://mdbootstrap.com/docs/b4/jquery/modals/additional/'><i id='social-save' class="fa fa-bookmark" aria-hidden="true" style={{cursor:'pointer'}}></i></a>
                                                        <a href='https://mdbootstrap.com/docs/b4/jquery/modals/additional/'><i id='social-love' className="fa fa-heart text-red " aria-hidden="true" style={{cursor:'pointer'}}></i></a>
                                                        <a href='https://mdbootstrap.com/docs/b4/jquery/modals/additional/'><i id='social-share' class="fa fa-share" aria-hidden="true" style={{cursor:'pointer'}}></i></a>
                                                    </div>
                                                </div>
                                                <div className="col-7 content-text p-4 px-5 align-item-stretch rounded" style={{ backgroundColor: '#efefef' }}>
                                                    <div className="text-center">
                                                        <h3 className='mb-3 line text-uppercase'>{content.name}</h3>
                                                        <p>{content.price}$</p>
                                                        <p>{content.description}</p>
                                                        <p>{content.shortDescription}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>

        )
    }
}
