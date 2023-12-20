import "./Contact.scss";
import TextBox from "../../components/textbox/TextBox";
function Contact() {
  return (
    <>
      <div id="text-border">
        <div id="about-page-content">
          <h1 id="about">About</h1>
          <TextBox theme={"dark"}>
            <div id="primary-content">
              <img
                id="profile-photo"
                src="./IMG_3334.jpeg"
                alt="self profile photo"
              />
              <div id="vertical-line" />
              <p id="about-me-text">
                Hello my name is Andrew Raguse and I am from southern
                california. Some more text about me is that I blah blah blah
                blah. I really want to fill in this space so I can format this
                document well.
                <br />
                <br />
                Hello my name is Andrew Raguse and I am from southern
                california. Some more text about me is that I blah blah blah
                blah. I really want to fill in this space so I can format this
                document well.
                <br />
                <br />
                Hello my name is Andrew Raguse and I am from southern
                california. Some more text about me is that I blah blah blah
                blah. I really want to fill in this space so I can format this
                document well.
                <br />
              </p>
            </div>
          </TextBox>
        </div>
      </div>
    </>
  );
}

export default Contact;
