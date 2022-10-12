import NavBar from "../components/NavBar";
import '../styles/technology.css';
import technologyLogo from '../assets/technology/image-lauch-vehicle-potrait.png';
const Technology = () => {
    return (<>

        <div className="Technology">
            <NavBar />
            <main className="technology-container">
                <p> <b>03</b>  SPACE LAUNCH 101</p>
                <p>  The terminology...</p>
                <p>Launch vehicle</p>
                <nav>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </nav>
                <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,it's quite an awe-inspiring sight on the launch pad!</p>
                <img src={technologyLogo} alt="" />
            </main>
        </div>
    </>);
};

export default Technology;