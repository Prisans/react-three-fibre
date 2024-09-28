import { Scroll } from '@react-three/drei'
import './Overlay.css'
import React from 'react'

const Section = (props) =>{
    return(
        <section className='section'>
            <div className="container">
                <div className="txt">
                    {props.children}
                </div>
            </div>
        </section>
    )
}

const Overlay = () => {
  return (
    <Scroll html >

        <Section>
            <h1 className='heading' >Hello I'm Prisans</h1>
            <p>Working on cool stuff.</p>
            </Section>

        

        </Scroll>
  )
}

export default Overlay
