import React from 'react';
import './SkillStack.css';
import { Marquee } from '../../Component/SkillCards/marquee';
const SkillStack = () => {
    return (
        <div id="skillstack">
            <h2>My Skill Stack</h2>
            <Marquee />

        </div>
    );
};

export default SkillStack;