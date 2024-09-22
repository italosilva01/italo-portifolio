import React from 'react';

interface ResumeExperienceProps {
  text: string;
  principalText: string;
}
const ResumeExperience = ({ text, principalText }: ResumeExperienceProps) => {
  return (
    <div className="max-w-52 flex flex-col justify-center items-center">
      <p className="text-purple-dark">{text}</p>
      <h2 className="text-purple-dark text-[32px] font-bold">
        {principalText}
      </h2>
    </div>
  );
};

export default ResumeExperience;
