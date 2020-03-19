import React from 'react'
import './Icon.scss'

export interface IconProps {
  image: string
  alt?: string
  className?: string
  style?: any
  tooltip?: string
}

const Icon: React.FC<IconProps> = ({ image, className, alt = 'alt', style = {}, tooltip = '' }) => {
  return (
    <>
      <img
        style={style}
        alt={alt}
        className={`icon ${className || ''}`}
        data-tip={tooltip}
        src={image}
      ></img>
    </>
  )
}

export default Icon
