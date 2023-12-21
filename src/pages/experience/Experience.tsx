import "./Experience.scss";
import TextBox from "../../components/textbox/TextBox";
import ExperienceItem from "../../components/resume-items/experience-item/ExperienceItem";

interface Props {
  theme: string;
}

function Experience({ theme }: Props) {
  return (
    <>
      <div className="primary-content-wrapper">
        <div id="experience-page-content">
          <h1 id="experience" className="animate__animated animate__bounce">
            EXPERIENCE
          </h1>
          <div id="experience-page-content-textbox-group">
            <div className="experience-column experience-column1">
              <TextBox theme={theme}>Education</TextBox>
              <TextBox theme={theme}>Skills</TextBox>
              <TextBox theme={theme}>Relevant CourseWork</TextBox>
              <TextBox theme={theme}>Projects</TextBox>
            </div>
            <div className="experience-column experience-column1">
              <TextBox theme={theme}>
                <div id="experience-content-wrapper">
                  <h2 id="work-experience-header">Work Experience</h2>
                  <div className="work-experience-item-wrapper">
                    {experiences.map((experience) => (
                      <ExperienceItem experienceModel={experience} />
                    ))}
                  </div>
                </div>
              </TextBox>
              <TextBox theme={theme}>Activities</TextBox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//experiences.map((experience) => {<ExperienceItem experienceModel={experience}/>})

const experiences = [
  {
    company: "Amazon",
    position: "Software Engineer II",
    startDate: "September 2020",
    endDate: "June 2023",
    descriptions: [
      "This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again.",
      "This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again.",
    ],
  },
  {
    company: "Amazon",
    position: "Software Engineer II",
    startDate: "September 2020",
    endDate: "June 2023",
    descriptions: [
      "This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again.",
      "This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again.",
    ],
  },
  {
    company: "Amazon",
    position: "Software Engineer II",
    startDate: "September 2020",
    endDate: "June 2023",
    descriptions: [
      "This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again.",
      "This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again. This is a job description and I am going to repeat over and over again.",
    ],
  },
];

export default Experience;
