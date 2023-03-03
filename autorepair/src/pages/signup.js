import { Button } from '@mui/material'
import React from 'react'
import autocator from "../assets/AUTOCATOR LOGO-11 1 (1).png"
import "../style/signup.css"
import line2 from "../assets/line2.png"
import goggle from "../assets/goggle.png"
import facebook from "../assets/facebook (1).png"
import twitter from "../assets/twitter.png"
import female from "../assets/female.png"

const signup = () => {
  return (
    <section>

    <div className='signup'>
       < div class="topper">
               <div class="topper">
               <img src={autocator} alt="" />
               </div>
               <ul>
                <li class="topper">Products</li> 
                <li class="topper">Home</li>  
                <li class="topper">About Us</li> 
                <li class="topper">Testimonials</li> 
                <li class="topper"> Contact Us</li> 
                <li class="topper">Login</li>
                <div>
                 <button>sign Up</button>
                </div>
                </ul>
            </div>
        </div>
        <div className='account'>
        Create an Account!
        </div>
        <div className='all2'>
    <div className='together'>
        <div class="email">

        {/* <div class="email"> */}
                
                <div class="total">
            <div class="email">
                <h1 className='email'>
                    First Name
                    </h1>
                    <div class="cl">
                < input required placeholder='Full name' id='username'></input>
                </div>

            </div>
            {/* <div class="email">
                 <h1 className='email'>
                    Last Name
                    </h1>
                    <div class="cl">
              < input  required placeholder='surname' id='username'></input>
              </div>
            </div> */}
        </div>

                <div class="email">
                    <h1>
                    E-mail Address
                    </h1>
                    <div class="cl">
                   < input required placeholder='autocator@gmail.com ' id='email'></input>
                    </div>
                </div>

                <div class="email">
                    <h1>
                    Password
                    </h1>
                    <div class="cl">
                   < input  required placeholder='password' id='password'></input>
                    </div>
                </div>

                  <div class="email">
                    <h1>
                    Confirm Password
                    </h1>
                    <div class="cl">
                   < input  required placeholder='Confirm Password' id='Confirm Password'></input>
                    </div>
                </div>
      </div>
      <div className='click'>
        <div>
        Vehicle owner
        </div>
        <div>
        Mechanician 
        </div>
      </div>

      <div>
        <button className='star'>Get Started</button>
      </div>

    <div className='or'>
    <img src={line2} alt="" />
        <h1>OR</h1>
     <img src={line2} alt="" />
    </div>

    <div className='image'>
    <img src={goggle} alt="" />
    <img src={facebook} alt="" />
    <img src={twitter} alt="" />
    </div>

    <div className='text'>
        <h1>Already have an account? <span>Sign in</span>  </h1>
    </div>

    </div>
    <div className='woman'>
         <img src={female} alt="" />
         </div>
 </div>
    </section>
  )
}

export default signup