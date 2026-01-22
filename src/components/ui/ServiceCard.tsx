import React from 'react'

type serviceCardProps = {
    icon: string,
    title: string,
    description: string
}

const ServiceCard = ({
    icon,
    title,
    description
}:serviceCardProps) => {
  return (
    <div className='w-1/4 h-10'>
        <h3><span>{icon}</span>{title}</h3>
        <p>{description}</p>
      
    </div>
  )
}

export default ServiceCard
