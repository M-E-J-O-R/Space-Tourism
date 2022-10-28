import { Link, Outlet } from "react-router-dom";
import '../styles/nav-bar.css';
import logo from '../assets/shared/logo.svg';
import open from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';
import { useRef, useState } from "react";


function NavBar() {
    const [navState, setNavState] = useState(false);

    const handleNavState = () => setNavState(prev => !prev);

    const handleDisplay = () => {
        return { right: navState ?  '0px':'-100vw' };
    };



    return (
        <

            >
            <div className="nav_container">
                <img src={logo} className='logo' alt="star" />
                <hr className="nav__hr-hidden" />

                <img className="mobile" onClick={handleNavState} src={open} alt='/' />

                <nav className="nav__children" style={handleDisplay()}
                >
                    <img className="mobile close" src={close} alt="" onClick={handleNavState} />


                    <NavChildren navs='Home' num='00' />
                    <NavChildren navs='Destination' num='01' />
                    <NavChildren navs='Crew' num='02' />
                    <NavChildren navs='Technology' num='03' />

                 </nav>



            </div>

            <Outlet />
        </>
    );
}

type NavChildrenType = {
    navs: string;
    num: string;
};

function NavChildren({ navs, num }: NavChildrenType): JSX.Element {
    return (
        <Link to={navs === 'Home' ? '/' : `/${navs.toLowerCase()}`}>
            <b className="nav__children-hidden">{num}
            </b>
            {navs.toUpperCase()}
        </Link>
    );
}


export default NavBar;