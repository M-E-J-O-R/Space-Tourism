import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import '../styles/destination.css';
const Destination = () => {
    return (<>
        <div className="Destination">
            <NavBar />

            <div className="destination_container">
                <p className="destination_heading"> <b>01</b>  CHOOSE YOUR DESTINATION</p>

                <div className="destination__child">
                    <div className="destination_image"></div>

                    <div className="destionation_details">
                        <div className="destination__navs">
                            <Link to={'/'}>Moon</Link>
                            <Link to={'/'}>Mars</Link>
                            <Link to={'/'}>Europa</Link>
                            <Link to={'/'}>Titan</Link>
                        </div>
                        <p className="destionation__details_name">Moon</p>
                        <p className="destionation__details_body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eveniet vel doloremque ut nobis eaque. Explicabo accusamus tempora perferendis dignissimos ipsum error neque placeat amet, similique ex est eveniet. Quibusdam itaque dicta quidem, ipsum distinctio tempora totam, ad ex ea exercitationem repellendus, rerum fugit.</p>
                        <hr />

                    </div>

                </div>


            </div>


        </div>
    </>);
};

export default Destination;