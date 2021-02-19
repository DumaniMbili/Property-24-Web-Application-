import React from 'react';
import "./property-card.css"
import p1img from "../../assets/images/properties/p51.jpg"
import p2img from "../../assets/images/properties/p11.jpg"
import p3img from "../../assets/images/properties/p21.jpg"
import p4img from "../../assets/images/properties/p31.jpg"
import p5img from "../../assets/images/properties/p41.jpg"
import p6img from "../../assets/images/properties/p61.jpg"





const PropertyCard = () => {
    return ( 
        <div>
            <div className="card property-card my-2">
                <img className="card-img-top property-img" src={p1img} alt="Card image cap"></img>
                <div className="card-body text-white pt-2 w-50">
                    <h2 className="card-title text-secondary">R1 650 000</h2>
                    <h5 className="card-subtitle text-grey">6 Bedroom house</h5>
                    <h5 className="card-subtitle font-weight-bold my-2">The Farm Estates</h5>
                    <h6 className="card-subtitle font-weight-light text-secondary my-2">15 Palm Grove Uvongo</h6>
                    <p className="card-text">
                        A beautiful 6 Bedroom House situated in the beautiful suburb of Uvongo in the south cooast of KwaZulu-natal. 
                        A safe and secure suburb that is very close to many schools. 
                        This house being in Uvongo is also situated very near to the beach making it the perfect home for the whole family

                    </p>
                </div>
            </div>
            <div className="card property-card my-2">
                <img className="card-img-top property-img" src={p2img} alt="Card image cap"></img>
                <div className="card-body text-white pt-2 w-50">
                    <h2 className="card-title text-secondary">R 650 000</h2>
                    <h5 className="card-subtitle text-grey">3 Room house</h5>
                    <h5 className="card-subtitle font-weight-bold my-2">Savanah Hills</h5>
                    <h6 className="card-subtitle font-weight-light text-secondary my-2">8 Prestondale Road</h6>
                    <p className="card-text">
                        A lovely 3 bedroom home situated in Durban central. As a bachelor or a young family, this is the perfect home for you. 
                        
                    </p>
                </div>
            </div>
            <div className="card property-card my-2">
                <img className="card-img-top property-img" src={p3img} alt="Card image cap"></img>
                <div className="card-body text-white pt-2 w-50">
                    <h2 className="card-title text-secondary">R5 000 000</h2>
                    <h5 className="card-subtitle text-grey">6 Bedroom house</h5>
                    <h5 className="card-subtitle font-weight-bold my-2">Izinga Estates</h5>
                    <h6 className="card-subtitle font-weight-light text-secondary my-2">69 Meridian Drive</h6>
                    <p className="card-text">
                        The all well too known Izinga estate is looking for a wonderful family to be apart of this lovely home. 
                        An amazing house situated in what is to be considered the "most elite" estate in all of Durban, Izinga shines above the rest.
                        With an amazing communty, secure locale, and all-round great environment for all people in all walks of life, Izinga is definatley the place where you can make this house your home. 

                    </p>
                </div>
            </div>
            <div className="card property-card my-2">
                <img className="card-img-top property-img" src={p4img} alt="Card image cap"></img>
                <div className="card-body text-white pt-2 w-50">
                    <h2 className="card-title text-secondary">R8 000 000</h2>
                    <h5 className="card-subtitle text-grey">6 Bedroom house</h5>
                    <h5 className="card-subtitle font-weight-bold my-2">10 Bryanston Drive</h5>
                    <h6 className="card-subtitle font-weight-light text-secondary my-2">10 Bryanston Drive</h6>
                    <p className="card-text">
                        Class, Style, Elegance. These are three words that describe this amazing home. One of the hottest homes in the Brynstan suburb of Johaneesburg, thhis home is sure to bring you to elite status. 
                        A home near to Sandton, and many various private schools, this home is sure to elevate you and your family to a further level. 
                    </p>
                </div>
            </div>

        </div>
     );
}
 
export default PropertyCard;