import React, { Component } from 'react'

import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'

import "./OrderTracking.css";

class OrderTracking extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div class="container-fluid container-custom">
                    <div className="row">
                        <div className="co-header">
                            <div className="co-header-menu">Order Tracking</div>
                            <div className="co-header-title-container">
                                <div className="co-header-title">Order Tracking</div>
                                <div className="co-header-info">Buy everything in your cart now!</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}
export default OrderTracking