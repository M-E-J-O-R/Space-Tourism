import NavBar from "../components/NavBar";
import '../styles/crew.css';
import crew from '../assets/crew/image-douglas-hurley.webp';

const Crew = () => {
    return (<>
        <div className="Crew">
            <NavBar />

            <main className="crew-container">
                <section className="crew-details">
                    <p className="crew-heading" > <b>02</b> MEET YOUR CREW</p>

                    <article>


                        <div className="crew-name">
                            <p className="role">Commander</p>
                            <p className="name">DOUGLAS HURLEY</p>

                        </div>

                        <p className="crew-member-info">  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                            and former NASA astsronaut. He launched into space for the third time as
                            commander of Crew Dragon Demo-2.
                        </p>
                    </article>
                </section>

                <section className="crew-image-container">
                    <img src={crew} alt="" className="crew-image" />

                </section>


            </main>


        </div>
    </>);
};

export default Crew;