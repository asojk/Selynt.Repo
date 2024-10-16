import React from 'react';
import { images } from './lib/assets';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-n-light dark:bg-n-dark ">

      <img
              src={images.error}
              alt='404 Page Not Found'
              className='relative z-[1000] w-full max-w-6xl'
            />

    </div>
  );
};

export default NotFound;
