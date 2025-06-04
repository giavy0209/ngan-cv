import React from 'react';
import { CvData } from '../types';
import { EmailIcon, PhoneIcon, LocationIcon } from '../constants'; // Assuming these are simple styled SVGs

interface HeaderProps {
  data: Pick<CvData, 'name' | 'nickname' | 'title' | 'profileImageUrl' | 'contact'>;
}


const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="py-8 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Part: Image and Name/Title */}
        <div className="flex items-center mb-6 md:mb-0">
          <img 
            src={data.profileImageUrl} 
            alt={`${data.name} profile`} 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-sm" // Simplified border/shadow
          />
          <div className="ml-4 md:ml-6">
            <p className="text-xs text-gray-600 mb-1">{data.title}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              {data.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">({data.nickname})</p>
          </div>
        </div>

        {/* Right Part: Contact Info */}
        <div className="text-xs md:text-sm space-y-1.5 md:text-left mt-4 md:mt-0 self-start md:self-center">
          <div className="flex items-center">
            <span className="text-black mr-1.5 text-base">☑</span> {/* PDF checkmark */}
            <a href={`mailto:${data.contact.email}`} className="text-gray-700 hover:text-black">{data.contact.email}</a>
          </div>
          <div className="flex items-center">
            {/* Using a text '+' as per PDF for location and phone, if icons are not preferred for direct match */}
            <span className="text-black mr-1.5 font-semibold">+</span> 
            {/* <LocationIcon className="w-3.5 h-3.5 mr-1.5 text-black" /> */}
            <span className="text-gray-700">{data.contact.location}</span>
          </div>
          <div className="flex items-center">
             <span className="text-black mr-1.5 font-semibold">+</span>
            {/* <PhoneIcon className="w-3.5 h-3.5 mr-1.5 text-black"/>  */}
            <span className="text-gray-700">{data.contact.phone}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
