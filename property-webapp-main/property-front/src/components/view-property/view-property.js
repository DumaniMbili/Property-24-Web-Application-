import React from 'react';
import Header from "../header/header"
import MyCarousel from "../carousel/carousel"

const ViewProperty = () => {
    return ( 
        <div className="">
            <Header></Header>

            <div className="p-3 bg-light text-dark">
                <div >
                    <a href="!#" className="text-underline text-muted ml-3 mr-5" > &#60;&#60; Back to results</a>
                    <button className="btn btn-sm btn-primary">Book Viewing</button>
                </div>

                <div className="card bg-light border-dark mt-2">
                    <div className="card-header bg-light w-100">
                        <div className="row px-5">
                            <div className="col-lg-4 ">
                                <h3 className="font-weight-bold text-primary">R1 650 000</h3>
                                <h3>The Connifers</h3>
                            </div>
                            <div className="col-lg-4 d-flex  justify-content-center">
                                <h3 className="font-weight-bold">6 Bedroom house</h3>
                                
                            </div>
                            <div className="col-lg-4 d-flex  justify-content-end">
                                <p className="text-muted my-auto">size: 73m&sup2;</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-8">
                                <MyCarousel></MyCarousel>
                                <div>
                                    <h4>Description</h4>
                                    <p>
                                    A beautiful 6 Bedroom House situated in the beautiful suburb of Uvongo in the south cooast of KwaZulu-natal. 
                        A safe and secure suburb that is very close to many schools. 
                        This house being in Uvongo is also situated very near to the beach making it the perfect home for the whole family
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center ">
                                <div className="top border-bottom">
                                    <div className="bg-secondary py-2 border-radius">
                                        <h4 className="font-weight-bold text-white">Agency</h4>
                                    </div>
                                    <div>
                                        <h5 className="font-weight-bold my-3">Cookson</h5>
                                    </div>    
                                </div>

                                <div className="bottom my-3">
                                    <div className="bg-secondary py-2 border-radius">
                                        <h4 className="font-weight-bold text-white">Get in touch with us!</h4>
                                        <form className="px-2 text-left">
                                            <div class="form-group">
                                                <label className="ml-2" htmlFor="name" >Name</label>
                                                <input type="text" className="form-control" id="name"  placeHolder="Full Name" />
                                            </div>
                                            <div className="form-group">
                                                <label className="ml-2" htmlFor="email" >E-mail</label>
                                                <input type="text" className="form-control" id="email" placeHolder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <label className="ml-2" htmlFor="cell" >Mobile Number</label>
                                                <input type="text" className="form-control" id="cell" placeHolder="Mobile Number" />
                                            </div>
                                            <div className="form-group">
                                                <label className="ml-2" htmlFor="mesasge" >Message</label>
                                                <textarea type="text" className="form-control" id="message" placeHolder="Message"> </textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" className="form-control btn btn-dark" id="submit" value="Send Message" />
                                            </div>


                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default ViewProperty;