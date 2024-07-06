import React from 'react';

import { LOADER_CDN } from '../../utils/assets';

const CustomLoader = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-white ">
      <div className="h-40 w-40">
        <img src={LOADER_CDN} alt="loading" />
      </div>
    </div>
  );
};

export default CustomLoader;
