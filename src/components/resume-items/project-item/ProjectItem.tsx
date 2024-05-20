import ProjectModel from '../../../models/ProjectModel';

interface Props {
  projectModel: ProjectModel;
}

function ProjectItem({ projectModel }: Props) {
  return (
    <div className="experience-resume-item">
      {createProjectTitle(projectModel)}
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

function createProjectTitle(projectModel: ProjectModel) {
  if (projectModel.href) {
    return (
      <h4>
        <a href={projectModel.href} target="_blank">
          {projectModel.project}
        </a>{' '}
        <i>{`(${projectModel.year})`}</i>
      </h4>
    );
  } else {
    return (
      <h4>
        {projectModel.project} <i>{`(${projectModel.year})`}</i>
      </h4>
    );
  }
}

export default ProjectItem;
