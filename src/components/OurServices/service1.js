import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useDencrypt } from "use-dencrypt-effect";

export default function Service1 ({entered}) {

  const service = ["Progressive web application"];

  const { result, dencrypt } = useDencrypt();
  
  useEffect(() => {
    if (entered) {
      dencrypt('Progressive web application');
    }
  }, [entered]);

  return(
    <div className='w-full mt-16 py-10'>
      <h3 className='text-2xl text-gray-600 font-semibold' style={{fontFamily: 'Montserrat'}}>{result}</h3>
    </div> 
  )
}