import React from 'react'
import './Home.css'

const Testing2 = () => {
  return (
    <>
    <div style={{maxWidth:"800px"}} class="container" id="main-container">
      <div class="d-flex justify-content-center">
        <p id="p-signIn">Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      
      <div class="d-flex justify-content-center flex-column flex-sm-row gap-2">
        <input id="signIn-input" type="text" class="form-control w-100" placeholder="Email Address"/>
        <button id="signinButton" type="button" class="btn btn-danger w-25">Get Started
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
    </>
  )
}

export default Testing2