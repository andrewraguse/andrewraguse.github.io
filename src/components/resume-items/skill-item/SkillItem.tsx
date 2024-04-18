import SkillModel from '../../../models/SkillModel';
import './SkillItem.scss';

interface Props {
  skillModel: SkillModel;
  theme: string;
}

function SkillItem({ skillModel, theme }: Props) {
  return (
    <div className="experience-resume-item skill-experience-resume-item">
      <h4>{skillModel.skill}</h4>
      <div className={`proficiency-ranking-container ${theme}`}>
        {renderProficiencyBar(skillModel.proficiency, theme)}
      </div>
    </div>
  );
}

function renderProficiencyBar(proficiency: number, theme: string) {
  const proficiencyBar = [...Array(5).keys()];

  return proficiencyBar.map((item, index) =>
    item <= proficiency - 1 ? (
      <div
        className={`proficiency-ranking-item proficiency-ranking-item-full ${theme} proficiency-ranking-item-${item}`}
        key={index}
      ></div>
    ) : (
      <div
        className={`proficiency-ranking-item proficiency-ranking-item-${item}`}
        key={index}
      ></div>
    )
  );
}

export default SkillItem;
