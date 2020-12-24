import React, { useEffect } from 'react';
import { useDencrypt } from "use-dencrypt-effect";

export default function Service2 () {

  const service = ["Front", "end", "performance", "Front end performance optimization"];

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
    <div className='w-full mt-16 absolute' style={{ top: '95px'}} >
      <h3 className='text-2xl text-gray-600 font-semibold break-words' style={{fontFamily: 'Montserrat'}}>{result}</h3>
    </div>  
  )
}