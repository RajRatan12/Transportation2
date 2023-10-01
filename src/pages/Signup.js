import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Driving Smart, Driving Safe: Be Part of the Solution."
      desc1="Be the change you want to see on the road"
      desc2="Join Our Cause for a Safer Tomorrow."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
