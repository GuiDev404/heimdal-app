import React from 'react'

interface SectionProps {
  className?: string
  children: React.ReactNode
  title?: string
}

const Section: React.FC<SectionProps> = ({ className, title, children }) => {
  return (
    <div className={`flex flex-col bg-white p-6 rounded-md border ${className}`}>
      {title !== null &&
        <h2 className='text-center md:text-left text-2xl font-thin font-display mb-2'> {title} </h2>}
      {children}
    </div>
  )
}

export default Section
