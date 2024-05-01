import React, { useState, useEffect } from 'react';
import SearchableDropdown from './SearchableDropdown';
import './MainSection.css';
import CharacterTemplate from './CharacterTemplate'; // Import the CharacterTemplate component

const MainSection = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Define searchQuery state

  useEffect(() => {
    const initialSkillsList = [
      'Alchemy', 'Anatomy', 'Animal Lore', 'Animal Taming', 'Arcane', 'Archery', 'Arms Lore', 'Begging', 'Blacksmithy', 'Camping', 'Carpentry', 'Cartography', 'Chivalry', 'Cooking', 'Detecting Hidden', 'Discordance', 'Evaluating Int', 'Fencing', 'Fishing', 'Focus', 'Forensic Eval', 'Healing', 'Herding', 'Hiding', 'Inscription', 'Item ID', 'Lockpicking', 'Lumberjacking', 'Mace Fighting', 'Magery', 'Meditation', 'Mining', 'Musicianship', 'Necromancy', 'Parrying', 'Peacemaking', 'Poisoning', 'Provocation', 'Resisting Spells', 'Snooping', 'Spirit Speaking', 'Stealing', 'Stealth', 'Swordsmanship', 'Tactics', 'Tailoring', 'Taste ID', 'Tinkering', 'Tracking', 'Veterinary', 'Wrestling'
    ];
    initialSkillsList.sort(); // Sort the initial skills list alphabetically
    setSkillsList(initialSkillsList);
  }, []);

  const handleSkillSelect = (selectedSkill) => {
    setSelectedSkills([...selectedSkills, selectedSkill]);

    // Remove the selected skill from the skillsList array
    const updatedSkillsList = skillsList.filter(skill => skill !== selectedSkill);
    updatedSkillsList.sort(); // Sort the updated skills list alphabetically
    setSkillsList(updatedSkillsList);
  };

  const handleRemoveSkill = (removedSkill) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== removedSkill));

    // Add the removed skill back to the skillsList array
    const updatedSkillsList = [...skillsList, removedSkill];
    updatedSkillsList.sort(); // Sort the updated skills list alphabetically
    setSkillsList(updatedSkillsList);
  };

  return (
    <div className="mainWrapper">
      <div className="selectedSkills">
        <h1>Character Skills</h1>
        <CharacterTemplate selectedSkills={selectedSkills} onRemoveSkill={handleRemoveSkill} />
      </div>
      <div className="mainLeft">
      <SearchableDropdown
        items={skillsList}
        onSelect={handleSkillSelect}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      </div>
    </div>
  );
};

export default MainSection;
