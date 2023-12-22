import SkillModel from '../../../models/SkillModel';
import './SkillItem.scss';

interface Props {
  skillModel: SkillModel;
}

function SkillItem({ skillModel }: Props) {
  return (
    <div className="experience-resume-item skill-experience-resume-item">
      <h4>{skillModel.skill}</h4>
      <div className="proficiency-ranking-container">
        {renderProficiencyBar(skillModel.proficiency)}
      </div>
    </div>
  );
}

function renderProficiencyBar(proficiency: number) {
  const proficiencyBar = [...Array(5).keys()];

  return proficiencyBar.map((item) =>
    item <= proficiency - 1 ? (
      <div
        className={`proficiency-ranking-item proficiency-ranking-item-full proficiency-ranking-item-${item}`}
      ></div>
    ) : (
      <div
        className={`proficiency-ranking-item proficiency-ranking-item-${item}`}
      ></div>
    )
  );
}

export default SkillItem;
