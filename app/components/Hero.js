'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeroImage from '../../public/hero.jpg';
import { FaSearch } from "react-icons/fa";

const skillsArray = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Python', 'Angular', 'Vue.js'];

const SkillsBadge = ({ skill, onClick, selected}) => {
  const handleClick = () => {
    onClick(skill);
  };

  return (
    <span className={`inline-block p-2 m-2 rounded-lg cursor-pointer ${
      selected ? 'bg-secondary text-beige' : 'bg-neutral text-beige'
    }`}
    onClick={handleClick}
    >
      {skill}
    </span>
  )
}

const Hero = () => {
  const router = useRouter();
  const [selectSkills, setSelectSkills] = useState([]);

  // const handleSearch = (query) => {
  //   // Redirect to a search results page or handle the search logic
  //   router.push(`/search`);
  // };

  const handleSkillClick = (skill) => {
    // Toggle the skill in the selectedSkills array
    setSelectSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((prevSkill) => prevSkill !== skill)
        : [...prevSkills, skill]
    );
  };

  return (
    <div
      className="bg-cover h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.7)), url(${HeroImage.src})`,
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-wide mb-4 text-neutral">Explore Your Interests</h1>
        <h3 className="text-xl font-normal tracking-normal text-beige">
          We&apos;ll recommend content based on your interests we&apos;ve listed here.
        </h3>
        <h3 className="text-xl font-normal tracking-normal mb-10 text-beige">
          Feel free to add or remove topics to customize your experience.
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search your skills..."
            className="p-2 rounded-full pl-12 w-1/2 mb-10"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <FaSearch className="absolute left-40 top-3 ml-4 text-secondary" />
        </div>
        <h2 className="text-2xl font-semibold tracking-wide mb-4 text-neutral">Click the skills that interest you!</h2>
        <div>
          {skillsArray.map((skill) => (
            <SkillsBadge
              key={skill}
              skill={skill}
              onClick={handleSkillClick}
              selected={selectSkills.includes(skill)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
