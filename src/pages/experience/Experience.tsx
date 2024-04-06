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
          <h1 id="experience" className="animate__animated animate__bounce">
            EXPERIENCE
          </h1>
          <div id="experience-page-content-textbox-group">
            <div className="experience-column experience-column2">
              <TextBox theme={theme}>
                <div className="experience-content-wrapper">
                  <h2 className="experience-section-header work-experience-section-header">
                    Work Experience
                  </h2>
                  <div id="work-experience-item-wrapper">
                    {workExperienceContent.map((workExperience) => (
                      <ExperienceItem experienceModel={workExperience} />
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
                    {activityExperienceContent.map((workExperience) => (
                      <ExperienceItem experienceModel={workExperience} />
                    ))}
                  </div>
                </div>
              </TextBox>
            </div>
            <div className="experience-column experience-column1">
              <TextBox theme={theme}>
                <div className="experience-section-wrapper education-experience-section-wrapper">
                  <h3 className="experience-section-header">Education</h3>
                  {educationExperienceContent.map((educationExperience) => (
                    <EducationItem educationModel={educationExperience} />
                  ))}
                </div>
              </TextBox>
              <TextBox theme={theme}>
                <div className="experience-section-wrapper skill-experience-section-wrapper">
                  <h3 className="experience-section-header">Skills</h3>
                  {skillExperienceContent.map((skillExperience) => (
                    <SkillItem skillModel={skillExperience} theme={theme} />
                  ))}
                </div>
              </TextBox>
              <TextBox theme={theme}>
                <div className="experience-section-wrapper project-experience-section-wrapper">
                  <h3 className="experience-section-header">Projects</h3>
                  {projectExperienceContent.map((projectExperience) => (
                    <ProjectItem projectModel={projectExperience} />
                  ))}
                </div>
              </TextBox>
              <TextBox theme={theme}>
                <div className="experience-section-wrapper course-experience-section-wrapper">
                  <h3 className="experience-section-header">
                    Relevant Course Work
                  </h3>
                  <div id="course-list">
                    {courseExperienceContent.map((courseExperience) => (
                      <CourseItem courseModel={courseExperience} />
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

export default Experience;
