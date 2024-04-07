import React from 'react'

interface IconProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
  strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
}

export const MapPinIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
      <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z' />
    </svg>
  )
}
