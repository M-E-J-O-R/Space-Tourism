import NavBar from "../components/NavBar";
import '../styles/crew.css';
import data from '../data/data.json';
import { useState } from "react";





const Crew = () => {
    let crewData = data.crew;

    type crewDataType = {
        name: string;
        images: {
            png: string;
            webp: string;
        };
        role: string;
        bio: string;
    };

    const [role, setRole] = useState('Commander');



    const handleRole = (element: crewDataType) => {
        if (element.role === role) {

            return element;
        }
    };
    let sortedData = crewData.filter(handleRole);

    let crew = sortedData[0];

    function styleFunction(element: string) {
        if (role === element) {
            return {
                opacity: 1
            };
        }
    }

    return (<>
        <div className="Crew">
            <NavBar />
            <p className="crew-heading" > <b>02 </b> MEET YOUR CREW</p>

            <main className="crew-container">
                <section className="crew-details">
                    <article>
                        <div className="crew-name">
                            <p className="role">{crew.role}</p>
                            <p className="name">{crew.name}</p>

                        </div>

                        <p className="crew-member-info">  {crew.bio}

                        </p>
                    </article>

                    <nav className="crew-nav">
                        <div
                            style={styleFunction('Commander')}
                            onClick={() => setRole('Commander')} > </div>
                        <div
                            style={styleFunction('Mission Specialist')}
                            onClick={() => setRole('Mission Specialist')} > </div>
                        <div
                            style={styleFunction('Pilot')} onClick={() => setRole('Pilot')} > </div>
                        <div
                            style={styleFunction('Flight Engineer')} onClick={() => setRole('Flight Engineer')} > </div>

                    </nav>
                </section>

                <section className="crew-image-container">
                    <img src={require(`../assets/crew/${crew.images.webp}`)} alt="" className="crew-image" />

                </section>




            </main>


        </div>
    </>);
};

export default Crew;