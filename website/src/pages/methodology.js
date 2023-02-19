import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const MethodologyPage = () => {
  return (
    <Layout pageTitle="Methodology">
      
      <p>
        This project conducts three tests on each programming language :
        
        <br></br><br></br>

        <table><tr><td align="left">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) 1 Million Trials,</td><td> Numbers 1 - 10
        </td></tr><tr><td align="left">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) 1 Billion Trials,</td><td> Numbers 1 - 10
        </td></tr><tr><td align="left">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3) 1 Million Trials,</td><td> Numbers 1 - 1000
        </td></tr></table>

        <br></br><br></br>

        <table>
          <tr><td align="left">Randomization</td><td> : Generate random numbers via the language</td></tr>
          <tr><td align="left">Frequency</td><td> : Count the number of occurances for each number </td></tr>
          <tr><td align="left">Percentage</td><td> : Divide the Frequency by the number of Trials </td></tr>
          <tr><td align="left">Output</td><td> : Write each number's occurance precentage </td></tr>
          <tr><td align="left">Statistics</td><td> : Calculate the standard deviation </td></tr>
          <tr><td align="left">Graph</td><td> : Plot the actual and expected results for visualization </td></tr>
        </table>

        <br></br><br></br>
        <a href ="https://en.wikipedia.org/wiki/Statistical_population">Statistical population</a>: the generated data
        <br></br>
        <a href = "https://en.wikipedia.org/wiki/Statistical_significance">Statistical significance</a>: the difference in the actual and expected
        <br></br>
        <a href = "https://en.wikipedia.org/wiki/Variance">Variance</a>: the spread of the actual and expected probabilities
        <br></br>
        <a href = "https://en.wikipedia.org/wiki/Standard_deviation">Standard deviation</a>: the formatted variance
        <br></br>
        <a href = "https://en.wikipedia.org/wiki/Standard_score">Z-score</a>: standard deviation values normalized
        
        <br></br><br></br>
        For each of the three tests, compare across all languages to determine which language's PRNG performed more closely to the corresponding expected uniform random distribution.
        
        <br></br><br></br>
        View the results here:
        <br></br><br></br>
        <center><a href="https://prng.akrasia.dev/results/">https://prng.akrasia.dev/results/</a></center>
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Methodology" />

export default MethodologyPage
