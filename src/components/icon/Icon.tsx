import React from 'react'
import './Icon.scss'

export interface IconProps {
  image: string
  alt?: string
  className?: string
  style?: any
}

const Icon: React.FC<IconProps> = ({ image, className, alt = 'alt', style = {} }) => {
  return <img style={style} alt={alt} className={`icon ${className || ''}`} src={image}></img>
}

export default Icon
