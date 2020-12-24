import React, { useEffect } from 'react';
import { useDencrypt } from "use-dencrypt-effect";

export default function Service2 ({entered}) {

  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    if (entered) {
      dencrypt('Front end performance optimization')
    }
  }, [entered]);

  return(
    <div className='w-full mt-16' >
      <h3 className='text-2xl text-gray-600 font-semibold break-words' style={{fontFamily: 'Montserrat'}}>{result}</h3>
    </div>  
  )
}