import { Link, useParams } from "react-router-dom";
import data from '../data/data.json';


const DestinationPlanet = () => {

    const { id } = useParams();

    let numId: number = Number(id);

    let destination = data.destinations[numId];

    isNaN(numId) ? (destination = data.destinations[0]) : (destination = data.destinations[numId]);


    return (<>
        <section className="destination__child">

            <img src={require(`../assets/destination/${destination.images.webp}`)} alt="" className="destination_image" />

            <section className="destination_details">
                <nav className="destination__navs">
                    <Link to={'/destination/0'}>Moon</Link>
                    <Link to={'/destination/1'}>Mars</Link>
                    <Link to={'/destination/2'}>Europa</Link>
                    <Link to={'/destination/3'}>Titan</Link>
                </nav>
                <article>
                    <p className="destination__details_name">{destination.name}</p>
                    <p className="destination__details_body">{destination.description}</p>
                </article>

                <hr className="destination_divider" />

                <section className="destination_sub_details">
                    <div className="sub-details-child">
                        <p className="sub-details-child-head">AVG. DISTANCE</p>
                        <p className="sub-details-child-body" > {destination.distance}</p>
                    </div>
                   
                    <div className="sub-details-child">
                        <p className="sub-details-child-head" >EST. TRAVEL TIME</p>
                        <p className="sub-details-child-body" >{destination.travel}</p>
                    </div>
                </section>

            </section>

        </section>


    </>);
};

export default DestinationPlanet;