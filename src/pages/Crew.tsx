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

    const handleRole = (el: crewDataType) => {
        if (el.role === role) {
            return el;
        }
    };
    let sortedData = crewData.filter(handleRole);

    let crew = sortedData[0]
    
    

    return (<>
        <div className="Crew">
            <NavBar />

            <main className="crew-container">
                <section className="crew-details">
                    <p className="crew-heading" > <b>02 </b> MEET YOUR CREW</p>

                    <article>


                        <div className="crew-name">
                            <p className="role">{ crew.role}</p>
                            <p className="name">{ crew.name}</p>

                        </div>

                        <p className="crew-member-info">  { crew.bio}
                            and former NASA astsronaut. He launched into space for the third time as
                            commander of Crew Dragon Demo-2.
                        </p>
                    </article>
              
                    <nav className="crew-nav">
                        <div onClick={()=> setRole('Commander')} > </div>
                        <div onClick={()=> setRole('Mission Specialist')} > </div>
                        <div onClick={()=> setRole('Pilot')} > </div>
                        <div onClick={()=> setRole('Flight Engineer')} > </div>
                     
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