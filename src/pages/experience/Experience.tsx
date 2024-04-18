import './Experience.scss';
import TextBox from '../../components/textbox/TextBox';
import ExperienceItem from '../../components/resume-items/experience-item/ExperienceItem';
import EducationItem from '../../components/resume-items/education-item/EducationItem';
import {
  workExperienceContent,
  educationExperienceContent,
  skillExperienceContent,
  projectExperienceContent,
  activityExperienceContent,
  courseExperienceContent,
} from './ExperienceContent';
import SkillItem from '../../components/resume-items/skill-item/SkillItem';
import ProjectItem from '../../components/resume-items/project-item/ProjectItem';
import CourseItem from '../../components/resume-items/course-item/CourseItem';

interface Props {
  theme: string;
}

function Experience({ theme }: Props) {
  return (
    <>
      <div className="primary-content-wrapper">
        <div id="experience-page-content">
          <h1
            id="experience-header"
            className="animate__animated animate__bounce"
          >
            EXPERIENCE &nbsp;
            <a
              href="./Andrew-Raguse-Resume.pdf"
              download={'./Andrew-Raguse-Resume.pdf'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className={`bi bi-file-earmark-arrow-down download-icon download-icon-${theme}`}
                viewBox="0 0 16 16"
              >
                <path d={downloadIconPaths[0]} />
                <path d={downloadIconPaths[1]} />
              </svg>
            </a>
          </h1>
          <div id="experience-page-content-textbox-group">
            <div className="experience-column experience-column2">
              <TextBox theme={theme}>
                <div className="experience-content-wrapper">
                  <h2 className="experience-section-header work-experience-section-header">
                    Work Experience
                  </h2>
                  <div id="work-experience-item-wrapper">
                    {workExperienceContent.map((workExperience, index) => (
                      <ExperienceItem
                        experienceModel={workExperience}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </TextBox>
              <TextBox theme={theme}>
                <div className="experience-content-wrapper">
                  <h2 className="experience-section-header activity-experience-section-header">
                    Activities
                  </h2>
                  <div id="activity-experience-item-wrapper">
                    {activityExperienceContent.map((workExperience, index) => (
                      <ExperienceItem
                        experienceModel={workExperience}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </TextBox>
            </div>
            <div className="experience-column experience-column1">
              <TextBox theme={theme}>
                <div className="experience-section-wrapper education-experience-section-wrapper">
                  <h3 className="experience-section-header">Education</h3>
                  {educationExperienceContent.map(
                    (educationExperience, index) => (
                      <EducationItem
                        educationModel={educationExperience}
                        key={index}
                      />
                    )
                  )}
                </div>
              </TextBox>
              <TextBox theme={theme}>
                <div className="experience-section-wrapper skill-experience-section-wrapper">
                  <h3 className="experience-section-header">Skills</h3>
                  {skillExperienceContent.map((skillExperience, index) => (
                    <SkillItem
                      skillModel={skillExperience}
                      theme={theme}
                      key={index}
                    />
                  ))}
                </div>
              </TextBox>
              <TextBox theme={theme}>
                <div className="experience-section-wrapper project-experience-section-wrapper">
                  <h3 className="experience-section-header">Projects</h3>
                  {projectExperienceContent.map((projectExperience, index) => (
                    <ProjectItem projectModel={projectExperience} key={index} />
                  ))}
                </div>
              </TextBox>
              <TextBox theme={theme}>
                <div className="experience-section-wrapper course-experience-section-wrapper">
                  <h3 className="experience-section-header">
                    Relevant Course Work
                  </h3>
                  <div id="course-list">
                    {courseExperienceContent.map((courseExperience, index) => (
                      <CourseItem courseModel={courseExperience} key={index} />
                    ))}
                  </div>
                </div>
              </TextBox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const downloadIconPaths = [
  'M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z',
  'M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z',
];

export default Experience;
