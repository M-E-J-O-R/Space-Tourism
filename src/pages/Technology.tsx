import { useState,useEffect } from 'react';
import NavBar from "../components/NavBar";
import '../styles/technology.css';
import data from '../data/data.json';



const Technology = () => {
    const [techName, setTechName] = useState('Launch vehicle');

    const [media, setMedia] = useState(window.matchMedia('max-width:1000px').matches);
    

    let technologyData = data.technology;

    const filteredTech = technologyData.filter((element) => element.name === techName && element);

    let tech = filteredTech[0];

    function styleFunction(element: string) {
        if (techName === element) {
            return {
                color: 'black',
                backgroundColor: 'white'
            };
        }
    }
   
    useEffect(() => {
        window
            .matchMedia('max-width:1000px')
            .addEventListener('change',e=>setMedia(e.matches))
      
    }, [])
    


    return (<>

        <div className="Technology">
            <NavBar />
            <main className="technology-container">
                <header className="technology-heading">
                    <p> <b>03</b>  SPACE LAUNCH 101</p>
                </header>

                <section className="technology-details-wrapper">
                    <nav className="technology-nav">
                        <div
                            style={styleFunction('Launch vehicle')}
                            onClick={() => setTechName('Launch vehicle')}>1</div>
                        <div
                            style={styleFunction('Spaceport')} onClick={() => setTechName('Spaceport')}>2</div>
                        <div
                            style={styleFunction('Space capsule')}
                            onClick={() => setTechName('Space capsule')}>3</div>
                    </nav>

                    <section className="technology-details" >


                        <p className="technology-terminology">  THE TERMINOLOGY...</p>
                        <p className="technology-title">{tech.name}</p>

                        <article className="technology-info">
                            <p>{tech.description}</p>
                        </article>
                    </section>

                </section>

                <div className="technology-image"
                    style={{
                        backgroundImage: `url(${require(`../assets/technology/${media?tech.images.landscape:tech.images.portrait}`)})`
                    }}
                >

                </div>

            </main>
        </div>
    </>);
};

export default Technology;