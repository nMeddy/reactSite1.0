import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            {/* header navBar */}
            <nav className="navbar navbar navbar-light">
                <div className="container">
                    <div className="logo">
                        <Link
                            to="/"
                            className='navbar-brand'
                        >
                            <span className="logo">
                                TrvL <i class="fa-solid fa-paper-plane"></i>
                            </span>
                        </Link>
                    </div>

                    <div className="navMenu mt-3">
                        <ul className="unstyled link-group">
                            <li className="link active"><Link
                                to='/'>Home</Link></li>
                            <li className="link"><Link
                                to='/'>Services</Link></li>
                            <li className="link"><Link
                                to='/'>About</Link></li>
                            <li className="link"><Link
                                to='/'>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="contactPart">

                        <span
                            className="iconClr"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                        >
                            <i class="fa-solid fa-circle-user"></i>
                        </span>


                        {/* Modal */}
                        <div
                            className="modal fade shadow"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabindex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="staticBackdropLabel"
                                        >
                                            This is your space-profil
                                        </h5>
                                        <button
                                            className="btn-close"
                                            type="button"
                                            data-bs-dismiss='modal'
                                            aria-label='close'
                                        ></button>
                                    </div>

                                    <div className="modal-body">
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia, modi
                                            voluptates nesciunt maxime cum omnis impedit voluptatem quas nostrum voluptatibus necessitatibus
                                            aliquam eligendi totam expedita nihil sequi alias fuga illum iusto excepturi dolores! Ipsa ipsam, a incidunt
                                            non recusandae aperiam minima magni numquam blanditiis aut sed ipsum sunt
                                            pariatur mollitia asperiores explicabo itaque nihil quis.
                                        </span>
                                    </div>

                                    <div className="modal-footer">
                                        <button
                                            className="btn shadow w-25"
                                            type='button'
                                            data-bs-dismiss='modal'
                                        >Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;