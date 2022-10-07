import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import '../styles/destination.css';
import moon from '../assets/destination/image-moon.webp';
const Destination = () => {
    return (<>
        <div className="Destination">
            <NavBar />

            <main className="destination_container">
                <p className="destination_heading"> <b>01</b>  CHOOSE YOUR DESTINATION</p>

                <section className="destination__child">

                    <img src={moon} alt="" className="destination_image" />


                    <section className="destination_details">
                        <nav className="destination__navs">
                            <Link to={'/'}>Moon</Link>
                            <Link to={'/'}>Mars</Link>
                            <Link to={'/'}>Europa</Link>
                            <Link to={'/'}>Titan</Link>
                        </nav>
                        <article>
                            <p className="destination__details_name">MOON</p>
                            <p className="destination__details_body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eveniet vel doloremque ut nobis eaque. Explicabo accusamus tempora perferendis dignissimos ipsum error neque placeat amet, similique ex est eveniet. Quibusdam itaque dicta quidem, ipsum distinctio tempora totam, ad ex ea exercitationem repellendus, rerum fugit.</p>
                        </article>

                        <hr className="destination_divider" />

                        <section className="destination_sub_details">
                            <div className="sub-details-child">
                                <p className="sub-details-child-head">AVG. DISTANCE</p>
                                <p className="sub-details-child-body" > 384,000 KM</p>
                            </div>
                            <div className="sub-details-child">
                                <p className="sub-details-child-head" >EST. TRAVEL TIME</p>
                                <p className="sub-details-child-body" >3 DAYS</p>
                            </div>
                        </section>

                    </section>

                </section>


            </main>


        </div>
    </>);
};

export default Destination;