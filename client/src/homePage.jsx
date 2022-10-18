import React, { useState } from 'react'
// import "./homePage.css";
import Axios from "axios";
import Navbar from './NavBar/navbar';
import Footer from './footer';

const HomePage = () => {
  
  const [passMeter, setpassMeter] = useState("")
  const [answer1, setanswer1] = useState("")
  const [answer2, setanswer2] = useState("")
  const [answer3, setanswer3] = useState("")
  
  const isLoggedIn = () => {
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response)
      console.log(response.data.loggedIn)
    })
  }

  return(
    <>
      {/* Navigation bar here */}
      <Navbar />

      <button onClick={isLoggedIn}>click here</button>

      <main>
        
        {/* Should I put the input into <form>? */}

        {/* Password Meter */}
        <section>
          <form>
            
            <h2>Password Meter: </h2>
            
            <input 
              type="text" 
              name="passwordMeter"
              onChange={(event) => {setpassMeter(event.target.value)}}
              placeholder="Enter Password"
            />

            <br /><br />

            {/* Need to put either "onClick" or "onSubmit" */}
            <input type="submit" value="Check Password"/>
          
          </form>
        </section>

        {/* Password Generator */}
        <section>
          <form>

            <h2>Password Generator: </h2>
            
            <h4>[Question_1]</h4>
            <input 
              type="text" 
              name="answer1"
              onChange={(event) => {setanswer1(event.target.value)}}
              placeholder="Answer 1"
            />

            <h4>[Question_2]</h4>
            <input 
              type="text" 
              name="answer2"
              onChange={(event) => {setanswer2(event.target.value)}}
              placeholder="Answer 2"
            />

            <h4>[Question_3]</h4>
            <input 
              type="text" 
              name="answer3"
              onChange={(event) => {setanswer3(event.target.value)}}
              placeholder="Answer 3"
            />

            <br /><br />

            {/* Need to put either "onClick" or "onSubmit" */}
            <input type="submit" value="Generate Password"/>

          </form>
        </section>
        
      </main>

      {/* Footer bar here */}
      <Footer />
    </>
  )
}

export default HomePage