import React from "react";

export default function Button({children}) {
  return (
    <button className=' relative py-2 px-3 rounded-lg w-[50%] font-medium text-sm bg-gradient-to-b from-[#1d1d1d] to-[#6286a1] shadow-[0px_0px_12px_#6286a1]'>
      <div className=' absolute inset-0'>
        <div className=' rounded-lg absolute inset-0 border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
      </div>
      <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
      <div className=' absolute inset-0 shadow-[0_0_10px_rgb(98, 134, 161)_inset] rounded-lg'></div>
      <span className='text-white'>{children}</span>
    </button>
  );
}
