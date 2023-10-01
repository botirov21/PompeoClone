import React from 'react'
import { ContactInfo, FotterDIv } from './fotterStyle'
import Logo14 from "../assets/gmailImage.png";
import Logo15 from "../assets/findImage.png";
import Logo16 from "../assets/callImage.png";

const Fotter = () => {
  return (

    <FotterDIv>
      <div><h1>Pompeo</h1>
      <p className='FooterTitleP'>I have always striven to fix beauty in wood, stone, glass or pottery, that has been my creed.
      </p>
      </div>
      <ContactInfo>
           <div className='contactdiv'>
             <img className='imageSize' src={Logo14} alt="img" />
              <h6>EMAIL</h6>
              <p>pompeopotery@gmail.com</p>
           </div>
           <div className='contactdiv'>
             <img className='imageSize' src={Logo15} alt="img" /> 
             <h6>FIND</h6>
             <p>Central Park, Manhattan New York, 1101</p>
           </div>
           <div className='contactdiv'>
             <img className='imageSize' src={Logo16} alt="img" />
             <h6>CALL</h6>
             <p>+1 292 345 678</p>
           </div>
      </ContactInfo>
    </FotterDIv>

  )
}

export default Fotter
