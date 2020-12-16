import React  from 'react';
import NOVARTIS from '../../images/novartis-client-logo (1).png'
import MGM from '../../images/mgm-client-logo.png'
import ACQUIA from  '../../images/acquia-client-logo.png';
import NESTLE from '../../images/nestle-client-logo.png';
import STANFORD_UNIVERSITY from '../../images/stanford-client-logo.png';
import AAMAADMI from '../../images/aamc-client-logo.png';
import ARIA from '../../images/aria-client-logo.png';
import ASHOKA from '../../images/ashoka-logo.png';
import FILA from '../../images/fila-client-logo.png';
import HP from '../../images/hp-client-logo.png';
import ILAO from '../../images/ilao-client-logo.png';
import INTEL from '../../images/intel-client-logo.png';
import NRDC from '../../images/nrdc-client-logo.png';
import NYC from '../../images/nyc-client-logo.png';
import PWC from '../../images/pwc-client-logo.png';
import SAB_MILLAR from '../../images/sabmiller-client-logo.png';
import SONY from '../../images/sony-client-logo.png';
import TISS from '../../images/tiss-client-logo.png';
import UBM from '../../images/ubm-client-logo.png';
import UNITARIAN from '../../images/unitarian-client-logo.png';
import WARNER from '../../images/warner-client-logo.png';
import IITB from '../../images/iitb-logo.png';

import './style.css';


export default function Client() {

  return (
    <div className='box-border w-full flex flex-col justify-between	flex-wrap mt-12 min-h-screen px-12 py-12 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500'  >
      <div className='flex px-12 max-w-full w-screen justify-evenly move' >
        <img src={NOVARTIS} className="element1"   style={{ animation:'stretch 4.5s ease-out 60s 2 alternate'}} />
        <img src={MGM} className="element5"   style={{ animation:'stretch 5s ease-out 280s 2 alternate'}}/>
        <img src={NESTLE} className="element4"  style={{ animation:'stretch 1s ease-out 50s 2 alternate'}}/>
        <img src={AAMAADMI} className="element3"  style={{ animation:'stretch 3s ease-out 10s 2 alternate'}}/>
      </div>
      <div className='flex px-12 w-full justify-evenly' >
        <img src={ACQUIA} className="element6"  style={{ animation:'stretch 6.5s ease-out 85s 2 alternate'}} />
        <img src={WARNER} className="element2"  style={{ animation:'stretch 3s ease-out 115s 2 alternate'}}/>
        <img src={STANFORD_UNIVERSITY} className="element5"  style={{ animation:'stretch 7s ease-out 175s 2 alternate'}}/>
        <img src={UNITARIAN} className="element6"  style={{ animation:'stretch 3s ease-out 150s 2 alternate'}}/>
      </div>
      <div className='flex px-12  w-full justify-evenly' >
        <img src={NRDC} className="element3"  style={{ animation:'stretch 3s ease-out 105s 2 alternate'}}/>
        <img src={PWC} className="element5"  style={{ animation:'stretch 3s ease-out 70s 2 alternate'}}/>
        <img src={SONY} className="element4"  style={{ animation:'stretch 3s ease-out 195s 2 alternate'}}/>
        <img src={ARIA} className="element1"   style={{ animation:'stretch 3s ease-out 250s 2 alternate'}}/>
        <img src={UBM} className="element3"   style={{ animation:'stretch 3s ease-out 265s 2 alternate'}}/>
        <img src={TISS} className="element6"   style={{ animation:'stretch 3s ease-out 300s 2 alternate'}}/>
        <img src={HP} className="element2"   style={{ animation:'stretch 3s ease-out 350s 2 alternate'}}/>
        <img src={NYC} className="element4"   style={{ animation:'stretch 3s ease-out 20s 2 alternate'}}/>
      </div>
      <div className='flex px-12  w-full justify-evenly' >
        <img src={FILA} className="element2 my-0"  style={{ animation:'stretch 3s ease-out 130s 2 alternate'}}/>
        <img src={INTEL} className="element1 my-0"  style={{ animation:'stretch 3s ease-out 160s 2 alternate'}}/>
        <img src={SAB_MILLAR} className="element6 my-0"  style={{ animation:'stretch 3s ease-out 220s 2 alternate'}}/>
        <img src={ILAO} className="element5 my-0"   style={{ animation:'stretch 3s ease-out 40s 2 alternate'}}/>
        <img src={IITB} className="element3 mx-0 my-0"   style={{ animation:'stretch 3s ease-out 30s 2 alternate'}}/>
        <img src={ASHOKA} className="element3 mx-0 my-0"   style={{ animation:'stretch 3s ease-out 320s 2 alternate'}}/>
      </div>
    </div>
  );
}

