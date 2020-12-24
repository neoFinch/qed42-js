import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useDencrypt } from "use-dencrypt-effect";

export default function Service1 () {

  const service = ["Progressive", "web", "application", "Progressive web application"];

  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(service[i]);
      i = i === service.length - 1 ? 0 : i + 1;
    }, 1500);

    return setTimeout(() =>{clearInterval(action);}, 7000);
  }, []);

  return(
    <div className='w-full mt-16 absolute' style={{ top: '236px'}}>
      <h3 className='text-2xl text-gray-600 font-semibold' style={{fontFamily: 'Montserrat'}}>{result}</h3>
    </div> 
  )
}