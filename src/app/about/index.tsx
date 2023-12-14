import "./index.scss";
import DefaultTextBox from "../../components/default-text-box";

function AboutPage() {
  return (
    <>
      <div className="about-page-content">
        <h1>About</h1>
        <DefaultTextBox id="about-page-content-wrapper">
          <p>
            Here is some content that I will be using to talk about myself. I
            will put an image to the left
          </p>
        </DefaultTextBox>
      </div>
    </>
  );
}

export default AboutPage;
