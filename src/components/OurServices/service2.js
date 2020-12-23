import React, { useEffect } from 'react';
import { useDencrypt } from "use-dencrypt-effect";

export default function Service2 () {

  const service = ["Front", "end", "performance", "optimization", "Front end performance optimization"];

  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    let k = 0;

    const action = setInterval(() => {
      dencrypt(service[k]);
      k = k === service.length - 1 ? 0 : k + 1;
    }, 3000);

    return setTimeout(() =>{clearInterval(action);}, 15000);
  }, []);

  return(
    <div className='w-full mt-16 absolute' style={{ top: '95px'}} >
      <h3 className='text-2xl text-gray-600 font-semibold break-words' style={{fontFamily: 'Montserrat'}}>{result}</h3>
    </div>  
  )
}