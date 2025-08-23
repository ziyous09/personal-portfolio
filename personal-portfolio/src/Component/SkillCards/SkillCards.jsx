import './SkillCards.css';

export default function SkillCard({ icon, title, description }) {
  return (
    <div className="skill-stack-card card-flip">
      <div className="card-inner">
        <div className="card-front">
          <div className="skill-card-icon-wrapper">
            <img src={icon} alt={title + ' icon'} className="skill-card-icon" />
          </div>
        </div>
        <div className="card-back">
          <div className="skill-card-title-wrapper">
            <div className="skill-card-title">{title}</div>
            <div className="skill-card-description">{description || 'A short description about this language/technology.'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
