import React from 'react';

const MintCard = ({ avatar, info, info1, info2, content1, content2 }) => {
  return (
    <div className="w-full max-w-xs p-6 rounded-3xl bg-gradient-to-br from-[#AEE1CF] to-[#7ABBA0] shadow-lg shadow-[#4A8C78]/50 flex flex-col">
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 bg-[#D6F0E3]/90 rounded-2xl mr-4 flex-shrink-0">
          <img src={avatar} alt="Avatar" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="flex flex-col space-y-2 flex-grow">
          <h3 className="text-lg font-semibold text-[#2C5446] break-words">{info}</h3>
          <div className="bg-[#D6F0E3]/90 rounded-md p-2">
            <p className="text-sm text-[#4A8C78]">{info1}</p>
          </div>
          <div className="bg-[#D6F0E3]/90 rounded-sm p-1">
            <p className="text-xs text-[#4A8C78]">{info2}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#D6F0E3]/90 rounded-xl p-3 mb-2">
        <p className="text-sm text-[#2C5446]">{content1}</p>
      </div>
      <div className="bg-[#D6F0E3]/90 rounded-md p-2">
        <p className="text-xs text-[#4A8C78]">{content2}</p>
      </div>
    </div>
  );
};

export default MintCard;
