import '../styles/home.css';
import NavBar from '../components/NavBar';

export default function Home(): JSX.Element {
    return (
        <>
            <div className="Home">
                <NavBar/>

                <div className="space">
                    <div className="space__one">
                        <p className='space__one_ques'>SO, YOU WANT TO TRAVEL TO </p>
                        <p className='space__one_head'>SPACE</p>
                        <p className='space__one_talks'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>

                    <div className="space__two">
                        EXPLORE
                    </div>

                </div>
            </div>

        </>


    );
}
