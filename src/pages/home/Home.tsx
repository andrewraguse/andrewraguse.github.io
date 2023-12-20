import "./Home.scss";
import ArrowButton from "../../components/buttons/arrow-button/ArrowButton";

//<Link to="/about">about me &#8594;</Link>

function Home() {
  return (
    <div className="primary-content-wrapper">
      <div id="primary-text-box">
        <h1 className="animate__animated animate__bounce">HI, I'M DREW</h1>
        <p className="animate__animated animate__slideInLeft">
          I am a fullstack software engineer seeking full-time employment in New
          York City. This is some more filler text until I find out what I want
          to say.
        </p>
        <ArrowButton link="/about">About Me</ArrowButton>
      </div>
    </div>
  );
}

export default Home;
