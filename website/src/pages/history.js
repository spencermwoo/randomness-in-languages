import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const HistoryPage = () => {
  return (
    <Layout pageTitle="History">
      <small>April 30, 2011</small>
      <p>
        In the beginning was High School project fair.  
        
        <br></br><br></br>
        
      </p>
      
      <hr></hr>

      <br></br>

      <small>February 19, 2015</small>

      <p>
        After some time, I had college hosting and put up a poor-man's version of this project.
        
        <br></br><br></br>
        
        The project expanded with a few additional languages.  The website was coded in JS using handlebars and templates from programming classes -- it was functional and will remain archived.
        
      </p>

      <p>When I put a version of that project online via my college website hosting.</p>

      <hr></hr>

      <br></br>

      <small>February 19, 2021</small>

      <p>
        I opened randomness-in-programming-languages on github to revisit this project on its tenth anniversary.
        
        <br></br><br></br>

        I wanted to expand it, have a proper website, and make it a community project where other's can submit a simple program in their language of choice.  I also wanted to participate and help others for Github's HACKTOBERFEST.
        
      </p>
      
      <br></br>

      <hr></hr>

      <br></br>

      <small>December 29, 2023</small>

      <p>
        I am playing around with the newly released ChatGPT-3 and realize it isn't great at programming.  But what it's powerful at is grunt-work.  Perfect for my tedious, low-IQ programming project here.
        
        <br></br><br></br>

        Given a bunch of confounding factors, I moved and took some time off to figure out my living situation.  During this time, I decided to finish this project properly because HACTOBERFEST contributions would never do it.  I could simply hack up some website like before but instead decided to try and make it interesting -- I learnt GatsbyJS, GraphQL, and AWS for this project.  Nothing complicated as I've worked with similiar frameworks/technologies but still had the beginning growing-pains.  I definitely welcome any PRs to improve my design or add to any language.

        I am happy with this conclusion.  I would happily welcome any PR to improve the statistics, website design, or adding programming langauges.
        <br></br><br></br>

        Thanks for your attention.
        
      </p>
      
      <br></br>
    </Layout>
  )
}

export const Head = () => <Seo title="History" />

export default HistoryPage
