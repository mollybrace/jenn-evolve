import React from 'react'

interface FeedbackCardProps {
  text: string;
  name: string;
  country: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ text, name, country }) => (
    <div className="flex justify-between  flex-col  px-10 py-12 rounded-[20px]  max-w-[370px]  mx-auto my-0 feedback-card bg-khaki-green">
     
      <p className="text-[18px] border border-black leading-[32.4px] text-khaki my-10">
        {text}
      </p>
  
      <div className="flex flex-row text-white">
    
        <div className="flex flex-col ml-4 ">
          <h4 className="font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-italic text-[16px] leading-[24px] text-dimWhite italic">
            {country}
          </p>
        </div>
      </div>
    </div>
  );

export default FeedbackCard