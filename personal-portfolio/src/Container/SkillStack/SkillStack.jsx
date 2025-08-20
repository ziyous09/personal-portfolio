import './SkillStack.css';
// MarqueeStyles is no longer needed
import SkillMarquee from '../../Component/SkillCards/SkillMarquee';
import SkillCard from '../../Component/SkillCards/SkillCards';
import ReactIcon from '../../assets/icons/react.png';
import JavaScriptIcon from '../../assets/icons/javascript.png';
import NodeJsIcon from '../../assets/icons/nodejs.png';
import ExpressJsIcon from '../../assets/icons/express.png';
import JavaIcon from '../../assets/icons/java.png';
import ApiIcon from '../../assets/icons/api.png';
import CloudIcon from '../../assets/icons/cloud.png';
import CssIcon from '../../assets/icons/css.png';
import DBMSIcon from '../../assets/icons/dbms.png';
import GithubIcon from '../../assets/icons/github.png'
import MongoDbIcon from '../../assets/icons/mongo-db.png';
import GoogleCloudIcon from '../../assets/icons/google.png';
import HTMLIcon from '../../assets/icons/html.png';
import SqlIcon from '../../assets/icons/mysql.png';
import VsCodeIcon from '../../assets/icons/vs-code.png';
import MarqueeStyles from '../../Component/Effects/MarqueeStyles';

function SkillStack() {
    return (
        <div className="skill-stack-container">
            <MarqueeStyles />
            <h1 className="skill-stack-title">My Tech Stack</h1>
            <p className="skill-stack-subtitle">A collection of technologies I work with.</p>

            <div className="skill-stack-content-wrapper">
                {/* First Row of Skills (scrolls right to left) */}
                <SkillMarquee>
                    <SkillCard icon={ReactIcon} title="React" />
                    <SkillCard icon={JavaScriptIcon} title="JavaScript (ES6+)" />
                    <SkillCard icon={ApiIcon} title="Api" />
                    <SkillCard icon={CloudIcon} title="Microsoft Azure" />
                    <SkillCard icon={NodeJsIcon} title="Node.js" />
                    <SkillCard icon={ExpressJsIcon} title="Express.js" />
                    <SkillCard icon={HTMLIcon} title="HTML5" />
                </SkillMarquee>

                {/* Second Row of Skills (scrolls left to right) */}
                <SkillMarquee direction="reverse">
                    <SkillCard icon={CssIcon} title="CSS3" />
                    <SkillCard icon={JavaIcon} title="Java" />
                    <SkillCard icon={DBMSIcon} title="DBMS" />
                    <SkillCard icon={MongoDbIcon} title="MongoDB" />
                    <SkillCard icon={SqlIcon} title="SQL" />
                    <SkillCard icon={GoogleCloudIcon} title="Google Cloud" />
                    <SkillCard icon={VsCodeIcon} title="VS Code" />
                    <SkillCard icon={GithubIcon} title="GitHub" />
                </SkillMarquee>
            </div>
        </div>
    );
};

export default SkillStack;
