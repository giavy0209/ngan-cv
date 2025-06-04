
import React from 'react';
import { CvData } from '../types';
import { EmailIcon, PhoneIcon, LocationIcon } from '../constants';

interface HeaderProps {
  data: Pick<CvData, 'name' | 'nickname' | 'title' | 'profileImageUrl' | 'contact'>;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white p-6 md:p-10 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Decorative background pattern or subtle image if desired */}
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        <img 
          src={data.profileImageUrl} 
          alt={`${data.name} profile`} 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-200 shadow-xl mb-6 md:mb-0 md:mr-8 object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {data.name} <span className="text-gray-400 text-3xl md:text-4xl">({data.nickname})</span>
          </h1>
          <p className="text-xl md:text-2xl text-sky-300 mt-1">{data.title}</p>
          <div className="mt-4 space-y-2 md:space-y-0 md:space-x-6 md:flex">
            <div className="flex items-center justify-center md:justify-start">
              <EmailIcon className="w-5 h-5 mr-2 text-sky-300" />
              <a href={`mailto:${data.contact.email}`} className="hover:text-sky-400 transition-colors">{data.contact.email}</a>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <LocationIcon className="w-5 h-5 mr-2 text-sky-300" />
              <span>{data.contact.location}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <PhoneIcon className="w-5 h-5 mr-2 text-sky-300" />
              <span>{data.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
