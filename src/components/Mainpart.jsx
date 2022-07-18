import React from 'react';
import './Mainpart.css';

function Mainpart() {
    return (
        <div className="container Main">
            <div className="row">

                <div className="col-lg-5 pt-5">
                    <div className="title w-100">
                        <h1 className='heading-1 text-left'>Find the perfect place to stay with your family</h1>
                    </div>
                    <div className="subTitle w-auto">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error
                            pariatur illum saepe, dolores, voluptates tempora nostrum esse et modi, eveniet obcaecati! Adipisci harum, dicta autem quae culpa inventore.
                        </span>
                    </div>

                    <div className="account">
                        <span>Create tour account here</span>
                        <button className="btnM shadow">+</button>
                    </div>
                </div>

                <div className="col-lg-1"></div>

                {/* Main-image */}
                <div className="col-md-6 main-img"></div>
            </div>
        </div>
    )
}

export default Mainpart