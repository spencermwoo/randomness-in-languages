import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const HistoryPage = () => {
  return (
    <Layout pageTitle="History">
      <small>April 30, 2011</small>
      <p>
        In the beginning was a High School project fair.  

        <br></br><br></br>
        <StaticImage alt="high school project" src="../images/hs1.png"/>

        <br></br><br></br>
        The original project used ActionScript 3 (AS3), Java, JavaScript.
      </p>

      <br></br>      
      <hr></hr>
      <br></br>

      <small>February 19, 2015</small>
      <p>
        After many years, this project was revisited and expanded with additional languages: Swift, Python, and Visual Basic.
        
        <br></br><br></br>
        
        A simple vanilla javascript website with handlebars.js templating was hosted via college hosting.
      </p>

      <br></br>
      <hr></hr>
      <br></br>

      <small>February 19, 2021</small>

      <p>
        After some time, the project was revisited on its tenth anniversary.
        
        <br></br><br></br>
        The project is reopened for DigitalOcean's <a href="https://hacktoberfest.com/">hacktoberfest</a> with the goal of expansion, a proper website, and open contribution.
        <br></br><br></br>

        Unfortunately it did not progress significantly during this time.
      </p>
      
      <br></br>
      <hr></hr>
      <br></br>

      <small>February 21, 2023</small>

      <p>
        With the release of <a href="https://chat.openai.com/">ChatGPT</a>, the generation of tedious, low-IQ, grunt-work in an array of programming languages became straightforward.
        
        <br></br><br></br>
        This project is considered completed and satisfactorily concluded.  That said, any <a href="https://github.com/spencermwoo/randomness-in-programming-languages">PRs</a> are welcome as there is plenty to improve (statistics, website, programming languages, etc).
        <br></br><br></br>

        Thanks for your attention.
      </p>
      
      <br></br>
    </Layout>
  )
}

export const Head = () => <Seo title="History" />

export default HistoryPage
