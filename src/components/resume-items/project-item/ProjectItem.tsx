import ProjectModel from '../../../models/ProjectModel';

interface Props {
  projectModel: ProjectModel;
}

function ProjectItem({ projectModel }: Props) {
  return (
    <div className="experience-resume-item">
      <h4>{projectModel.project}</h4>
      <ul>
        {projectModel.descriptions.map((description, index) => (
          <li
            key={`${projectModel.project}-description-${index}`}
            className="project-description-list-item"
          >
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectItem;
