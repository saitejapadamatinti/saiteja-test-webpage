import React from 'react'
import './index.css'


const IconWithTextCard = ({cardContent}) => {
    const {id, icon, head, para} = cardContent
  return (
    <div className='icon-card-div'>
        <div>
          <img alt={id} src={icon} className='chose-card-icon' />
        </div>
        <h4 className='icon-card-head'>{head}</h4>
        <p className='icon-card-para'>{para}</p>
    </div>
  )
}

export default IconWithTextCard