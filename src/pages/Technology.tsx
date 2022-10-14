import NavBar from "../components/NavBar";
import '../styles/technology.css';
import technologyLogo from '../assets/technology/image-launch-vehicle-portrait.jpg';
const Technology = () => {
    return (<>

        <div className="Technology">
            <NavBar />
            <main className="technology-container">
                <header className="technology-heading">
                    <p> <b>03</b>  SPACE LAUNCH 101</p>
                </header>

                <section className="technology-details">
                    <nav className="technology-nav">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </nav>

                    <section>


                        <p className="technology-feature">  The terminology...</p>
                        <p className="technology-title">Launch vehicle</p>

                        <article className="technology-info">
                            <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,it's quite an awe-inspiring sight on the launch pad!</p>
                        </article>
                    </section>

                </section>


                <img src={technologyLogo} alt="" />
            </main>
        </div>
    </>);
};

export default Technology;