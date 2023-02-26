import React from 'react'
import "../style/navbar.css"
import autocator from "../assets/AUTOCATOR LOGO-11 1 (1).png"
import hold from "../assets/holding.png"
import vet from "../assets/vet.png"
import one from  "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"
import five from "../assets/five.png"
import help from "../assets/help.png"
import help2 from "../assets/help2.png"
import plum from "../assets/plum.png"
import star from "../assets/star.png"
import star2 from "../assets/star2.png"
import face from "../assets/face.png"
// import int from "../assets/in.png"
// import tw from "../assets/tw.png"
import plus from "../assets/plus.png"
// import line from "../assets/line.png"


export default function navbar() {
  return (
    <section>
    <div className='home'>
        <div>
            <img src={autocator} alt="" />
        </div>
        <div>
            <h1>
            For Vehicle owners
            For Mechanicians
            </h1>
        </div>

        <div className='login'>

        <div className='log'> 
        <a href="./login.html">Login</a> 
        </div>

        <div>
        <button><a href="./signup.html">sign Up</a></button>
        </div>

        </div>
    </div>

    <div className='start'>
        <h1 className='auto'> 
            Autocare is our Responsibility
       </h1>
       <h6>
       Get Started
       </h6>
    </div>
    <div className='our'>
        <h1>
        Our Exciting Features!
        </h1>
        <img src={vet} alt="" />
    </div>

    <div className='box'>
        <div className='boxs'>
        <img src={one} alt="" />
        <h1>
        Tire rotation and alignment: 
        </h1>
        <p>
        Proper tire rotation and alignment 
       can improve handling, fuel efficiency,
       and prevent premature tire wear. 
        </p>
        </div>

        <div className='boxs'>
        <img src={two} alt="" />
        <h1>
        Tire rotation and alignment: 
        </h1>
        <p>
        Proper tire rotation and alignment 
       can improve handling, fuel efficiency,
       and prevent premature tire wear. 
        </p>
        </div>

        <div className='boxs'>
        <img src={three} alt="" />
        <h1>
        Highly skilled artisans: 
        </h1>
        <p>
        Our technicians and repairpersons
        are highly skilled and efficient, they
        deliver on the required service.
        </p>
        </div>
     </div>
     <div className='newbox'>
        
     <div className='boxs'>
        <img src={four} alt="" />
        <h1>
        Highly skilled artisans: 
        </h1>
        <p>
        Our technicians and repairpersons
        are highly skilled and efficient, they
        deliver on the required service.
        </p>
        </div>

        <div className='boxs'>
        <img src={five} alt="" />
        <h1>
        Highly skilled artisans: 
        </h1>
        <p>
        Our technicians and repairpersons
        are highly skilled and efficient, they
        deliver on the required service.
        </p>
        </div>

        </div>

        <div className='head'>
            <h4>
            Testimonials
            </h4>
            <h1>
            Why our users love <span color='#9D2B27'>AutoCator</span>
            </h1> 
            </div>                   
        
                            <div className='what'>
                            <div class="cover">
                            <div class="people">
                                <div class="inner">
                                    <div style="display: flex; align-items: center;">
                                        <div class="box"></div>
                                        <div class="circle-img">
                                        <img src={help} alt="" />
                                        </div>
                                    </div>
                                    <div class="name">
                                        <h3>Patrick Ajah</h3>
                                        <p>Business ownerr</p>
                                    </div>
                                </div>

                                <div class="live-about">
                                <img src= {star} alt="" />
                                <img src= {star} alt="" />
                                <img src= {star} alt="" />
                                <img src= {star2} alt="" />
                                    <p>Autocator is a game changer. I t has provided me with a platform
                                        to meet genuine car mechanist for my vehicle.</p>
                                </div>
                            </div>

                            <div class="people">
                                <div class="inner">
                                    <div style="display: flex; align-items: center;">
                                        <div class="box"></div>
                                        <div class="circle-img">
                                        <img src={help2} alt="" />
                                        </div>
                                    </div>
                                    <div class="name">
                                        <h3>Saerah Abubakar</h3>
                                        <p>Government worker</p>
                                    </div>
                                </div>
                                <div class="live-about">
                                <img src= {star} alt="" />
                                <img src= {star} alt="" />
                                <img src= {star2} alt="" />
                                <img src= {star2} alt="" />                                   
                                    <p>I am able to run my daily affairs without being worried about if 
                                     my car will be fixed peoperly or not.
                                     Autocator gave me that confidence..</p>
                                </div>
                            </div>
                        </div>
                    </div>

        <div className='our'>
            <h1> Frequently Asked Questions</h1>
            <img src= {star} alt="" />
        </div>
        <div className='info'>
            <ul>
                <li>
                     <p> How does AutoCator work?</p>
                    <img src= {plus} alt=""width="10px" height="10px"  />
                </li>
                <li>
                    <p>
                    Who is Autocator for? 
                    </p>
                    <img src= {plus} alt=""width="10px" height="10px"  />
                </li>
                <li>
                    <p>How do I get started?</p>
                <img src= {plus} alt=""width="10px" height="10px"  />
                </li>

                <li>
                    <p>How do I contact the repairperson? </p>
                <img src= {plus} alt=""width="10px" height="10px"  />
                </li>

                <li>
                    <p>How secure are my personal information?</p>
                <img src= {plus} alt=""width="10px" height="10px"  />
                </li>

                <li>
                    <p>Can I cancel my Premier plan subscription anytime? </p>
                <img src= {plus} alt=""width="10px" height="10px"  />
                </li>
                <li>
                    <p>Do you own the mechanic shops?</p>
                    <img src= {plus} alt=""width="10px" height="10px"  />
                </li>
            </ul>

            <div>
            <img src= {plum} alt="" />
            </div>
        </div>



        <div className='footer'>

        <div class="topfooter">
            <div>
                <a href="/"> <img src= {autocator} alt="" /></a>
                <div style="display: flex;">
                    <p>autocator@gmail.com </p>
                </div>
            
            <div>
                <h1>Learn More</h1>
                <p><a href="./about.html">Home</a></p>
                <p><a href="./faq.html">About us</a></p>
                <p><a href="./terms.html">Privacy Policy</a></p>
                <p><a href="./policy.html">Contact Us</a></p>
            </div>

            <div>
                <h1><a href="/">Products</a></h1>
                <p><a href="#about">Vehicle owners</a></p>
                <p><a href="#works">Mechanician</a></p>
                <p><a href="#works">Service Reminders</a></p>
            </div>
            <div>
            <div class="socio">
                <h1>Contact us</h1>
                <p> <a href="./contact.html">Mobile number: 08106107618,+234705483657890</a></p>
                <p> <a href="./contact.html">Email address : autocator@gmail.com </a></p>
            
            </div>
            </div>
                <div class="social">
                <img src= {face} alt="" />
                <img src= {star} alt="" />
                <img src= {star} alt="" />
                </div>
                
            </div>
            
        </div>
        <div class="livefooter">
        © 2023 AutoCator Media | All Rights Reserved

        </div>

        </div>



    </section>
    

  )
}