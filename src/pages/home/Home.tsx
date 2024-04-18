import './Home.scss';
import StandardButton from '../../components/buttons/standard-button/StandardButton';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="primary-content-wrapper" id="home-page-content-wrapper">
      <h1 className="animate__animated animate__bounce">HI, I'M DREW</h1>
      <div id="home-page-content">
        <p className="animate__animated animate__pulse">
          I am a full-stack software engineer actively pursuing full-time
          employment opportunities in New York City. I illustrated, designed,
          and coded every part of this website to highlight my expertise and
          background in computer science.
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
