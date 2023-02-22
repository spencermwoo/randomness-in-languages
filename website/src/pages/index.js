import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IntroductionPage = () => {
  return (
    <Layout pageTitle="Introduction">

      This project is a statistical analysis of the pseudo-random number generators within various popular programming languages.
      
      <br></br><br></br>
      <hr></hr>
      <br></br>

      <small>February 19, 2015</small>
      <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In my computer science career I've typically been tasked with solving the problem of <i>reducing entropy</i>.  
        
        <br></br><br></br>
        
        We've all learnt about memory allocation, code optimization, various data structures -- all for the purpose of reducing time complexity.  While ostensibly it's more useful to invest time in marking sense and order of randomness, the consistent and accurate generation of random numbers holds an equal importance in today's applications and is the subject of this project: <i>generating entropy</i>.
      
        <br></br><br></br>

        <h4>Randomness</h4>
      
        Intuitively, one can understand that nothing is truly random.

        <br></br><br></br>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For instance, consider the most traditional random event: flipping a coin.  The odds of each outcome is fifty percent and equally likely however if we were to uncover all of the variables involved in flipping the coin (the mass of the coin, the force, the angle of force, the wind resistance, etc), we could calculate the outcome of the coinflip with complete accuracy.  Randomness exists solely as theoretical concept.
      
        <br></br><br></br>
      
        The word "random" is more accurately defined as an event which "lacks predictability".
        
        <br></br><br></br>
        
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weather - once largely considered random, controlled by the Gods - has been "figured out" and is now forecasted weeks in advance on any local news station.  History testifies that as technology progresses, our tools allow us to decipher patterns that were once regarded as random and implausibly complex.  Understanding the world and unraveling all wonder is framed as a net-positive for humanity however . . .
      
        <br></br><br></br>

        <h4>Cryptography</h4>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cryptographic integrity is directly related to our ability to generate complex patterns.  The basis of modern technological security is creating math codes which are infeasible to decipher in a modern timeframe.  This strong entropy in asymmetric cryptography directly results in the confidence and use-ability of all modern important technologies: any website, webservice, or e-product.

        <br></br><br></br>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What value is a lock that opens with any combination or key?

        <br></br><br></br>
        
        <h4>TLDR;</h4>
                This project is a statistical analysis of the pseudo-random number generators within various popular programming languages.
        
        
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Introduction" />

export default IntroductionPage
