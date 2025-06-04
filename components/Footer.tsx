
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-12">
      <p>&copy; {new Date().getFullYear()} Ngan Nguyen (Emma). All rights reserved.</p>
      <p className="mt-2 text-gray-400">Thanks for watching!</p>
    </footer>
  );
};

export default Footer;
