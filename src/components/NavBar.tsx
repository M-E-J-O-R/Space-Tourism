import { Link, Outlet } from "react-router-dom";
import '../styles/nav-bar.css';
import logo from '../assets/shared/logo.svg';


function NavBar() {
    return (
        <>
            <div className="nav_container">
                <img src={logo} className='logo' alt="star" />
                <hr className="nav__hr-hidden" />

                <div className="nav__children">

                    <NavChildren navs='Home' num='00' />
                    <NavChildren navs='Destination' num='01' />
                    <NavChildren navs='Crew' num='02' />
                    <NavChildren navs='Technology' num='03' />

                    {/* <Link to={'/'}>
                        <span className="nav__children-hidden">00</span>  Home
                    </Link>
                    <Link to={'/'}>
                        <span className="nav__children-hidden">01</span>
                        Destination
                    </Link>
                    <Link to={'/'}>
                        <span className="nav__children-hidden">02</span>
                        Crew
                    </Link> */}
                    {/* <Link to={'/'}>
                        <span className="nav__children-hidden">03</span>
                        Technology
                    </Link> */}

                </div>



            </div>

            <Outlet/>
        </>
    );
}

type NavChildrenType = {
    navs: string;
    num: string;
};

function NavChildren({ navs, num }: NavChildrenType): JSX.Element {
    return (
        <Link to={navs=== 'Home'?'/':`/${navs.toLowerCase()}`}>
            <b className="nav__children-hidden">{num}
            </b>
            {navs}
        </Link>
    );
}


export default NavBar;