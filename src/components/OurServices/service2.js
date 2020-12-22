import React, { useEffect } from 'react';
import { useDencrypt } from "use-dencrypt-effect";

export default function Service2 () {

  const service = ["/", ".", "-", "Front end performance optimization"];

  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    setTimeout(() => {
      dencrypt('Front end performance optimization');
    }, 4000)
  }, []);

  return(
    <div className='w-full mt-16 absolute' style={{ top: '95px'}} >
      <h3 className='text-2xl text-gray-600 font-semibold break-words' style={{fontFamily: 'Montserrat'}}>{result}</h3>
    </div>  
  )
}