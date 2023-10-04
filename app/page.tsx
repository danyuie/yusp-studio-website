import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Project from './components/Project'
import Questions from './components/Questions'

const layout = ({children }: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar />
      <main>
        <section className='container-global'>
          <Hero/>
        </section>
        <section className='container-global'>
          <Services />
        </section>
        <section className='container-global'>
          <Project/>
        </section>
        <section className='container-global'>
          <Questions />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default layout