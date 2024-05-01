import React, { useState } from 'react';
import './CharacterTemplate.css'; // Import your CSS file for styling

const CharacterTemplate = ({ selectedSkills, onRemoveSkill }) => {
  const [skillScores, setSkillScores] = useState({});

  const handleScoreChange = (skill, value) => {
    // Ensure the input value is a valid decimal between 0.0 and 120.0 or an empty string
    if (
      value === '' || // Allow empty string
      (/^\d+(\.\d)?$/.test(value) && parseFloat(value) >= 0 && parseFloat(value) <= 120) // Check for valid decimal with one decimal place
    ) {
      setSkillScores(prevScores => ({ ...prevScores, [skill]: value }));
    }
  };

  const handleRemoveClick = (skill) => {
    onRemoveSkill(skill); // Call the onRemoveSkill function with the skill to remove
    // Remove the skill score from state if it exists
    if (skillScores.hasOwnProperty(skill)) {
      const { [skill]: removedSkill, ...remainingSkills } = skillScores;
      setSkillScores(remainingSkills);
    }
  };

  // Calculate the total score by summing up all skill scores
  const totalScore = Object.values(skillScores).reduce((total, score) => total + parseFloat(score || 0), 0);
  const isScoreAboveLimit = totalScore > 720.0; // Check if total score is above 720.0

  return (
    <div className="characterTemplate">
      <ol className="ctSkillList">
        {selectedSkills.map((skill, index) => (
          <li key={index}>
            {skill}
            <input
              className="scoreInput"
              type="number"
              min="0"
              max="120"
              step="0.1" // Allow decimal numbers with one decimal place
              value={skillScores[skill] || ''}
              onChange={(e) => handleScoreChange(skill, e.target.value)}
            />
            <button className="removeButton" aria-label="Remove Skill" onClick={() => handleRemoveClick(skill)}>X</button>
          </li>
        ))}
      </ol>
      <h3 className={isScoreAboveLimit ? 'skillTotal redText' : 'skillTotal'}>Skill Total: {totalScore.toFixed(1)}</h3>
    </div>
  );
};

export default CharacterTemplate;
