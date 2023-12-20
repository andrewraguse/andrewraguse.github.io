interface Props {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string[];
}

function Experience({
  company,
  jobTitle,
  startDate,
  endDate,
  description,
}: Props) {
  return (
    <div className="experience-resume-item">
      <h3>{`${company}`}</h3>
      <h4>{`${jobTitle} (${startDate}-${endDate})`}</h4>
    </div>
  );
}

//todo fix this to return a full ul
function arrayToHTML(experienceName: string, array: string[]) {
  return array.map((item, index) => {
    <li
      key={`${experienceName}-description-${index}`}
      className={`${experienceName}-description-${index}`}
    >
      {item}
    </li>;
  });
}

//function arrayToHTML(listItems: string[]) {

//}

export default Experience;
