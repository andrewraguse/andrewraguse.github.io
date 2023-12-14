import "./index.scss";
import TextBox from "../../components/textbox";

interface Props {
  theme: string;
}

function AboutPage({ theme }: Props) {
  return (
    <>
      <div className="about-page-content">
        <h1 className="animate__animated animate__bounce">About Me</h1>
        <TextBox theme={theme}>
          <div className="primary-content">
            <img
              id="profile-photo"
              src="./IMG_3334.jpeg"
              alt="self profile photo"
            />
            <div id="vertical-line" />
            <p id="about-me-text">
              Hello my name is Andrew Raguse and I am from southern california.
              Some more text about me is that I blah blah blah blah. I really
              want to fill in this space so I can format this document well.
              <br />
              <br />
              Hello my name is Andrew Raguse and I am from southern california.
              Some more text about me is that I blah blah blah blah. I really
              want to fill in this space so I can format this document well.
            </p>
          </div>
        </TextBox>
      </div>
    </>
  );
}

export default AboutPage;
