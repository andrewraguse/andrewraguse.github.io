import PositionModel from './PositionModel';

interface ExperienceModel {
  company: string;
  positions: PositionModel[];
  startDate: string;
  endDate: string;
  descriptions: string[];
}

export default ExperienceModel;
