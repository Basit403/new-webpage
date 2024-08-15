import React from 'react';
import './brand.css';
import { goggle, slack, atlassian, dropbox, shopify } from './imports';


const Brand = () => {
  return (
    <div className='gpts__brand section-padding'>
      <div>
        <img src={goggle} alt='goggle'></img>
      </div>

      <div>
        <img src={slack} alt='slack'></img>
      </div>

      <div>
        <img src={atlassian} alt='atlassian'></img>
      </div>

      <div>
        <img src={dropbox} alt='dropbox'></img>
      </div>

      <div>
        <img src={shopify} alt='shopify'></img>
      </div>
    </div>
  )
}

export default Brand
