import './Projects.scss';
import TextBox from '../../components/textbox/TextBox';
import { projectExperienceContent } from './ProjectsContent';
import ProjectItem from '../../components/resume-items/project-item/ProjectItem';

interface Props {
  theme: string;
}

function Projects({ theme }: Props) {
  return (
    <>
      <div className="primary-content-wrapper">
        <div id="projects-page-content-wrapper">
          <h1 id="projects" className="animate__animated animate__bounce">
            Projects
          </h1>
          <div id="projects-page-textbox-wrapper">
            <TextBox theme={theme}>
              <div className="experience-section-wrapper projects-experience-section-wrapper">
                {projectExperienceContent.map((projectExperience, index) => (
                  <ProjectItem projectModel={projectExperience} key={index} />
                ))}
              </div>
            </TextBox>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
