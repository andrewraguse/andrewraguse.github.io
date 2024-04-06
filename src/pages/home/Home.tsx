import './Home.scss';
import StandardButton from '../../components/buttons/standard-button/StandardButton';
import { Link } from 'react-router-dom';

//<Link to="/about">about me &#8594;</Link>

function Home() {
  return (
    <div className="primary-content-wrapper" id="home-page-content-wrapper">
      <h1 className="animate__animated animate__bounce">HI, I'M DREW</h1>
      <div id="home-page-content">
        <p className="animate__animated animate__pulse">
          I am a fullstack software engineer seeking full-time employment in New
          York City. This is some more filler text until I find out what I want
          to say.
        </p>
        <Link to={'/about'}>
          <StandardButton
            animation="animate__animated animate__slideInUp"
            addArrowIcon={true}
          >
            About Me
          </StandardButton>
        </Link>
      </div>
    </div>
  );
}

export default Home;
