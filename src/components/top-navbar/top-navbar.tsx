import React from 'react';
import Image from 'next/image';

const TopNavbar = () => {
  return (
    <div className="bg-gray-100 text-black py-2 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-8 text-sm">
          <div className="flex items-center">
            <span className="text-black mr-2">phone: 956 742 455 678 |</span>
          </div>
          <div className="flex items-center">
            <span className="text-black mr-2">email: info@ddsgnr.com</span>
            
          </div>
        </div>

        <div>
          <Image
            src="/images/Social Links.svg"
            alt="Social Media Links"
            width={132}
            height={24}
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
