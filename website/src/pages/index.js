import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
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
        
        We've all learnt about memory allocation, code optimization, various data structures -- all for the purpose of reducing time complexity.  While ostensibly it's more useful to invest time in marking sense and order of randomness, the consistent and accurate generation of random numbers holds an equal importance in today's applications and is the subject of this project, namely <i>generating entropy</i>.
      
        <br></br><br></br>

        <h3>Randomness</h3>
      
        Intuitively, one can understand that nothing is truly random.

        <br></br><br></br>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For instance, think of the most traditional event illustrating randomness: flipping a coin.  If we know all of the variables involved in flipping the coin (the mass of the coin, the force, the angle of force, the wind resistance, etc), we could calculate the outcome of the coinflip with complete accuracy.
      
        <br></br><br></br>
      
        The word "random" is more accurately defined as an event which "lacks predictability".
        
        <br></br><br></br>
        
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weather -- once largely considered random, controlled by the Gods -- has been "figured out" and is now forecasted weeks in advance.  History testifies that as technology progresses, our tools allow us to decipher patterns that were once regarded as random or implausibly complex.  Understanding the world and unraveling all wonder is framed as a positive thing however . . .
      
        <br></br><br></br>

        <h3>Cryptography</h3>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cryptographic integrity is directly related to our ability to generate complex patterns.  The basis of modern technological security is creating math codes which are infeasible to decipher in a modern timeframe, which directly results in the confidence and use-ability of any website, webservice, or e-product.

        <br></br><br></br>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What value is a lock that opens with any combination or key?

        <br></br><br></br>
        
        <h3>TLDR;</h3>
                This project is a statistical analysis of the pseudo-random number generators within various popular programming languages.
        
        
      </p>
    </Layout>
  )

  // <StaticImage
  //       alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
  //       src="../images/clifford.jpg"
  //     />
}

export const Head = () => <Seo title="Introduction" />

export default IntroductionPage
