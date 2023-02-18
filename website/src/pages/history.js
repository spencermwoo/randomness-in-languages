import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const HistoryPage = () => {
  return (
    <Layout pageTitle="History">
      <small>April 30, 2011</small>
      <p>
        In the beginning was my High School project fair.  

        <br></br><br></br>
        
        <StaticImage alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair" src="../images/clifford.jpg"/>

        <br></br><br></br>
        The original project was with Javascript, Java, AS3, Visual Basic, and Python.
        
        <br></br><br></br>
        
      </p>

      <br></br>      
      <hr></hr>
      <br></br>

      <small>February 19, 2015</small>

      <p>
        After some time, I had college hosting and put up a poor-man's version of this project.
        
        <br></br><br></br>
        
        The project expanded with a few additional languages.  The website was coded in vanilla javascript using templates from programming classes -- it was functional and will remain archived.
        
      </p>

      <p>When I put a version of that project online via my college website hosting.</p>


      <br></br>
      <hr></hr>
      <br></br>

      <small>February 19, 2021</small>

      <p>
        I revisit this project on its tenth anniversary.
        
        <br></br><br></br>

        For DigitalOcean's <a href="https://hacktoberfest.com/">hacktoberfest</a> I thought to expand, have a proper website, and make it a communtiy project where other's can submit a simple program in their language of choice.
        
        <br></br><br></br>

        Unfortunately it did not progress significantly during this time.
      </p>
      
      <br></br>
      <hr></hr>
      <br></br>

      <small>December 29, 2023</small>

      <p>
        With the release of <a href="https://chat.openai.com/">ChatGPT</a>, it became the perfect opportunity to generate tedious, low-IQ, grunt-work in an array of programming languages.
        
        <br></br><br></br>
        This project is considered completed and satisfactory.  That said, any <a href="https://github.com/spencermwoo/randomness-in-programming-languages">PRs</a> are welcome to improve the statistics, website design, or programming langauges.
        <br></br><br></br>

        Thanks for your attention.
        
      </p>
      
      <br></br>
    </Layout>
  )
}

export const Head = () => <Seo title="History" />

export default HistoryPage
