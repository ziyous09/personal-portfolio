import './SkillCards.css';

export default function SkillCard({ icon, title }) {
  return (
    <div className="skill-stack-card">
      <div className="skill-card-icon-wrapper">
        <img src={icon} alt={title + ' icon'} className="skill-card-icon" />
      </div>
      {/* <div className="skill-card-title-wrapper">
        <div className="skill-card-title">{title}</div>
      </div> */}
    </div>
  );
};
