import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import { SectionHeading } from '@/types'

const SectionHeading = ({tag, headingDark, headingGrey, }: SectionHeading) => {
  return (
    <div className='section-heading'>
      <div className="Heading-XXS bold tag">{tag}</div>
      <div className="Text-XL medium heading"><span>{headingDark}</span> {headingGrey}</div>
      <div className='button-grp'> 
        <ButtonPrimary title="Start a project" />
        <ButtonSecondary title="Learn More" />
      </div>
    </div>
  )
}

export default SectionHeading