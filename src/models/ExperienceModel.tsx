import PositionModel from './PositionModel';

interface ExperienceModel {
  company: string;
  positions: PositionModel[];
  descriptions: string[];
}

export default ExperienceModel;
