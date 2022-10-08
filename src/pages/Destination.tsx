import NavBar from "../components/NavBar";
import '../styles/destination.css';
import moon from '../assets/destination/image-moon.webp';

import DestinationPlanet from "../components/DestinationPlanet";


const Destination = () => {


    return (<>


        <div className="Destination">
            <NavBar />

            <main className="destination_container">
                <p className="destination_heading"> <b>01</b>  CHOOSE YOUR DESTINATION</p>
                <DestinationPlanet />
               

            </main>


        </div>


    </>);
};

export default Destination;